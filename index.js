// Animasi efek kilau teks subtitle
const subtitle = document.querySelector('.subtitle');

// Pastikan elemen subtitle ditemukan
if (subtitle) {
  setInterval(() => {
    const currentColor = getComputedStyle(subtitle).color;
    subtitle.style.color = currentColor === 'rgb(176, 196, 222)' ? '#00f7ff' : '#b0c4de';
    subtitle.style.textShadow = currentColor === 'rgb(176, 196, 222)' 
      ? '0 0 10px #00f7ff, 0 0 20px #00f7ff' 
      : '0 0 5px #008b8b, 0 0 15px #008b8b';
  }, 1000);
}

document.querySelector('.dna').addEventListener('click', function() {
  this.style.backgroundColor = 'blue';
});