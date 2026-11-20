const tasksToDo = document.querySelector("#to-do")
const projets = JSON.parse(localStorage.getItem("projets"));

const params = new URLSearchParams(window.location.search)
const projetId = Number(params.get("id"))

const projet = projets.find((element) => (element.id) === projetId );
console.log(projet);


const tasks = JSON.parse(projet.tasks)

console.log(tasks)
tasks.tasks.forEach(task => { 
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
