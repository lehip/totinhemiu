// Trình phát nhạc
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    isPlaying = true;
    musicBtn.textContent = '🔇 Tắt nhạc';
  } else {
    music.pause();
    isPlaying = false;
    musicBtn.textContent = '🔊 Bật nhạc';
  }
});

// Hiẹu ứng hoa hồng bay

const canvas = document.getElementById("roseCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const icons = ["💖","🌸","🌺"]; // Danh sách icon
const particles = [];

class IconParticle {
  constructor() {
    this.icon = icons[Math.floor(Math.random() * icons.length)];
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    this.size = 24 + Math.random() * 20;
    this.speed = 0.5 + Math.random() * 1.5;
    this.spin = (Math.random() - 0.5) * 0.02;
    this.angle = Math.random() * Math.PI * 2;
  }

  update() {
    this.y += this.speed;
    this.angle += this.spin;
    if (this.y > canvas.height + 50) {
      this.y = -50;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.save();
    ctx.font = `${this.size}px "Segoe UI Emoji"`;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.fillText(this.icon, 0, 0);
    ctx.restore();
  }
}

function createParticles(count = 30) {
  for (let i = 0; i < count; i++) {
    particles.push(new IconParticle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

createParticles(40);
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
