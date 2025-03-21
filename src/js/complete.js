import sortIcon from '../icons/sort.svg';

import DOM from './DOM';
import { loadTasks } from './task';


function displayComplete() {
  const tasks = loadTasks();
  const main = document.querySelector('.layout__main');
  main.textContent = '';
  main.insertAdjacentHTML( // Add DOM elements to the end of main
    'beforeend',
    `
    <div class="main__sort"><i class="icon">${sortIcon}</i> <p>Sort by priority</p></div>
    <h3 class="main__title">Complete</h3>
    <h4 class="main___subtitle">My Projects</h4>
    `
  );

  for (let category in tasks) {
    tasks[category].forEach(task => {
      if (task.getChecklist()) {
        DOM.updateDom(main, task, 0);
        DOM.removeTaskDom();
      }
    });
  }

  DOM.closeDialog();
}

export {
  displayComplete,
}