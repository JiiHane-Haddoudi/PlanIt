const todo = document.querySelector("#to-do")
const inProgress = document.querySelector("#in-progress")
const done = document.querySelector("#done")
const projetTitre = document.querySelector("#projet")
const hours = document.querySelector("#hours")
const modeDemoBtn = document.querySelector("#modeDemo-btn")
const tasksToDo = document.querySelector("#tasks-toDo")
const tasksInProgress = document.querySelector("#tasks-inProgress")
const tasksDone = document.querySelector("#tasks-done")


async function loadJson(todo) {
const response = await fetch("./data/sample-plan.json")
const taches = await response.json()

const tasks = taches.tasks
projetTitre.textContent =  taches.projectName
hours.textContent = ` ${taches.tasks.length} Jours ,${taches.totalEstimatedHours } Heurs ` 
tasks.forEach(task => { 
    todo.innerHTML += `
    <article id='${task.id}' data-id="${task.id}" draggable="true" class=" task bg-[#E0F7F4] rounded-xl shadow-sm overflow-hidden">
    <div class = "m-4 bg-white p-6 "> 
        <p class="text-gray-500"> ${task.id} </p>
        <p> ${task.title} </p>
        <div class="flex gap-2">
        
        <p class="pl-1 pr-1 bg-[#E0F7F4]"> ${task.priority} </p>
        <p class="pl-1 pr-1 bg-[#E0F7F4]"> ${task.size} </p>
        <p class="pl-1 pr-1 bg-[#E0F7F4]">${task.estimatedTime}</p>
        <p class="pl-1 pr-1 bg-[#E0F7F4]"> ${task.deadline}</p>
        </div>
    </div>
    </article>
    `
const countToDo = tasks.reduce((acc)=>{
    if(task.status === "To Do"){
        return acc +1
    }
},0)
const countInProgress = tasks.reduce((acc)=>{
    if(task.status === "In progress"){
        return acc +1
    }
},0)
const countDone = tasks.reduce((acc)=>{
    if(task.status === "Done"){
        return acc +1
    }
},0)

tasksToDo.textContent = countToDo
tasksInProgress.textContent = countInProgress
tasksDone.textContent = countDone
});
const articles = document.querySelectorAll(".task")
console.log(articles) 

articles.forEach (article=>{
    article.addEventListener ("dragstart", e =>{
        e.target.classList.add("dragging")
        e.dataTransfer.setData('text/plain', e.target.dataset.id)
    })
    article.addEventListener("dragend", e=>{
        e.target.classList.remove("dragging")
    })
})
const column = [todo, inProgress, done]
    column.forEach(column=>{
        column.addEventListener("dragover", e =>e.preventDefault())
        column.addEventListener("drop",handleDrop) 
    })



}


 loadJson(todo)

modeDemoBtn.addEventListener("click", function(){
    window.location.href = "projets.html";
})

function handleDrop(e){
    e.preventDefault()
    const draggedId = e.dataTransfer.getData('text/plain')
    const article = document.getElementById(`${draggedId}`) 
    e.currentTarget.appendChild(article)  

}
