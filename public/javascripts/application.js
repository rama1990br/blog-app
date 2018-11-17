// function Carousel() {
// 	this.startIndex = 0;
// 	this.endIndex = 4;
// 	this.poppedOutItems = [];

// 	this.carouselItems = Array.from(document.querySelectorAll('.carousel-items li'));

// 	this.nextButton = document.querySelector('.btn-next');
// 	this.nextButton.addEventListener('click', this.nextButtonClick.bind(this));

// 	this.previousButton = document.querySelector('.btn-previous');
// 	this.previousButton.addEventListener('click', this.previousButtonClick.bind(this));
// }

// Carousel.prototype = {
// 	nextButtonClick: function (evt) {
// 		for(var i = 0; i <= 4 && this.carouselItems.length >= 4; i++) {
// 			this.carouselItems[i].remove();
// 		}
// 		this.poppedOutItems = this.poppedOutItems.concat(
// 		this.carouselItems.splice(0, 4));
// 		this.startIndex += 4;
// 		this.endIndex += 4;
// 	},

// 	previousButtonClick: function(evt) {
// 		this.startIndex -= 4;
// 		this.endIndex -= 4;
// 		var carousel = document.querySelector('.carousel-items');
// 		for(var j = 0; j < 4; j++) {
// 			var foo = document.querySelectorAll('.carousel-items li')[0];
// 			var node = this.poppedOutItems.pop();
// 			if(this.carouselItems.length === 0) {
// 				carousel.insertBefore(node);
// 			} else {
// 			  carousel.insertBefore(node, foo);
// 			}
// 		} 
// 			this.carouselItems = Array.from(document.querySelectorAll('.carousel-items li'));
// 	}
// };


// (function Application() {
// 	function _initCarousel() {
// 		this.carousel = new Carousel();
// 	}

// 	window.addEventListener('load', function() {
// 		_initCarousel();
// 	});
// }());


function Modal() {
	this.modalTrigger = document.querySelector('.btn-display-modal');
	this.modalTrigger.addEventListener('click', this.displayModal.bind(this));
	this.closeModalButton = document.querySelector('.btn-close');
	this.closeModalButton.addEventListener('click', this.closeModal.bind(this));
}

Modal.prototype = {
	displayModal: function() {
		console.log('Modal displayed');
		var modal = document.querySelector('.modal');
		modal.classList.toggle('show-modal');
	},

	closeModal: function() {
		console.log('Modal closed');
		var modal = document.querySelector('.modal');
		modal.classList.toggle('show-modal');
	}
};

(function Application() {
	window.addEventListener('load', function() {
		this.modal = new Modal();
	});
}());