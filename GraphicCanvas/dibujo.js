const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");
  // Dibujar el cuerpo del murciélago
  ctx.beginPath();
  
  ctx.arc(200, 150, 50, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();

  // Dibujar las alas
  ctx.beginPath();
  ctx.moveTo(200, 150);
  ctx.lineTo(100, 200);
  ctx.quadraticCurveTo(150,50,200,200);
  ctx.quadraticCurveTo(250,50,300,200);
  ctx.lineTo(200, 150);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();

  // Dibujar los ojos
  ctx.beginPath();
  ctx.arc(175, 130, 5, 0, Math.PI * 2);
  ctx.arc(225, 130, 5, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(175, 130, 2, 0, Math.PI * 2);
  ctx.arc(225, 130, 2, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();

  // Dibuja la boca del murciélago
  ctx.beginPath();
  ctx.moveTo(200,199);
  ctx.arc(200, 170, 30, 0.2 * Math.PI,0.8* Math.PI);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.closePath();

  


  

  