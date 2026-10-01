const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));

document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click',()=>nav.classList.remove('open'));
});

document.getElementById('contactForm').addEventListener('submit',(e)=>{
  e.preventDefault();
  const nome=document.getElementById('nome').value.trim();
  const telefone=document.getElementById('telefone').value.trim();
  const objetivo=document.getElementById('objetivo').value;
  const msg=document.getElementById('formMessage');
  if(!nome||!telefone||!objetivo){
    msg.textContent='Preencha todos os campos para continuar.';
    return;
  }
  msg.textContent=`Obrigado, ${nome}! Em uma versão conectada, seu atendimento seria iniciado pelo WhatsApp.`;
  e.target.reset();
});