fetch("./components/sidebar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("sidebar-container").innerHTML = data;
});

const modal= document.querySelector("#modal")
const btnOpen=document.querySelector("#openMdl")
const btnClose = document.querySelector("#closeMdl")

function openModal(){
    modal.classList.add('show')
}

function closeModal(){
    modal.classList.remove('show')
}
console.log(btnOpen);

btnOpen.addEventListener("click", openModal)
btnClose.addEventListener("click", closeModal())


