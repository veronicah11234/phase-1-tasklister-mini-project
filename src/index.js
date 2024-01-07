document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value;

    if (taskDescription.trim() !== '') {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskDescription;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
      });

      taskItem.appendChild(deleteButton);

      taskList.appendChild(taskItem);

      taskInput.value = '';
    }
  });
});
