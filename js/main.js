
const btnForm = document.querySelector("#submit-btn")




btnForm.addEventListener("click", (e)=>{

e.preventDefault();

    const nom= document.querySelector("#nom-input").value
    const description = document.querySelector("#description-input").value
    const brief=document.querySelector("#brief-input").value
    const duree= document.querySelector("#duree-input").value
    const dev = document.querySelector("#dev-input").value
    const technologies = document.querySelector("#technologies-input").value
    const niveau = document.querySelector("#niveau-input").value

    const projet = {
        nom: nom,
        description: description,
        brief: brief,
        duree: duree,
        dev: dev,
        technologies: technologies,
        niveau: niveau
    }; 

    console.log(projet)

})