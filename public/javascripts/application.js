(function Application() {
	window.addEventListener('load', function() {
		function handlePagination(evt) {
			console.log('Hi!');
			evt.preventDefault();
		};

		var pages = document.getElementById('pages');
		pages.addEventListener('click', handlePagination);
	});
}());