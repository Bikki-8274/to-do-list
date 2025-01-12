document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const task = document.getElementById('todo-input').value;
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        document.getElementById('todo-list').appendChild(li);
        document.getElementById('todo-input').value = '';
    }
});
