class Renderer {
	renderPainters(painters: Painters<IPainter>) {
		var painterSelect = document.getElementById('Painter');

		painters.items.forEach((p) => {
			var opt = document.createElement('option');
			opt.setAttribute('title', p.name);
			opt.innerHTML = p.name;
			painterSelect.appendChild(opt);
		});
	}

	renderPainterDetails(painter: IPainter) {
		var painterName = (<HTMLSelectElement> document.getElementById('painterName'));
		painterName.innerHTML = painter.name;

		var painterStyle = (<HTMLSelectElement> document.getElementById('painterStyle'));
		painterStyle.innerHTML = painter.style;

		var painterExamples = (<HTMLSelectElement> document.getElementById('painterExamples'));
		painterExamples.innerHTML = '';
		painter.examples.forEach((e) => {
			var li = document.createElement('li');
			li.innerHTML = e;
			painterExamples.appendChild(li);
		});
	}
}