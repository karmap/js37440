console.log('Lista de tareas');

let tasks = []
let tasksList = document.getElementById('tasksList')
let addButton = document.getElementById('addButton')
let taskInput = document.getElementById('taskInput')

let updateTasks = () => {
    tasksList.innerHTML = ''
    tasks.forEach( task => {
        let newTask = document.createElement('p')
        newTask.innerText = task
        tasksList.appendChild(newTask)
    })
    localStorage.setItem('tasks', tasks)
}

addButton.addEventListener( 'click', () => {
    if ( taskInput.value !== '' ) {
        tasks.push( taskInput.value )
        taskInput.value = ''
        updateTasks()
    }
    // console.log(tasks);
})

let tasksInStorage = localStorage.getItem('tasks')
if ( tasksInStorage ) {
    tasksInStorage.split(',').forEach( t => {
        tasks.push(t)
    })
    updateTasks()
}