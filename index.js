document.getElementById('add-btn').onclick = AddNewTask;
function AddNewTask() {
    const taskNameElem = document.getElementById('tsk-imp');
    const taskName = taskNameElem.value
    if (taskName) {
        const listElem = document.getElementById('tsk-lst');
        const newTaskElem = document.createElement('li');
        newTaskElem.innerText = taskName;
        listElem.prepend(newTaskElem)
        alert(taskName)
        taskNameElem.value == "";
    }
    else {
        alert('ААА')
    }
}