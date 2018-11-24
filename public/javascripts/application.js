
function Application() {
	function init() {
		var minesweeperContainer = document.getElementById('minesweeper');
		this.minesweeper = new Minesweeper(minesweeperContainer);
	}
	init.apply(this, arguments);
	return this;
}

(function() {
 window.addEventListener('load', function() {
 	window.application = new Application();
 });
}());