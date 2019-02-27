function ProgressBar() {
  const addButton = document.querySelector('#add');
  const container = document.querySelector('#container');
  let promise = Promise.resolve();

  function createNewBar() {
    const newProgress = document.createElement('div');
    const newBar = document.createElement('div');
    newBar.setAttribute('class', 'bar');
    newProgress.setAttribute('class', 'progress');
    newProgress.appendChild(newBar);
    container.appendChild(newProgress);
    return newProgress;
  }

  addButton.addEventListener('click', (event) => {
    const progress = createNewBar();
    promise = promise.then(() => new Promise((resolve, reject) => {
       setTimeout(() => {
         progress.classList.add('active');
         setTimeout(resolve, 2000);
      }, 0);
     }));
  });
};