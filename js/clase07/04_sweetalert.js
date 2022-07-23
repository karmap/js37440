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

const addTaskAlert = (task) => {
    Swal.fire(
        '¡Listo! Agregaste la tarea:',
        task,
        'success'
    )
}

const errorAlert = (task) => {
    Swal.fire({
        icon: 'error',
        title: 'Error ...',
        text: 'Necesitar ingresar algo!',
    })
}

addButton.addEventListener( 'click', () => {
    if ( taskInput.value == '' ) {
        errorAlert()
    } else {
        tasks.push( taskInput.value )
        updateTasks()
        addTaskAlert( taskInput.value )
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