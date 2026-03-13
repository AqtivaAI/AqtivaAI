import { askAI } from "./chat.js";

const button = document.getElementById("send")

button.addEventListener("click", async ()=>{

 const input = document.getElementById("message")
 const chat = document.getElementById("chat")

 const message = input.value

 chat.innerHTML += `<div class="user">${message}</div>`

 const reply = await askAI(message)

 chat.innerHTML += `<div class="ai">${reply}</div>`

 input.value=""

})
