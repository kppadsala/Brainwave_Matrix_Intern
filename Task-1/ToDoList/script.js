const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
let editMode = false; // Track if we are editing a task
let taskToEdit = null; // Track the task being edited

// Function to add or update a task
function handleTask() {
  const task = todoInput.value.trim();

  if (task === '') {
    alert('Please enter a task!');
    return;
  }

  if (editMode) {
    // Update the task
    taskToEdit.querySelector('.task-text').textContent = task;
    editMode = false;
    taskToEdit = null;
    addBtn.textContent = 'Add';
  } else {
    // Add a new task
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = task;
    span.classList.add('task-text');

    // Mark task as complete
    span.onclick = () => li.classList.toggle('completed');

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.onclick = () => editTask(li);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  }

  // Clear input field
  todoInput.value = '';
}

// Function to edit a task
function editTask(taskItem) {
  editMode = true;
  taskToEdit = taskItem;
  todoInput.value = taskItem.querySelector('.task-text').textContent;
  addBtn.textContent = 'Update';
}

// Add task or update on button click
addBtn.addEventListener('click', handleTask);

// Add task on Enter key press
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleTask();
  }
});
