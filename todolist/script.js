// Updated JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const editTaskBtn = document.getElementById('editTaskBtn');
    const deleteTaskBtn = document.getElementById('deleteTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    editTaskBtn.addEventListener('click', () => {
        const selectedTask = getSelectedTask();
        if (selectedTask) {
            const newText = prompt('Edit task:', selectedTask.label.textContent);
            if (newText !== null && newText.trim() !== '') {
                selectedTask.label.textContent = newText;
            }
        } else {
            alert('Please select a task to edit.');
        }
    });

    deleteTaskBtn.addEventListener('click', () => {
        const selectedTask = getSelectedTask();
        if (selectedTask) {
            selectedTask.li.remove();
        } else {
            alert('Please select a task to delete.');
        }
    });

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTaskToList(taskText);
            taskInput.value = '';
        }
    }

    function addTaskToList(taskText) {
        const li = document.createElement('li');
        li.classList.add('task-item');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const label = document.createElement('label');
        label.textContent = taskText;
        li.appendChild(checkbox);
        li.appendChild(label);
        taskList.appendChild(li);
    }

    function getSelectedTask() {
        const selectedCheckbox = document.querySelector('input[type="checkbox"]:checked');
        if (selectedCheckbox) {
            const li = selectedCheckbox.closest('li');
            const label = li.querySelector('label');
            return { li, label };
        }
        return null;
    }
});
