const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(200, 150, 101, 0, Math.PI * 2, true);
ctx.moveTo(20, 300);
ctx.lineTo(60, 80);
ctx.lineTo(100,160);
ctx.closePath();
ctx.stroke();
//triangulo 2
ctx.moveTo(90, 300);
ctx.lineTo(60, 80);
ctx.lineTo(100,160);
ctx.closePath();
ctx.stroke();







ctx.arc(50,32,45,1,true);
ctx.fill();

ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
//ojo 1
ctx.moveTo(91, 96);
ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
//ojo 2
ctx.moveTo(103, 96);
ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
ctx.fill();