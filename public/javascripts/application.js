
function Application() {
	function init() {
		var navigationElem = document.querySelector('.navigation'); 
		this.navigation = new Navigation(navigationElem);
		var infiniteScrollContainer = document.getElementById('infinite-scroll');
		this.infiniteScroll = new InfiniteScroll(infiniteScrollContainer);
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