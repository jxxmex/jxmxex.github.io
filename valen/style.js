const startBtn = document.getElementById('startBtn');
const nameInput = document.getElementById('name');
const mainContainer = document.getElementById('mainContainer');
const question = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const flowerPage = document.getElementById('flowerPage');
const message = document.getElementById('message');

startBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name) {
    document.querySelector('.name-input').style.display = 'none';
    mainContainer.style.display = 'block';
    question.innerText = `${name}, do you love me? 💕`;
  } else {
    alert('Please enter your name first!');
  }
});

yesBtn.addEventListener('click', () => {
  mainContainer.style.display = 'none';
  flowerPage.style.display = 'block';
  message.innerText = `Aww ${nameInput.value}, I love you so much more 🌸💖`;
});

// NO button runs away inside container
noBtn.addEventListener('touchstart', moveNoBtn);
noBtn.addEventListener('mouseover', moveNoBtn);

function moveNoBtn() {
  const container = document.querySelector('.buttons');
  const maxX = container.clientWidth - noBtn.clientWidth;
  const maxY = container.clientHeight - noBtn.clientHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}