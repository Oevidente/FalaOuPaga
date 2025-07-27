<<<<<<< HEAD
// Referências aos elementos
const startBtn = document.getElementById('startBtn');
const rulesBtn = document.getElementById('rulesBtn');
const backBtn = document.getElementById('backToStartBtn');
const exitBtn = document.getElementById('exitBtn');
const sortearCartaBtn = document.getElementById('sortearCartaBtn');
const sortearDesafioBtn = document.getElementById('sortearDesafioBtn');

const cardInner = document.getElementById('card-inner');
const frontImage = document.getElementById('front-image');
const backImage = document.getElementById('back-image');

// Exibe a tela de jogo e oculta a inicial
startBtn.addEventListener('click', () => {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-screen').style.display = 'block';
});

// Mostra a tela de regras
rulesBtn.addEventListener('click', () => {
  document.getElementById('rules-screen').style.display = 'block';
});
// Volta à tela inicial ocultando as regras
backBtn.addEventListener('click', () => {
  document.getElementById('rules-screen').style.display = 'none';
});

// Sair do jogo (voltar à tela inicial)
// Pode recarregar a página ou resetar manualmente
exitBtn.addEventListener('click', () => {
  location.reload();
});

// Define os decks (preencha com seus arquivos de imagem)
const questionDeck = [
  'cards/vermelhas/1.png',
  'cards/vermelhas/2.png',
  'cards/vermelhas/3.png',
  'cards/vermelhas/4.png',
  'cards/vermelhas/5.png',
  'cards/vermelhas/6.png',
  'cards/vermelhas/7.png',
  'cards/vermelhas/8.png',
  'cards/vermelhas/9.png',
  'cards/vermelhas/10.png',
  'cards/vermelhas/11.png',
  'cards/vermelhas/12.png',
  'cards/vermelhas/13.png',
  'cards/vermelhas/14.png',
  'cards/vermelhas/15.png',
  'cards/vermelhas/16.png',
  'cards/vermelhas/17.png',
  'cards/vermelhas/18.png',
  'cards/vermelhas/19.png',
  'cards/vermelhas/20.png',
  'cards/vermelhas/21.png',
  'cards/vermelhas/22.png',
  'cards/vermelhas/23.png',
  'cards/vermelhas/24.png',
  'cards/vermelhas/25.png',
  'cards/vermelhas/26.png',
  'cards/vermelhas/27.png',
  'cards/vermelhas/28.png',
  'cards/vermelhas/29.png',
  'cards/vermelhas/30.png',
  'cards/vermelhas/31.png',
  'cards/vermelhas/32.png',
  'cards/vermelhas/33.png',
  'cards/vermelhas/34.png',
  'cards/vermelhas/35.png',
  'cards/vermelhas/36.png',
  'cards/vermelhas/38.png',
  'cards/vermelhas/39.png',
  'cards/prata/Livre.png',
  // ... etc
];
const challengeDeck = [
  'cards/douradas/Jogo do Tato.png',
  'cards/douradas/O mestre mandou.png',
  'cards/douradas/Strip Game.png',
];

// Sorteio de carta (pergunta)
sortearCartaBtn.addEventListener('click', () => {
  if (questionDeck.length === 0) return;
  const idx = Math.floor(Math.random() * questionDeck.length);
  frontImage.src = questionDeck[idx]; // Mostra a carta sorteada na frente
  backImage.src = ''; // Limpa o verso
  cardInner.classList.remove('flipped'); // Garante que está mostrando a frente
  sortearDesafioBtn.style.display = 'inline-block';
});

// Sorteio de desafio (punição)
sortearDesafioBtn.addEventListener('click', function () {
  if (challengeDeck.length === 0) return;
  const idx = Math.floor(Math.random() * challengeDeck.length);
  frontImage.src = challengeDeck[idx];
  backImage.src = ''; // Limpa a imagem do verso
  cardInner.classList.remove('flipped'); // Vira para a frente
  this.style.display = 'none';
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => console.log('Service Worker registrado'))
    .catch((err) => console.error('Falha ao registrar Service Worker:', err));
}
=======
// Referências aos elementos
const startBtn = document.getElementById('startBtn');
const rulesBtn = document.getElementById('rulesBtn');
const backBtn = document.getElementById('backToStartBtn');
const exitBtn = document.getElementById('exitBtn');
const sortearCartaBtn = document.getElementById('sortearCartaBtn');
const sortearDesafioBtn = document.getElementById('sortearDesafioBtn');

const cardInner = document.getElementById('card-inner');
const frontImage = document.getElementById('front-image');
const backImage = document.getElementById('back-image');

// Exibe a tela de jogo e oculta a inicial
startBtn.addEventListener('click', () => {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-screen').style.display = 'block';
});

// Mostra a tela de regras
rulesBtn.addEventListener('click', () => {
  document.getElementById('rules-screen').style.display = 'block';
});
// Volta à tela inicial ocultando as regras
backBtn.addEventListener('click', () => {
  document.getElementById('rules-screen').style.display = 'none';
});

// Sair do jogo (voltar à tela inicial)
// Pode recarregar a página ou resetar manualmente
exitBtn.addEventListener('click', () => {
  location.reload();
});

// Define os decks (preencha com seus arquivos de imagem)
const questionDeck = [
  'cards/vermelhas/1.png',
  'cards/vermelhas/2.png',
  'cards/vermelhas/3.png',
  'cards/vermelhas/4.png',
  'cards/vermelhas/5.png',
  'cards/vermelhas/6.png',
  'cards/vermelhas/7.png',
  'cards/vermelhas/8.png',
  'cards/vermelhas/9.png',
  'cards/vermelhas/10.png',
  'cards/vermelhas/11.png',
  'cards/vermelhas/12.png',
  'cards/vermelhas/13.png',
  'cards/vermelhas/14.png',
  'cards/vermelhas/15.png',
  'cards/vermelhas/16.png',
  'cards/vermelhas/17.png',
  'cards/vermelhas/18.png',
  'cards/vermelhas/19.png',
  'cards/vermelhas/20.png',
  'cards/vermelhas/21.png',
  'cards/vermelhas/22.png',
  'cards/vermelhas/23.png',
  'cards/vermelhas/24.png',
  'cards/vermelhas/25.png',
  'cards/vermelhas/26.png',
  'cards/vermelhas/27.png',
  'cards/vermelhas/28.png',
  'cards/vermelhas/29.png',
  'cards/vermelhas/30.png',
  'cards/vermelhas/31.png',
  'cards/vermelhas/32.png',
  'cards/vermelhas/33.png',
  'cards/vermelhas/34.png',
  'cards/vermelhas/35.png',
  'cards/vermelhas/36.png',
  'cards/vermelhas/38.png',
  'cards/vermelhas/39.png',
  'cards/prata/Livre.png',
  // ... etc
];
const challengeDeck = [
  'cards/douradas/Jogo do Tato.png',
  'cards/douradas/O mestre mandou.png',
  'cards/douradas/Strip Game.png',
];

// Sorteio de carta (pergunta)
sortearCartaBtn.addEventListener('click', () => {
  if (questionDeck.length === 0) return;
  const idx = Math.floor(Math.random() * questionDeck.length);
  frontImage.src = questionDeck[idx]; // Mostra a carta sorteada na frente
  backImage.src = ''; // Limpa o verso
  cardInner.classList.remove('flipped'); // Garante que está mostrando a frente
  sortearDesafioBtn.style.display = 'inline-block';
});

// Sorteio de desafio (punição)
sortearDesafioBtn.addEventListener('click', function () {
  if (challengeDeck.length === 0) return;
  const idx = Math.floor(Math.random() * challengeDeck.length);
  frontImage.src = challengeDeck[idx];
  backImage.src = ''; // Limpa a imagem do verso
  cardInner.classList.remove('flipped'); // Vira para a frente
  this.style.display = 'none';
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => console.log('Service Worker registrado'))
    .catch((err) => console.error('Falha ao registrar Service Worker:', err));
}
>>>>>>> 791001b (Arquivos)
