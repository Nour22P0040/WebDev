const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

let tasks = [];

addBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text === '') return;
     
    tasks.push({ text, done: false });
    taskInput.value = '';
    render();
});

function render() {
    taskList.innerHTML = '';

    tasks.forEach((task, i) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.done) li.classList.add('completed');

        
        li.addEventListener('click', () => {
            task.done = !task.done;
            render();
        });

        
        const del = document.createElement('button');
        del.textContent = 'Delete';
        del.className = 'delete-btn';
        del.addEventListener('click', e => {
            e.stopPropagation();
            tasks.splice(i, 1);
            render();
        });

        li.appendChild(del);
        taskList.appendChild(li);
    });
}
