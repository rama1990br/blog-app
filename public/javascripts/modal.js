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