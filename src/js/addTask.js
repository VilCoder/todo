import { format } from 'date-fns';

import { createTask } from './todoList';
import { openDialog, closeDialog } from './handlerDialog';
import { displayToday } from './today';
import { displayNameProject } from "./projects";

function displayAddTask() {
  openDialog();

  const addTaskButton = document.querySelector('.form__button');
  addTaskButton.textContent = 'Add Task';

  addTaskButton.removeEventListener('click', addTaskHandler);
  addTaskButton.addEventListener('click', addTaskHandler);
}

function addTaskHandler() {
  const category = document.querySelector('#category');
  const title = document.querySelector('#title');
  const date = document.querySelector('#date');
  const priority = document.querySelector('#priority');
  let endDate;

  try {
    const formattedDated = new Date(date.value);
    endDate = format(formattedDated, 'd/MMM/y, p').toLowerCase();
  } catch (error) {
    endDate = date.value;
  }

  createTask(category.value, title.value, endDate, priority.value);
  closeDialog();
  displayNameProject();
  displayToday();
}

export {
  displayAddTask,
};