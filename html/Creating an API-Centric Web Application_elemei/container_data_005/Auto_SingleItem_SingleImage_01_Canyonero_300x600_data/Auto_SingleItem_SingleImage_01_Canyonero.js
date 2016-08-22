/**
 * @fileoverview Provides layout specific functionality for HTML5 layout.
 * This includes layout specific directives, that are responsible for
 * interaction with the user, alignment of the blocks and texts in them.
 * Also includes layout specification and initialization.
 */


/**
 * Utils object with specific functionality for the layout.
 * @param {!angular.Object} ng AngularJS object.
 * @return {!Object.<function>} Available functions.
 */
var layout = (function(ng) {
  /**
   * Minimal aspect ratio to consider an image to be vertical.
   * @const {number}
   */
  var ASPECT_RATIO = 1.2;


  /**
   * Separator to be used when we split the headline.
   * @const {string}
   */
  var HEADLINE_SEPARATOR = '^';


  /**
   * Regular expressions to format text.
   * @enum {RegExp}
   */
  var FormatRegExp = {
    BOLD_PARSER_REG: /([\W_]|^)(\*\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g,
    COLOR_REG: /(?:#)(?:[0-9A-Fa-f]{2}){3,4}/g,
    LIGHT_PARSER_REG: /([\W_]|^)(\@\@|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g
  };


  /**
   * Font weight values when formating text.
   * @enum {number}
   */
  var FontWeight_ = {
    BOLD: 700,
    LIGHT: 300
  };


  /**
   * Replacement value for format regular expressions.
   * @const {string}
   */
  var FORMAT_REG_REPLACEMENT = '$1$3$4';

  var module = ng.module('custom', []);
  var loadedRes = {};


  /**
   * Overrides global window.onAdData.
   * @param  {!Object} data Dynamic data payload.
   * @param  {!Object} util Dragomir util object.
   */
  window.onAdData = function(data, util) {
    var preloader = window.initPreloading(data);
    preloader.addCompletionListener(function() {
      loadedRes = preloader.getLoadedImages();
      utils.onAdData(data, util);
    });
    preloader.start();
  };


  /**
   * Controller for using data binding in layout.
   * @param {!angular.Scope} $scope AngularJS layout scope.
   * @param {!Object} dynamicData Dynamic data from DAB.
   */
  function LayoutController($scope, dynamicData) {
    helpers.LayoutController($scope, dynamicData);

    $scope.classes = getClasses($scope.design);
    $scope.stopAnimation = false;
    $scope.fontsLoaded = loadFonts($scope);


    /**
     * Expand product area container.
     */
    $scope.expandProduct = function() {
      layoutMethods.showTextBox();
    };


    /**
     * Shrink product area container.
     */
    $scope.shrinkProduct = function() {
      layoutMethods.shrinkTextBox();
    };


    /**
     * Changes the opacity of the color using its RGBA representation.
     * @param {string} hex The color to change.
     * @param {number} opacity Percentage to change the opacity of the color.
     * @return {?string} Updated color in RGBA.
     */
    $scope.toRGBA = function(hex, opacity) {
      hex = hex.replace('#', '');
      var r = parseInt(hex.substring(0, 2), 16);
      var g = parseInt(hex.substring(2, 4), 16);
      var b = parseInt(hex.substring(4, 6), 16);

      return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    };


    /**
     * Changes the shade of the color.
     * @param {string} color The color to change.
     * @param {number} percent Percentage to shade the color.
     * @return {?string} Updated color in HEX.
     */
    $scope.shadeColor = function(color, percent) {
      percent = percent / 100 * -1;
      var f = parseInt(color.slice(1), 16),
          t = percent < 0 ? 0 : 255,
          p = Math.abs(percent),
          R = f >> 16,
          G = f >> 8 & 0x00FF,
          B = f & 0x0000FF;

      return '#' +
          (0x1000000 + (Math.round((t - R) * p) + R) *
          0x10000 + (Math.round((t - G) * p) + G) *
          0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
    };


    /**
     * Checks aspect ratio of the image. All images with aspect ratio
     * less than ASPECT_RATIO are considered to be thin.
     * @return {boolean} Whether the image is thin or not.
     */
    $scope.checkThinLogo = function(url) {
      var imgContainer = loadedRes[url];
      var img = imgContainer && imgContainer[0];
      return img && (img.width / img.height < ASPECT_RATIO);
    };

    if ($scope.products[0]) {
      $scope.currUrl = $scope.products[0].url;
    }

    if ($scope.headline.hasOwnProperty('txt') && $scope.headline.txt != '') {
      var lines = $scope.headline.txt.split(HEADLINE_SEPARATOR);
      $scope.headlinesNumber = lines.length;
      for (var i = 0; i < lines.length; i++) {
        $scope.headline['line' + (i + 1)] = lines[i];
      }
      $scope.showHeadlineAnimation = true;
    } else {
      $scope.showHeadlineAnimation = false;
    }
    $scope.stopAnimation = false;

    $scope.$on('fontsLoaded', function() {
      layoutMethods.animationBuild($scope.showHeadlineAnimation);
    });

    angular.forEach($scope.products, function(product) {
      product.price = product.salePrice || product.price;
    });
  }


  /**
   * Exposes enhanced formatText as a custom attribute.
   * @return {angular.Directive} Directive definition object.
   */
  module.directive('formatText', function() {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        setTimeout(function() {
          formatText(el);
        }, 0);
      }
    };
  });


  /**
   * Exposes enhanced CustomTextFit as a custom attribute.
   * @return {angular.Directive} Directive definition object.
   */
  module.directive('customExtTextFit', function() {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        scope.$on('fontsLoaded', function() {
          customExtTextFit(el);
        });
      }
    };
  });


  /**
   * Exposes logoFit as a custom attribute.
   * Sets minimum and maximum padding values for the logo.
   * @return {!angular.Directive} Directive definition object.
   */
  module.directive('customLogoFit', function() {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        var done = false;
        scope.$watch(attrs.loc, function() {
          if (!done) {
            var el = elem[0];
            var src = scope.$eval(attrs.loc);

            if (scope.checkUrl(src)) {
              setTimeout(function() {
                var data = scope.design['logoPadding'] || 0;
                var logoMargins = utils.logoMargin(elem);
                var padding = parseInt(data, 10);
                var parent = elem.parent();

                var maxLogoPadding = LogoPadding.MAX;
                var minLogoPadding = LogoPadding.MIN;

                if (attrs.maxLogoPadding) {
                  maxLogoPadding = attrs.maxLogoPadding;
                }
                if (attrs.minLogoPadding) {
                  minLogoPadding = attrs.minLogoPadding;
                }

                padding = Math.min(Math.max(minLogoPadding,
                    padding), maxLogoPadding);
                var availableHeight = parseInt((parent[0].offsetHeight -
                    MIN_LOGO_SIZE) / 2, 10);
                var availableWidth = parseInt((parent[0].offsetWidth -
                    MIN_LOGO_SIZE) / 2, 10);
                parent.css({
                  paddingTop: Math.min(availableHeight, padding +
                      logoMargins.t) + 'px',
                  paddingRight: Math.min(availableWidth, padding +
                      logoMargins.r) + 'px',
                  paddingBottom: Math.min(availableHeight, padding +
                      logoMargins.b) + 'px',
                  paddingLeft: Math.min(availableWidth, padding +
                      logoMargins.l) + 'px'
                });

                elem.addClass('inline-wrapper');
                new ddab.layouts.utils.DynamicImageFit(el,
                    src, attrs.scaletype, attrs.aligntype);
                scope.$digest();
              }, 0);
            }
            done = true;
          }
        });
      }
    };
  });


  /**
   * Parse the text style based in predefined characters.
   * @param {Element} el The DOM element to apply the styles.
   */
  function formatText(el) {
    var text = el[0].textContent;

    if (FormatRegExp.COLOR_REG.test(text)) {
      el[0].textContent = text.replace(FormatRegExp.COLOR_REG, '');
      FormatRegExp.COLOR_REG.lastIndex = 0;
      el[0].style.color = FormatRegExp.COLOR_REG.exec(text)[0];
      text = el[0].textContent;
    }

    if (FormatRegExp.BOLD_PARSER_REG.test(text)) {
      el[0].textContent = text.replace(FormatRegExp.BOLD_PARSER_REG,
          FORMAT_REG_REPLACEMENT);
      el[0].style.fontWeight = FontWeight_.BOLD;
      text = el[0].textContent;
    }

    if (FormatRegExp.LIGHT_PARSER_REG.test(text)) {
      el[0].textContent = text.replace(FormatRegExp.LIGHT_PARSER_REG,
          FORMAT_REG_REPLACEMENT);
      el[0].style.fontWeight = FontWeight_.LIGHT;
      text = el[0].textContent;
    }

  }

  /**
   * Creates DynamicTextFit and applies alignText on it
   * @param {!angular.Object} element Object of the DOM element to handle.
   */
  function customExtTextFit(element) {
    var minfontsize = element.attr('minfontsize') &&
        Number(element.attr('minfontsize'));
    var multiline = element.attr('multiline') &&
        element.attr('multiline').toBoolean();
    var truncate = element.attr('truncate') &&
        element.attr('truncate').toBoolean();
    var valign = element.attr('valign');
    var originalText = element.text().trim();
    var dynamicTextFit = new ddab.layouts.utils.DynamicTextFit(element[0],
        minfontsize, multiline, truncate);

    dynamicTextFit.addEventListener('textfit', function() {
      var isTruncated = dynamicTextFit.isTruncated();

      // If the text is truncated then add "title" attribute to the original
      // element.
      if (isTruncated && !element[0].hasAttribute(DomAttribute.TITLE)) {
        element[0].setAttribute(DomAttribute.TITLE, originalText);
      }

      if (valign) {
        helpers.alignText(element);
      }
    });

    dynamicTextFit.scaleText();
  }


  /**
   * Load the custom fonts for the layout
   * @param {!angular.Scope} scope AngularJS layout scope.
   * @return {boolean} if the fonts were loaded or not.
   */
  function loadFonts(scope) {
    // We need to load the fonts before we try to fit the texts.
    var el = document.getElementById('ad-container');

    el.style.visibility = 'hidden';
    if (!helpers.isIE()) {
      WebFont.load({
        google: {
          families: ['Roboto+Condensed:400,700,300']
        },
        timeout: 2000,
        active: function() {
          // Let's set a small time out just in case it fails.
          setTimeout(function() {
            // Broadcast the event so customExtTextFit can do its magic.
            scope.$broadcast('fontsLoaded');
            el.style.visibility = 'visible';
            return true;
          }, 10);
        },
        inactive: function() {
          // Let's set a small time out just in case it fails.
          setTimeout(function() {
            // Broadcast the event so customExtTextFit can do its magic.
            scope.$broadcast('fontsLoaded');
            el.style.visibility = 'visible';
            return true;
          }, 10);
        }
      });
    } else {
      setTimeout(function() {
        // Broadcast the event and use the default fonts.
        scope.$broadcast('fontsLoaded');
        el.style.visibility = 'visible';
        return false;
      }, 100);
    }
  }


  /**
   * Creates the list of the CSS classes to apply to the layout content
   * depending on parameters from DAB.
   * @param {!Object} design Object from DAB with design settings.
   * @return {!Object.<string>} All available CSS classes.
   */
  function getClasses(design) {
    return {
      layout: design['cornerStyle'],
      button: design['btnStyle']
    };
  }

  ng.module('layout', ['utils', module.name],
      function($controllerProvider) {
        $controllerProvider.allowGlobals();
  });

  return {
    controller: LayoutController
  };
})(angular);



(function() {
  // Single item for all Verticals
  utils.defineMeta('version', '3.1');

  // REQUIRED
  utils.defineAttribute('Headline', 'productClickOnly', true);
  utils.defineAttribute('Product', 'name', true);
  utils.defineAttribute('Product', 'url', true);

  // OPTIONAL
  utils.defineAttribute('Design', 'logoImageUrl', false);
  utils.defineAttribute('Design', 'logoImageUrl', false);
  utils.defineAttribute('Design', 'bgColor', false);
  utils.defineAttribute('Design', 'bgColorAlt', false);
  utils.defineAttribute('Design', 'btnColor', false);
  utils.defineAttribute('Design', 'cornerStyle', false);
  utils.defineAttribute('Design', 'logoPadding', false);
  utils.defineAttribute('Design', 'txtColorCta', false);
  utils.defineAttribute('Design', 'txtColorDisc', false);
  utils.defineAttribute('Design', 'txtColorPrice', false);
  utils.defineAttribute('Design', 'txtColorPricePrefix', false);
  utils.defineAttribute('Design', 'txtColorProduct', false);
  utils.defineAttribute('Design', 'txtColorTitle', false);
  utils.defineAttribute('Design', 'txtColorSubTitle', false);
  utils.defineAttribute('Headline', 'cta', false);
  utils.defineAttribute('Headline', 'disclaimer', false);
  utils.defineAttribute('Headline', 'pricePrefix', false);
  utils.defineAttribute('Headline', 'url', false);
  utils.defineAttribute('Headline', 'txt', false);
  utils.defineAttribute('Product', 'description', false);
  utils.defineAttribute('Product', 'imageUrl', false);
  utils.defineAttribute('Product', 'price', false);
  utils.defineAttribute('Product', 'subTitle', false);

  // OCCURRENCES
  utils.defineOccurrences('Headline', 1, 1);
  utils.defineOccurrences('Design', 1, 1);
  utils.defineOccurrences('Product', 1, 1);

  window.setup = function() {
    document.getElementById('ad-container').addEventListener('click',
        utils.clickHandler, false);
  };

  window.initPreloading = function(dynamicData) {
    var data = dynamicData.google_template_data.adData[0];
    var design = utils.parse(data, 'Design')[0];
    var prods = utils.parse(data, 'Product').slice(0);
    var preloader = utils.preloader;
    for (var i = 0; i < prods.length; i++) {
      preloader.addImage(prods[i].imageUrl);
    }
    preloader.addImage(design.logoImageUrl);
    preloader.addImage(design.bgImageUrl);
    return preloader;
  };
})();
