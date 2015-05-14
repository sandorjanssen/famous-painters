var painters = new Painters();
var renderer = null;
window.onload = function () {
    var painterSelect = document.getElementById('Painter');
    painterSelect.onchange = function () { return loadPainters(); };
    var loader = new PainterLoader('/JSON/famousPainters.json');
    loader.load();
    renderer = new Renderer();
};
function loadPainters() {
    var el = document.getElementById('Painter');
    try {
        var painter = painters.items.filter(function (item) { return item.name === el.value; }).reduce(function (item) { return new Painter(el.value, item.style, item.examples); });
        renderer.renderPainterDetails(painter);
    }
    catch (ex) {
        alert(ex.message);
    }
}

//# sourceMappingURL=app.js.map