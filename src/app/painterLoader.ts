/// <reference path="../../tools/typings/jquery/jquery.d.ts" />

class PainterLoader {
	constructor(public url: string) {}

	load() {
		$.getJSON(this.url, (data) => {
			this.mapData(data);
		});
	}

	mapData(data) {
		if (data) {
			var famousPainters: any[] = data.famousPainters;

			famousPainters.forEach((p) => {
				painters.items.push(new Painter(p.name, p.style, p.examples));
			});

			renderer.renderPainters(painters);
		}
	}
}