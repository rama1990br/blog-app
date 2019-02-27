function Minesweeper(el) {
	this.el = el;
	this.el.addEventListener('click', this.revealNumber.bind(this));
	this.matrix = [[-1,2,-1],[1,0,2],[0,1,-1]];
}

Minesweeper.prototype = {
	revealNumber: function(evt) {
		var button = evt.target;
		var row = button.getAttribute('data-row');
		var column = button.getAttribute('data-col');
		if(this.matrix[row][column] === -1) {
			console.log('Game over'); //TODO use Modal pop-up
		} else if(this.matrix[row][column] !== 0) {
			button.querySelector('span').textContent = this.matrix[row][column];
		} else {
			this.revealNeighbours(row, column, button);
		}
	},

	revealNeighbours: function(row, column, button) {
		var cells = this.el.querySelectorAll('data-wrapper');
		if(row > 0 && column < this.matrix[0].length) {
			button.querySelector('span').textContent = this.matrix[row][column];
			revealNeighbours(cells.filter(cell => {cell.dataset.rowNumber = row - 1}), cells.filter(cell => {cell.dataset.colNumber = column}))
		}
	}
};