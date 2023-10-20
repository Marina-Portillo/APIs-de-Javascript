const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");
let dirX = 1; 
let dirY = 1; 

let idX = 0;
let idY = 0;

let ini = 0;

function hslColor(h){
    return `hsl(${h},50%,50%)`;
}

function bolita(x,y){
 ctx.fillStyle = hslColor(ini);
 ini += 2;
 ctx.beginPath();
 ctx.arc(x,y,30,0,Math.PI * 2);
 ctx.fill();
 ctx.stroke();

}

setInterval(() => {
    ctx.clearRect(500,500,600,400);
    bolita(idX,idY);
    if(dirX === 1 && dirY === 1){
        idX += 50;
        idY += 50;
    }
    else if (dirX === 1 && dirY === 2){
        idX += 60;
        idY -= 60;
    }
    else if (dirX === 2 && dirY === 1){
        idX -= 70;
        idY += 20;
    }else{
        idX -= 20;
        idY -= 20;
    }

    //cambiar direcciones
    if(idX > 590) dirX = 2;
    if(idX < 10) dirX = 1;
    if(idY > 390) dirY = 2;
    if(idY < 10) dirY = 1;
},100);