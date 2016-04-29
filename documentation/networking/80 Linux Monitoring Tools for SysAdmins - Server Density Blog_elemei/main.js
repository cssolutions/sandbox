function createCookie(name,value,days) {
    console.log('executes create');
    if (days) {
        console.log('inside days');
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else
        var expires = "";
    document.cookie = name+"="+value+expires+";";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}


(function($) {

    window.MTIProjectId='d388b8b7-3618-4d9c-97c0-e8a162d04cbd';
    var mtiTracking = document.createElement('script');
    mtiTracking.type='text/javascript';
    mtiTracking.async='true';
    mtiTracking.src=('https:'==document.location.protocol?'https:':'http:')+'//fast.fonts.com/t/trackingCode.js';
    (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild( mtiTracking );


    $(".rslides").responsiveSlides({
        auto: false,
        pagination: true,
        nav: true,
        fade: 200
    });


    // handle links with @href started with '#' only
    $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $(id).offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
    });

    $(window).on('load', function(e) {
            var queryDict = {};
            location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1];})
            console.log(queryDict);
            var intervalId;
            var test;
            intervalId = setInterval(checkEmail, 2);
            function checkEmail(){
                test = $('html #om-yp6mhcdjrmyabloi-holder #om-sidebar-action-optin-email');
                if (test.length > 0) {
                    test.val(queryDict.email);
                    clearInterval(intervalId);
                }
            }
    });

})(jQuery);
