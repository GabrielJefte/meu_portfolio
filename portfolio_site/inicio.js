const menuBotao = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');

if (menuBotao && menu) {
  menuBotao.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    menuBotao.setAttribute('aria-expanded', String(aberto));
  });
}

const ano = document.querySelector('#ano');
if (ano) ano.textContent = new Date().getFullYear();
