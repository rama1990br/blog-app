function Carousel(el) {
  this.el = el;
 this.poppedOutItems = [];
   this.carouselItems = Array.from(this.el.querySelectorAll('.carousel-items li'));
   this.nextButton = this.el.querySelector('.btn-next');
 this.nextButton.addEventListener('click', this.nextButtonClick.bind(this));
   this.previousButton = this.el.querySelector('.btn-previous');
 this.previousButton.addEventListener('click', this.previousButtonClick.bind(this));
}
 Carousel.prototype = {
 nextButtonClick: function (evt) {
  var parentNode = this.el.querySelector('.carousel-items');
   for(var i = 0; i < 4 && this.carouselItems.length >= 4; i++) {
     parentNode.removeChild(this.carouselItems[i]);
   }
   this.poppedOutItems = this.poppedOutItems.concat(
   this.carouselItems.splice(0, 4));
 },
   previousButtonClick: function(evt) {
   var parentNode = this.el.querySelector('.carousel-items');
   for(var j = 0; j < 4; j++) {
     var referenceNode = this.el.querySelectorAll('.carousel-items li')[0];
     var currentNode = this.poppedOutItems.pop();
     if(this.carouselItems.length === 0) {
       parentNode.insertBefore(currentNode);
     } else {
       parentNode.insertBefore(currentNode, referenceNode);
     }
   }
 }
};