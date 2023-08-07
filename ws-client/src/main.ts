import { connectToserver } from "./socket-client"
import "./style.css"
// import { setupCounter } from "./counter.ts"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h2>Websocket - client</h2>

    <input id="jwt" placeholder="Json Web Token">
    <button id="connect">Connect</button>

    <br/>
    <span id="server">offline</span>

    <ul id="client-ul"></ul>

    <form id="message-form">
      <input placeholder="message" id="message-input" />
    </form>
    <h3>Messages</h3>
    <ul id="message-ul"></ul>
  </div>
`

const jwtToken = document.querySelector<HTMLInputElement>("#jwt")!
const btnConnect = document.querySelector<HTMLButtonElement>("#connect")!

btnConnect.addEventListener("click", () => {
  if (jwtToken.value.trim().length <= 0) return alert("Enter a valid JWT")
  connectToserver(jwtToken.value)
})

// connectToserver()
// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!)
