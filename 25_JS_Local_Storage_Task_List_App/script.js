//Task List App
let taskFormEle = document.querySelector('#task-form');
taskFormEle.addEventListener('submit', function(event) {
    // event.preventDefault();

    let taskInputEle = document.querySelector('#input-item');
    let task = taskInputEle.value.trim();   //remove the white spaces

    //get tasks from local storage
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    taskList.unshift(task);

    //set to local storage
    localStorage.setItem('tasks',JSON.stringify(taskList));

    displayTasksList();

    window.reload();
});

//display tasks list
let displayTasksList = () => {
    let taskListEle = document.querySelector('#task-list');
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    if(taskList.length !== 0) {
        let eachTask = '';
        for(let task of taskList) {
            eachTask += `<li class="list-group-item list-group-item-action list-group-item-warning">
                <span class="font-weight-bold">${task}</span>
                <button class="close">
                    <i class="fa fa-times-circle"></i>
                </button>
            </li>`
        }
        taskListEle.innerHTML = eachTask;
    }
};

displayTasksList();

//remove Tasks
let taskListEl = document.querySelector('#task-list');
taskListEl.addEventListener('click', function(event) {
    // console.log(event.target);   //to know which element clicked
    let targetElement = event.target;
    if(targetElement.classList.contains('fa-times-circle')) {
        // console.log('yes');
        let actualEle = targetElement.parentElement.parentElement;
        // console.log(actualEle);
        let selectedTask = actualEle.innerText;
        // console.log(selectedTask);

        //get tasks from local storage
        let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        taskList = taskList.filter(function(task) {
            return task.trim() !== selectedTask.trim();
        });
        // console.log(taskList);
        localStorage.setItem('tasks',JSON.stringify(taskList));
        displayTasksList();
    }
    else {
        // console.log('no');
    }
});