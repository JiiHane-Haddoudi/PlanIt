fetch("./components/sidebar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("sidebar-container").innerHTML = data;
        Modal()
        callCle()
});


function Modal(){
    const modal= document.querySelector("#modal")
    const btnOpen=document.querySelector("#openMdl")
    const btnClose = document.querySelector("#closeMdl")

function openModal(){
    modal.classList.add('show')
}

function closeModal(){
    modal.classList.remove('show')
}

btnOpen.addEventListener("click", openModal)
btnClose.addEventListener("click", closeModal)
}

function callCle(){
    const inputCle= document.querySelector("#input-cle")
    
    const btnSaveCle = document.querySelector("#btnSaveCle")

    
    btnSaveCle.addEventListener("click", ()=>{
        const valueInput =inputCle.value.trim()
        if(valueInput){
        sessionStorage.setItem("cleUser", valueInput)
        }
    })


}

