const msgDiv = document.createElement("div");
msgDiv.textContent = `Obrigado pelo contato, ${nome}!`;
msgDiv.className = "toast";
document.body.appendChild(msgDiv);
setTimeout(() => msgDiv.remove(), 3000);
