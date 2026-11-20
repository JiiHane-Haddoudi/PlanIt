import { getPrompt } from "./prompt.js"; 
// const valueInput = JSON.parse(sessionStorage.getItem("cleUser"))
const GEMINI_API_KEY = ""
// console.log(GEMINI_API_KEY)

const prompt =  " what is your name"


export async function getData(prompt) {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`, {
  method: 'POST',
  headers: {
    

    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    contents:[{
      parts:[{
        text:prompt
      }]
    }]
  }),
});

    const data = await res.json()
    console.log("STATUS:", res.status);
    const contentRequest =JSON.parse(data.candidates[0].content.parts[0].text) 
    console.log(contentRequest) 
    const taches = JSON.parse(localStorage.getItem("taches")) || [];
    localStorage.setItem("taches", JSON.stringify(contentRequest))
    return taches
}


//  const dataProjets = JSON.parse(localStorage.getItem("projets")) || [];
//  const projet = dataProjets[1]
// //  console.log(projet)

//  const promptDefini = getPrompt(projet.nom, projet.duree, projet.dev, projet.technologies, projet.niveau, projet.description, projet.brief) 
// //  console.log(promptDefini)
// // getData(promptDefini) 