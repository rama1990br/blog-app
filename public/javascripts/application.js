function Application() {
	function init() {
		var colourPaletteContainer = document.getElementById('colour-palette');
		this.colourPalette = new ColourPalette(colourPaletteContainer);
	}
	init.apply(this, arguments);
	return this;
}
(function() {
 	window.addEventListener('load', function() {
 		window.application = new Application();
 	});
}());