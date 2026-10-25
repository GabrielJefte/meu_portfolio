// ===== MENU MOBILE =====
const botaoMenu = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');

if (botaoMenu && menu) {
  botaoMenu.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    botaoMenu.setAttribute('aria-expanded', String(aberto));
  });
}

// ===== WHATSAPP =====
// ALTERE O NÚMERO AQUI se necessário: código do Brasil (55) + DDD (83) + número.
const numeroWhatsApp = '558398117205';

// Texto de cada assunto (usado na mensagem inicial).
const assuntos = {
  web: 'desenvolvimento web',
  interfaces: 'design de interfaces',
  identidade: 'identidade visual',
  suporte: 'suporte técnico',
  otimizacao: 'otimização do meu site',
  consultoria: 'consultoria digital'
};

const linkWhatsApp = document.querySelector('#whatsapp-link');
const opcoes = document.querySelectorAll('input[name="assunto"]');

// Monta a mensagem de acordo com o assunto escolhido.
function montarMensagem(chave) {
  const assunto = assuntos[chave];
  return assunto
    ? `Olá, Gabriel! Vim pelo site e gostaria de falar sobre ${assunto}.`
    : 'Vim pelo site, gostaria de me informar mais.';
}

// Atualiza o link do botão com a mensagem atual.
function atualizarLink() {
  if (!linkWhatsApp) return;
  const escolhida = document.querySelector('input[name="assunto"]:checked');
  const mensagem = montarMensagem(escolhida ? escolhida.value : '');
  linkWhatsApp.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
}

// Permite chegar já com o assunto escolhido: contato.html?servico=web
const parametro = new URLSearchParams(window.location.search).get('servico');
if (parametro) {
  const opcaoInicial = document.querySelector(`input[name="assunto"][value="${CSS.escape(parametro)}"]`);
  if (opcaoInicial) opcaoInicial.checked = true;
}

opcoes.forEach((opcao) => opcao.addEventListener('change', atualizarLink));
atualizarLink();

// ===== ANO NO RODAPÉ =====
const ano = document.querySelector('#ano');
if (ano) ano.textContent = new Date().getFullYear();