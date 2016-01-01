function injected() {
    var descriptor = {
        value: {},
        writable: false,
        configurable: false,
    };

    Object.defineProperty(window, "BlockAdBlock", descriptor);
    Object.defineProperty(window, "blockAdBlock", descriptor);
}

var script = document.createElement("script");

script.appendChild(document.createTextNode("(" + injected + ")();"));

document.children[0].appendChild(script);
