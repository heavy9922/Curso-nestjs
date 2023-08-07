import { Manager, Socket } from "socket.io-client"

let socket: Socket
export const connectToserver = (jwtToken: string) => {
  const manager = new Manager("http://localhost:3000/socket.io/socket.io.js", {
    extraHeaders: {
      Authorization: jwtToken
    }
  })
  socket?.removeAllListeners()
  socket = manager.socket("/")
  addListeners()
}

const addListeners = () => {
  const serverStatusLabel = document.querySelector("#server")!
  const clientUL = document.querySelector("#client-ul")!
  const messageForm = document.querySelector<HTMLFormElement>("#message-form")!
  const messageInput =
    document.querySelector<HTMLInputElement>("#message-input")!
  const messageUl = document.querySelector<HTMLUListElement>("#message-ul")!
  socket.on("connect", () => {
    serverStatusLabel.innerHTML = "Connected"
  })

  socket.on("disconnect", () => {
    serverStatusLabel.innerHTML = "disconnect"
  })

  socket.on("clients-updated", (clients: string[]) => {
    let clientSHtml = ""
    clients.forEach((client) => {
      clientSHtml += `<li>${client}</li>`
    })
    clientUL.innerHTML = clientSHtml
  })

  messageForm.addEventListener("submit", (e) => {
    e.preventDefault()
    if (messageInput.value.trim().length <= 0) return
    socket.emit("message-from-client", {
      id: "YO!!",
      message: messageInput.value
    })
    messageInput.value = ""
  })

  socket.on(
    "message-from-server",
    (payload: { fullname: string; message: string }) => {
      const newMessage = `
        <li>
          <strong>${payload.fullname}</strong>
          <span>${payload.message}</span>
        </li>
      `
      const li = document.createElement("li")
      li.innerHTML = newMessage
      messageUl.append(li)
    }
  )
}
