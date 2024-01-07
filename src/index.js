document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value;

    if (taskDescription.trim() !== '') {
      const prioritySelect = document.getElementById('priority-select');
      const selectedPriority = prioritySelect.value;
      const user = document.getElementById('user').value;
      const duration = document.getElementById('duration').value;
      const dateDue = document.getElementById('date-due').value;

      const taskItem = createTaskItem(taskDescription, selectedPriority, user, duration, dateDue);
      taskList.appendChild(taskItem);
      taskInput.value = '';
    }
  });

  // Function to create a task item with delete functionality, priority color, and sorting
  function createTaskItem(description, priority, user, duration, dateDue) {
    const taskItem = document.createElement('tr');

    // Create table cells
    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = description;
    taskItem.appendChild(descriptionCell);

    const priorityCell = document.createElement('td');
    priorityCell.textContent = priority;
    taskItem.appendChild(priorityCell);

    const userCell = document.createElement('td');
    userCell.textContent = user || 'N/A';
    taskItem.appendChild(userCell);

    const durationCell = document.createElement('td');
    durationCell.textContent = duration || 'N/A';
    taskItem.appendChild(durationCell);

    const dateDueCell = document.createElement('td');
    dateDueCell.textContent = dateDue || 'N/A';
    taskItem.appendChild(dateDueCell);

    const actionsCell = document.createElement('td');
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(taskItem);
    });
    actionsCell.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      // Implement the edit logic here
      alert('Edit functionality to be implemented!');
    });
    actionsCell.appendChild(editButton);

    taskItem.appendChild(actionsCell);

    // Set color based on priority
    switch (priority) {
      case 'high':
        taskItem.style.color = 'red';
        break;
      case 'medium':
        taskItem.style.color = 'yellow';
        break;
      case 'low':
        taskItem.style.color = 'green';
        break;
    }

    return taskItem;
  }
});
