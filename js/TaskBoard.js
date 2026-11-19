const tasksToDo = document.querySelector("#tasks-toDo")
const projets = JSON.parse(localStorage.getItem("projets")) || [];
const tasks = projets.tasks
console.log(projets)
tasks.forEach(task => { 
    tasksToDo.innerHTML += `task`
})