/* SalesSeek Tracker */
/* Client side tracking js to be included in every tracked page */
/* Minify for production deployment */
/* Usage is <script src="http://salesseek.cdn.net/tracker.js?clientid=12345"></script> */

/* Configuration */
/* Note https not supported until we understand costs and requirements */

"use strict";

/* Buffer for tracker configuration */
/* http://feather.elektrum.org/book/src.html */

var salesseek = { }

/* call Piwik */
/* http://piwik.org/docs/javascript-tracking/ */
var _paq = _paq || [];
(function(){
    function parseQuery( query ) {
        var Params = new Object ();
        if ( ! query ) return Params; // return empty object
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

    var jsurl = 'https://a04936b1ada231af862c-4233f4199a778a9ae8f064641b54519c.ssl.cf3.rackcdn.com/piwik.js'; // production https URL
    var receiverurl = 'https://tracker.salesseek.net/trackreceiver';
    var scripts = document.getElementsByTagName('script');
    var params = {};
    var possibleParams = {}; // ... for back-compatibility with clientid param ...

    for ( var i = 0; i < scripts.length; ++i ) {
        var filename = scripts[ i ].src.replace( /^.*[\\\/]/, '' );

        // ... we try to find tracker.js script with salesseek_clientid or clientid param ...
        if ( filename.substring( 0, 10 ) ==='tracker.js' ) {
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

    // ...
    _paq.push(['setSiteId', params['salesseek_clientid']]); //read in from parseQuery
    _paq.push(['setTrackerUrl', receiverurl]);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    var d = document,
        g = d.createElement('script'),
        s = d.getElementsByTagName('script')[0];
    g.type='text/javascript';
    g.defer=true;
    g.async=true;
    g.src=jsurl;
    s.parentNode.insertBefore(g,s);

    salesseek[ 'visitorId' ] = readIdCookie();
})();
