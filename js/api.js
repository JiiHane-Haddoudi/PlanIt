import { getPrompt } from "./prompt.js"; 
const GEMINI_API_KEY = ''
// console.log(GEMINI_API_KEY)

const prompt =  " what is your name"


async function getData(prompt) {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${GEMINI_API_KEY}`,

    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/gpt-oss-20b',
    messages: [
      {
        role: 'user',
        content: prompt
      },
    ],
  }),
});

    const data = await res.json()
    console.log("STATUS:", res.status);
    const contentRequest = data
    console.log(contentRequest) 
    const taches = JSON.parse(localStorage.getItem("taches")) || [];
    localStorage.setItem("taches", JSON.stringify(contentRequest))
}


 const dataProjets = JSON.parse(localStorage.getItem("projets")) || [];
 const projet = dataProjets[1]
//  console.log(projet)

 const promptDefini = getPrompt(projet.nom, projet.duree, projet.dev, projet.technologies, projet.niveau, projet.description, projet.brief) 
//  console.log(promptDefini)
getData(promptDefini) 