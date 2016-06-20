/* SalesSeek Register */
/* http://my.opera.com/community/forums/topic.dml?id=132571 */
/* http://stackoverflow.com/questions/2052123/is-is-possible-to-bind-a-submit-function-before-any-existing-onsubmit-submit */
/* http://stackoverflow.com/questions/15201993/adding-a-second-submit-handler */
/* OK in Safari 5.1.8, Chrome 26.0.1410.65, FF 20.0 */
(function() {
    if (!window.addEventListener) {
        //Browser is IE8 or lower
        return;
    }

    var params = {};
    var receiverScheme = 'https';
    var receiverHostPrefix = 'production-web-form-proc-';
    var receiverDomain = 'salesseek.net';
    var receiverPath = '/form';
    var receiverCount = 3;

    // compact and fast random v4 UUID from https://gist.github.com/jed/982883
    function uuid(x){return x?(x^Math.random()*16>>x/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,uuid)}

    function parseQuery( query ) {
        var Params = new Object();
        if ( !query ) return Params; // return empty object

        var Pairs = query.split(/[;&]/);
        for ( var i = 0; i < Pairs.length; i++ ) {

        var KeyVal = Pairs[i].split('=');
        if ( ! KeyVal || KeyVal.length != 2 ) continue;
            var key = unescape( KeyVal[0] ),
                val = unescape( KeyVal[1] ),
                val = val.replace(/\+/g, ' ');
            Params[key] = val;
        }
        return Params;
    }

    function readIdCookie() { //http://www.quirksmode.org/js/cookies.html
        // avoids having to plug in specific domain hash, just looks for first _pk_id beginning cookie, so
        // this will fail if more than two piwik trackers installed....
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)===' ') c = c.substring(1,c.length); {
                if (c.match(/_pk_id.*?=/)) {
                    return c.substring(c.match(/_pk_id.*?=/)[0].length,c.length);
                }
            }
        }
        return null;
    }

    function getValuesFromForm(form) {
        var values = {};

        var elements = form.elements;
        for (var i = 0; i < elements.length; i++) {
            var name = elements[i].getAttribute('name');
            var value = null;

            if (elements[i].type === 'checkbox') {
                value = elements[i].checked;
            }
            else if (elements[i].type === 'radio') {
                if (elements[i].checked) {
                    value = elements[i].value;
                }
            }
            else {
                value = elements[i].value;
            }

            if (name && value) {
                values[name] = value;
            }
        }

        return values;
    }

    function serializeValues(values) {
        var result = '';

        var first = true;
        for (key in values) {
            value = values[key];
            result += (first ? '' : '&') + key + '=' + encodeURIComponent(value);
            first = false;
        }

        return result;
    }

    // // Do the SalesSeek request as loading an iframe to avoid CORS checks
    function setAttributes(element, attributes) {
        for (var key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }

    function createElementWithAttributes(type, attributes) {
        var element = document.createElement(type);

        setAttributes(element, attributes);

        return element;
    }

    function newonsubmit(event) {
        //var form = event ? event.target: this, //use strict doesn't like this
        var form,
            formhtml,
            $newform,
            iframehtml,
            $iframe,
            extrainfo,
            $extrainfo,
            oldfrm_elements,
            newfrm_elements,
            source,
            timeoutHandler,
            isSentOriginalRequest;

        // Get hold of the original form
        event.preventDefault();
        form = event.target;

        // Make sure we only sent the original form request once after all receiver requests have been sent
        var pendingReceiverRequests = 0;
        function sendOriginalRequest() {
            if (--pendingReceiverRequests <= 0) {
                form._submit();
                if (timeoutHandler) {
                    window.clearTimeout(timeoutHandler);
                    timeoutHandler = null;
                }
            }
        }

        // Set up a timeout that will trigger the original request in case we don't receive answer from SalesSeek
        timeoutHandler = window.setTimeout(function(){
            pendingReceiverRequests = 0;
            sendOriginalRequest();
        }, 5000);

        // Get Values from form and add SalesSeek meta information
        var formValues = getValuesFromForm(form);
        formValues.salesseekclientid = params['salesseek_clientid'];
        formValues.unique_pk_id = readIdCookie();
        formValues.request_id = uuid();

        // Create iframes to do CORS request
        function createCORSIframe(i) {
            var receiverUrl = (
                receiverScheme + '://' + receiverHostPrefix + '0' + i + '.' + receiverDomain + receiverPath
            );
            return createElementWithAttributes('iframe', {
                id: 'ssreceiver' + i,
                name: 'ssreceiver' + i,
                src: receiverUrl + '?' + serializeValues(formValues),
                frameborder: '0',
                style: 'display:none; margin:0px;'
            });
        }

        var body = document.getElementsByTagName('body')[0];
        for ( var i = 1; i <= receiverCount; i++ ) {
            var iframe = createCORSIframe(i);
            body.appendChild(iframe);
            // Listen on load event on the iframe to trigger the original form request
            iframe.addEventListener('load', sendOriginalRequest, false);
            pendingReceiverRequests++;
        }
    }

    // ...
    var scripts = document.getElementsByTagName('script');
    var possibleParams = {}; // ... for back-compatibility with clientid param ...

    for ( var i = 0; i < scripts.length; ++i ) {
        var filename = scripts[ i ].src.replace( /^.*[\\\/]/, '' );

        // ... we try to find register.js script with salesseek_clientid or clientid param ...
        if ( filename.substring( 0, 11 ) ==='register.js' ) {
            params = parseQuery( filename.substring( filename.indexOf( '?' ) + 1 ) );

            if ( params.salesseek_clientid ) {
                break;
            }
            else if ( params.clientid ) {
                possibleParams = params;
            }
        }
    }

    // ... clientid instead salesseek_clientid? ...
    if ( !params.salesseek_clientid && possibleParams.clientid ) {
        params.salesseek_clientid = possibleParams.clientid;
    }

    window.addEventListener('submit', newonsubmit, true);

    // If a script calls someForm.submit(), the onsubmit event does not fire,
    // so we need to redefine the submit method of the HTMLFormElement class.
    // ? on Chrome sand-boxing if it allows this?
    // http://briancrescimanno.com/2009/05/14/form-submit-method-doesnt-fire-submit-event-workaround/
    HTMLFormElement.prototype._submit = HTMLFormElement.prototype.submit;
    HTMLFormElement.prototype.submit = newonsubmit;

    var onload = function() {
        var hidden = createElementWithAttributes("input", {
            type: "hidden",
        });

        var submitClick = function() {
            hidden.name = this.name;
            hidden.value = this.value;
            this.form.appendChild(hidden);
        };

        var forms = document.getElementsByTagName("form");
        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];
            var elements = form.elements;
            for (var j = 0; j < elements.length; j++) {
                var element = elements[j];
                if (element.type == "submit") {
                    element.addEventListener("click", submitClick);
                }
            }
        }
    };
    if (document.readyState === "complete") {
        onload();
    } else {
        window.addEventListener("DOMContentLoaded", onload);
    }
})();
