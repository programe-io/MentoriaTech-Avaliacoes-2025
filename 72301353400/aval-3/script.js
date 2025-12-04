// Dark Mode
const toggleDark = document.getElementById("toggleDark");
toggleDark.onclick = () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    document.documentElement.style.setProperty("--bg", "#f0f0f5");
    document.documentElement.style.setProperty("--text", "#111");
    document.documentElement.style.setProperty("--card", "#ffffff");
    document.documentElement.style.setProperty("--accent", "#0077ff");
    toggleDark.textContent = "☀️";
  } else {
    document.documentElement.style.setProperty("--bg", "#080a0f");
    document.documentElement.style.setProperty("--text", "#e9ecff");
    document.documentElement.style.setProperty("--card", "#0f121a");
    document.documentElement.style.setProperty("--accent", "#4ae3ff");
    toggleDark.textContent = "🌙";
  }
};

// WhatsApp link
document.getElementById("whatsappBtn").onclick = () => {
  window.open("https://wa.me/5581999999999", "_blank");
};

// Formulário
const form = document.getElementById('formCadastro');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Cadastro enviado com sucesso!');
  form.reset();
});

// Assistente virtual
(function(){
  const header = document.getElementById('chatHeader');
  const body = document.getElementById('chatBody');
  const widget = document.getElementById('chatWidget');
  const log = document.getElementById('chatLog');
  const input = document.getElementById('chatInput');
  const send = document.getElementById('sendChat');
  let open=false;

  header.addEventListener('click', ()=>{
    open = !open;
    body.style.display = open ? 'block' : 'none';
    widget.style.transform = open ? 'translateY(0)' : 'translateY(120%)';
    document.getElementById('sndClick').play();
  });

  function botReply(text){
    const p = document.createElement('div');
    p.style.margin='8px 0';
    p.textContent = 'Assistente: ' + text;
    p.style.opacity=0;
    log.appendChild(p);
    setTimeout(()=>{ p.style.transition='0.4s'; p.style.opacity=1; },50);
    document.getElementById('sndNotify').play();
    log.scrollTop = log.scrollHeight;
  }

  send.addEventListener('click', ()=>{
    const t = input.value.trim();
    if(!t) return;

    const u = document.createElement('div');
    u.textContent = 'Você: ' + t;
    u.style.margin='8px 0';
    log.appendChild(u);
    input.value='';

    setTimeout(()=>{
      if(/orçamento|preço|valor/i.test(t)) botReply('Para orçamento, envie modelo, ano e serviço desejado.');
      else if(/horário|aberto/i.test(t)) botReply('Funcionamos Seg–Sex 08h–18h, Sáb 08h–12h.');
      else if(/agendar|marcar/i.test(t)) botReply('Certo! Envie data e horário.');
      else botReply('Sua dúvida foi encaminhada ao suporte.');
    },600);
  });
})();

// Efeitos sonoros
document.addEventListener('click', (e)=>{
  const t = e.target;
  if(t.tagName==='BUTTON') document.getElementById('sndClick').play();
});

// PDF
document.getElementById('downloadPdf').onclick = async () => {
  const nome = form.nome.value;
  const email = form.email.value;
  const tel = form.telefone.value;
  const carro = form.carro.value;

  try{
    await import('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Orçamento - AutoTech", 14, 20);
    doc.text(`Nome: ${nome}`,14,40);
    doc.text(`Email: ${email}`,14,50);
    doc.text(`Telefone: ${tel}`,14,60);
    doc.text(`Veículo: ${carro}`,14,70);
    doc.save("orcamento.pdf");
  }catch{
    const content = `Orcamento\nNome:${nome}\nEmail:${email}\nTelefone:${tel}\nVeículo:${carro}`;
    const blob = new Blob([content],{type:"text/plain"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download="orcamento.txt";
    a.click();
  }

  document.getElementById('sndNotify').play();
};
