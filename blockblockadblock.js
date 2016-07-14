// ==UserScript==
// @author Charlie Somerville
// @description This prevents the BlockAdBlock anti-Adblock script from working.
// @name Block BlockAdBlock
// @namespace greasyfork.org
// @version 0.0.1
// @icon https://adblockplus.org/favicon.ico
// @include *
// @license MIT
// @grant none
// @run-at document-start
// @copyright 2016 Charlie Somerville
// ==/UserScript==

var injected = '(function () {\n' +
'    var descriptor = {\n' +
'        value: {},\n' +
'        writable: false,\n' +
'        configurable: false,\n' +
'    };\n' +
'\n'
'    Object.defineProperty(window, "BlockAdBlock", descriptor);\n' +
'    Object.defineProperty(window, "blockAdBlock", descriptor);\n' +
'})();';

var script = document.createElement("script");

script.appendChild(document.createTextNode(injected);

document.children[0].appendChild(script);
