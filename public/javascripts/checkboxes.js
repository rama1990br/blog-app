function Checkboxes(el) {
	this.el = el;
	this.el.addEventListener('click', this.handleClick.bind(this));
}

Checkboxes.prototype = {
	handleClick: function(evt) {
		var checkbox = evt.target;
		var otherCheckboxes = this.el.querySelector('.other-checkboxes');
		var checkboxes = this.el.querySelectorAll('.other-checkboxes input[type="checkbox"]');
		var numberOfCheckedCheckboxes = otherCheckboxes.dataset.numberOfCheckedBoxes;
		if(checkbox.id === 'select-all') {
			if(checkbox.checked) {
				checkboxes.forEach(checkbox => 
				{
					checkbox.checked = true;
				});
				numberOfCheckedCheckboxes = checkboxes.length;
			} else {
				checkboxes.forEach(checkbox => 
				{
					checkbox.checked = false;
				});
				numberOfCheckedCheckboxes = 0;
			}
		} else {
			var selectAllCheckbox = document.getElementById('select-all');
			checkboxes.forEach(checkbox => {
				if(checkbox.checked) {
					numberOfCheckedCheckboxes++;
				} else {
					numberOfCheckedCheckboxes--;
				}
			});
			if(numberOfCheckedCheckboxes === checkboxes.length) {
				
				selectAllCheckbox.checked = true;
			} else {
				selectAllCheckbox.checked = false;
			}
		} 
		otherCheckboxes.dataset.numberOfCheckedBoxes = numberOfCheckedCheckboxes;
	}
}