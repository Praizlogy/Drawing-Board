const canvas = document.getElementById('drawingB');
const DrawingCont = canvas.getContext('2d');

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

let drawing = false;

function startPosition(e) {
    drawing = true;
    draw(e);
}

function endPosition() {
    drawing = false;
    DrawingCont.beginPath();
}

function draw(e) {
    if (!drawing) return;
    DrawingCont.lineWidth = 5;
    DrawingCont.lineCap = 'round';
    DrawingCont.strokeStyle = '#000';

    DrawingCont.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    DrawingCont.stroke();
    DrawingCont.beginPath();
    DrawingCont.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);