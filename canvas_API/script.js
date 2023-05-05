const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');


// Draw rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

// Draw circle
ctx.fillStyle = 'orange';
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

// Draw line
ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 25;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

// Draw text
ctx.font = '30px Arial';
ctx.fillStyle = 'purple';
ctx.lineWidth = 4;
ctx.strokeText('Heeeey!!', 304, 103, 300);
ctx.fillText('Heeeey!!', 300, 100, 300);

// Draw image
const image = document.querySelector('img');
image.style.display = 'none';

image.addEventListener('load', () => ctx.drawImage(image, 250, 250, 100, 100))



