const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");
let dirX = 1; 
let dirY = 1; 

let idx = 10;
let idy = 19;

let ini = 0;

function hslColor(h){
    return `hsl(${h},50%,50%)`;
}

function bolita(x,y){
 ctx.fillStyle = hslColor(ini);
 ini += 2;
 ctx.beginPath();
 ctx.arc(x,y,25,0,Math.PI * 2);
 ctx.fill();

}

setInterval(() => {
   // ctx.clearRect(500,500,600,400);
    bolita(idx,idy);
    if(dirX === 1 && dirY === 1){
        idx += 50;
        idy += 50;
    }
    else if (dirX === 1 && dirY === 2){
        idx += 60;
        idy -= 60;
    }
    else if (dirX === 2 && dirY === 1){
        idx -= 70;
        idy += 20;
    }else{
        idx -= 20;
        idy -= 20;
    }

    //cambiar direcciones
    if(idx > 640) dirX = 2;
    if(idy < 10) dirX = 1;
    if(idx > 390) dirY = 2;
    if(idy < 10) dirY = 1;
},100);