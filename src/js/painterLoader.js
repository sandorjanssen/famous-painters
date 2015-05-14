/// <reference path="../../tools/typings/jquery/jquery.d.ts" />
var PainterLoader = (function () {
    function PainterLoader(url) {
        this.url = url;
    }
    PainterLoader.prototype.load = function () {
        var _this = this;
        $.getJSON(this.url, function (data) {
            _this.mapData(data);
        });
    };
    PainterLoader.prototype.mapData = function (data) {
        if (data) {
            var famousPainters = data.famousPainters;
            famousPainters.forEach(function (p) {
                painters.items.push(new Painter(p.name, p.style, p.examples));
            });
            renderer.renderPainters(painters);
        }
    };
    return PainterLoader;
})();

//# sourceMappingURL=painterLoader.js.map