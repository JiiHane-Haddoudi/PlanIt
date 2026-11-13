const todo = document.querySelector("#to-do")
const inProgress = document.querySelector("#in-progress")
const done = document.querySelector("#done")
const projetTitre = document.querySelector("#projet")
const hours = document.querySelector("#hours")

 export async function loadJson(todo) {
const response = await fetch("./data/sample-plan.json")
const taches = await response.json()

console.log(taches.tasks[0].title)
const tasks = taches.tasks
projetTitre.textContent =  taches.projectName
hours.textContent = ` ${taches.tasks.length} Jours ,${taches.totalEstimatedHours } Heurs ` 
tasks.forEach(task => { 
    todo.innerHTML += `
    <article class="bg-[#E0F7F4] rounded-xl shadow-sm overflow-hidden">
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
    </article>
    `
});
    
}

loadJson(todo)
