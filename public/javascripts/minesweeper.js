function Minesweeper(el) {
	this.el = el;
	this.el.addEventListener('click', this.revealNumber.bind(this));
}

Minesweeper.prototype = {
	revealNumber: function(evt) {
		
	}

};