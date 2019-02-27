function Application() {
	function init() {
  //   var checkboxesContainer = document.getElementById('checkbox-container');
		// this.checkboxes = new Checkboxes(checkboxesContainer);

		// var colourPaletteContainer = document.getElementById('colour-palette');
		// this.colourPalette = new ColourPalette(colourPaletteContainer);

		// var minesweeperContainer = document.getElementById('minesweeper');
		// this.minesweeper = new Minesweeper(minesweeperContainer);

    // var infiniteScrollContainer = document.getElementById('infinite-scroll');
    // this.infiniteScroll = new InfiniteScroll(infiniteScrollContainer);

    // var modalContainer = document.querySelector('.modal');
    // this.modal = new Modal(modalContainer);

    // var progressBarContainer = document.querySelector('#progress_bar');
    // this.progressBar = new ProgressBar(progressBarContainer);

    // var magnifierContainer = document.querySelector('#magnifier');
    // this.magnifierContainer = new Magnifier(magnifierContainer);

    // var carouselContainer = document.querySelector('.carousel');
    // this.carousel = new Carousel(carouselContainer);

    // var paginationContainer = document.getElementById('pagination');
    // this.pagination = new Pagination(paginationContainer);

		// var navigationContainer = document.getElementById('navigation');
		// this.navigation = new Navigation(navigationContainer);
	}
	init.apply(this, arguments);
	return this;
}

(function() {
 window.addEventListener('load', function() {
 	window.application = new Application();
 });
}());