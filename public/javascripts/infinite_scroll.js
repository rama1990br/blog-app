function debounce(func, timeout) {
	var timerId;
	return function(args) {
		console.log('called');
		if(timerId === undefined) {
			timerId = setTimeout(function() {
				func.apply(this, args);
				clearTimeout(timerId);
				timerId = undefined;
			}, timeout);
		} else {
			clearTimeout(timerId);
			timerId = setTimeout(function() {
				func.apply(this, args);
				clearTimeout(timerId);
				timerId = undefined;
			}, timeout);
		}
	};
}

function InfiniteScroll(el) {
	this.el = el;
	this.el.addEventListener('scroll', debounce(this.scrollMessage.bind(this, 500)));
}

InfiniteScroll.prototype = {
	scrollMessage: function() {
		if (this.isNearBottom()) {
			this.getNextPage();
		}
	},

	getNextPage: function() {
	fetch('http://localhost:3000/posts')
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			for(var i = 0; i < json.length; i++) {
				var li = document.createElement('li');
				li.textContent = json[i].cardNumber;
				li.setAttribute('class', 'card');
				this.el.appendChild(li);
			}
		});
	};

	isNearBottom: function () {
	var scrollTop = this.el.scrollTop;
	var cardHeight = 100;
	var maxContainerHeight = 500;
	if (scrollTop + cardHeight > maxContainerHeight) {
		console.log('Near the bottom!');
		return true;
	}
	return false;
	}

};