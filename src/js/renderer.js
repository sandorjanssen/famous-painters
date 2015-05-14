var Renderer = (function () {
    function Renderer() {
    }
    Renderer.prototype.renderPainters = function (painters) {
        var painterSelect = document.getElementById('Painter');
        painters.items.forEach(function (p) {
            var opt = document.createElement('option');
            opt.setAttribute('title', p.name);
            opt.innerHTML = p.name;
            painterSelect.appendChild(opt);
        });
    };
    Renderer.prototype.renderPainterDetails = function (painter) {
        var painterName = document.getElementById('painterName');
        painterName.innerHTML = painter.name;
        var painterStyle = document.getElementById('painterStyle');
        painterStyle.innerHTML = painter.style;
        var painterExamples = document.getElementById('painterExamples');
        painterExamples.innerHTML = '';
        painter.examples.forEach(function (e) {
            var li = document.createElement('li');
            li.innerHTML = e;
            painterExamples.appendChild(li);
        });
    };
    return Renderer;
})();

//# sourceMappingURL=renderer.js.map