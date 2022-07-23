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

const toastNotification = text => {
    Toastify({
        text: text,
        duration: 3000    
        }).showToast();
}

addButton.addEventListener( 'click', () => {
    if ( taskInput.value == '' ) {
        toastNotification('Necesitas ingresar algo!')
    } else {
        tasks.push( taskInput.value )
        updateTasks()
        toastNotification( 'Agregaste una nueva tarea' )
        taskInput.value = ''
    }
})

let tasksInStorage = localStorage.getItem('tasks')
if ( tasksInStorage ) {
    tasksInStorage.split(',').forEach( t => {
        tasks.push(t)
    })
    updateTasks()
}