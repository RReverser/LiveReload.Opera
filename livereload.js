// ==UserScript==
// @name LiveReload
// @description Live reload for Sublime Text 2.
// @author RReverser
// ==/UserScript==

addEventListener('load', function() {
    var script = document.createElement('script');
    script.src = 'http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1';
    document.head.appendChild(script);
});
