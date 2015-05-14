var painters: Painters<Painter> = new Painters<Painter>();
var renderer: Renderer = null;

window.onload = () => {
	var painterSelect = (<HTMLSelectElement> document.getElementById('Painter'));

	painterSelect.onchange = () => loadPainters();

    var loader = new PainterLoader('/JSON/famousPainters.json');

	loader.load();

	renderer = new Renderer();
};

function loadPainters() {
    var el = (<HTMLSelectElement> document.getElementById('Painter'));
    try {
        var painter = painters.items
            //Find selected item by name
            .filter(item => item.name === el.value)
            //return the item
            .reduce(item => new Painter(
                el.value,
                item.style,
                item.examples
            ));
        renderer.renderPainterDetails(painter);
    } catch (ex) {
        alert(ex.message);
    }
}