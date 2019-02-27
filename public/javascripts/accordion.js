(function() {
  const panels = {
    panel1: document.querySelector('.panel1'),
    panel2: document.querySelector('.panel2'),
    panel3: document.querySelector('.panel3'),
  }
  
  function closeAllAccordionPanels() {
    Object.keys(panels).forEach(elem => {
      panels[elem].style.display = 'none';
    });
  }
  
  function handleAccordionClick(evt) {
    closeAllAccordionPanels();
    const panel = evt.target.getAttribute('data-tab');
    panels[panel].style.display = 'block';
  }
  
  function initAccordion() {
   const container = document.querySelector('.container');
   container.addEventListener('click', handleAccordionClick);
  }
  
  initAccordion();
}());