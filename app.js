const sendBtn = document.getElementById("send")
const messageInput = document.getElementById("message")
const chatBox = document.getElementById("chat-box")

sendBtn.onclick = async ()=>{

const message = messageInput.value

if(message==="") return

// user message

const userDiv = document.createElement("div")
userDiv.className="user-message"
userDiv.innerText=message

chatBox.appendChild(userDiv)

messageInput.value=""

// AI fake reply (replace with API)

const aiDiv = document.createElement("div")
aiDiv.className="ai-message"
aiDiv.innerText="Thinking..."

chatBox.appendChild(aiDiv)

setTimeout(()=>{
aiDiv.innerText="AI response will appear here"
},1000)

}
