const tasksToDo = document.querySelector("#to-do")
const ToDo = document.querySelector("#tasks-toDo")
const tasksInProgress = document.querySelector("#tasks-inProgress")
const tasksDone = document.querySelector("#tasks-done")
const projets = JSON.parse(localStorage.getItem("projets"));
const articles = document.querySelectorAll('.article')
const params = new URLSearchParams(window.location.search)
const projetId = Number(params.get("id"))

const projet = projets.find((element) => (element.id) === projetId );

const tasks = (projet.tasks[0].tasks)

tasks.forEach(task => { 
    tasksToDo.innerHTML += `
        <article id='${task.id}' data-id="${task.id}" draggable="true" class=" task bg-[#E0F7F4] rounded-xl shadow-sm overflow-hidden">
    <div class = "m-4 bg-white p-6"> 
        <p class="text-gray-500"> ${task.id} </p>
        <p> ${task.title} </p>
        <div class="flex gap-2">
        
        <p class="pl-1 pr-1 bg-[#E0F7F4]"> ${task.priority} </p>
        <p class="pl-1 pr-1 bg-[#E0F7F4]"> ${task.size} </p>
        <p class="pl-1 pr-1 bg-[#E0F7F4]">${task.estimatedTime}</p>
        <p class="pl-1 pr-1 bg-[#E0F7F4]"> ${task.deadline}</p>
        </div>
    </div>
    </article>` 
})

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

function handleDrop(e){
    e.preventDefault()
    const draggedId = e.dataTransfer.getData('text/plain')
    const article = document.getElementById(`${draggedId}`) 
    e.currentTarget.appendChild(article)  

}