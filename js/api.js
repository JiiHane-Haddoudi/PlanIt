const todo = document.querySelector("#to-do")
const inProgress = document.querySelector("#in-progress")
const done = document.querySelector("#done")
console.log(todo)

async function loadJson(todo) {
const response = await fetch("./data/sample-plan.json")
const taches = await response.json()

console.log(taches[0].title)
taches.forEach(tache => {
    todo.innerHTML += `
    <article class="bg-[#E0F7F4] rounded-xl shadow-sm overflow-hidden">
    <div class = "m-4 bg-white p-6"> 
        <p class="text-gray-500"> ${tache.id} </p>
        <p> ${tache.title} </p>
        <div class="flex gap-2">
        
        <p class="pl-1 pr-1 bg-[#E0F7F4]"> ${tache.priority} </p>
        <p class="pl-1 pr-1 bg-[#E0F7F4]"> ${tache.size} </p>
        <p class="pl-1 pr-1 bg-[#E0F7F4]">${tache.estimatedTime}</p>
        <p class="pl-1 pr-1 bg-[#E0F7F4]"> ${tache.deadline}</p>
        </div>
    </div>
    </article>
    `
});
    
}

loadJson(todo)
