const botaoMenu = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');
if (botaoMenu && menu) botaoMenu.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  botaoMenu.setAttribute('aria-expanded', String(aberto));
});
const ano = document.querySelector('#ano');
if (ano) ano.textContent = new Date().getFullYear();
