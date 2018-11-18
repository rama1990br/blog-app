function getNextPage() {
	fetch('http://localhost:3000/posts')
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			var infiniteScrollContainer = document.getElementById('infinite-scroll');
			for(var i = 0; i < json.length; i++) {
				var li = document.createElement('li');
				li.textContent = json[i].cardNumber;
				li.setAttribute('class', 'card');
				infiniteScrollContainer.appendChild(li);
			}
		});
};

function scrollMessage() {
	var infiniteScrollContainer = document.getElementById('infinite-scroll');
	if (isNearBottom(infiniteScrollContainer)) {
		getNextPage();
	}
};

function isNearBottom(infiniteScrollContainer) {
	var scrollTop = infiniteScrollContainer.scrollTop;
	var cardHeight = 100;
	var maxContainerHeight = 500;
	if (scrollTop + cardHeight > maxContainerHeight) {
		console.log('Near the bottom!');
		return true;
	}
	return false;
}

function debounce(func) {
	var timerId;
	return function(args) {
		console.log('called');
		if(timerId === undefined) {
			timerId = setTimeout(function() {
				func.apply(this, args);
				clearTimeout(timerId);
				timerId = undefined;
			}, 500);
		} else {
			clearTimeout(timerId);
			timerId = setTimeout(function() {
				func.apply(this, args);
				clearTimeout(timerId);
				timerId = undefined;
			}, 500);
		}
	};
}

(function Application() {
	window.addEventListener('load', function() {
		var infiniteScrollContainer = document.getElementById('infinite-scroll');
		var scrollHandler = debounce(scrollMessage);
		infiniteScrollContainer.addEventListener('scroll', scrollHandler);
	});
}());