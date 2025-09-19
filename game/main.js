document.getElementById("txt").innerText = "これはゲームです";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let x = 225;
let tama = 0;

window.addEventListener("keydown" , (e) => {
    if(e.key === "ArrowLeft") {
        x -= 10;
    } else if(e.key === "ArrowRight") {
        x += 10;
    }
});

let y1 = 0;
let y2 = -300;
let y3 = -600;

function gameLoop() {
    ctx.fillStyle = "blue";
    ctx.fillRect(75,75,canvas.width-150, canvas.height-150);
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0,0,75,640);
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0,0,640,75);
    ctx.fillStyle = "lightblue";
    ctx.fillRect(405,0,75,640);
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0,565,480,75);
    ctx.fillStyle = "red";
    ctx.fillRect(250,y1,250,30);
    y1 += 5;
     ctx.fillStyle = "red";
    ctx.fillRect(0,y2,250,30);
    y2 += 5;
    ctx.fillStyle = "red";
    ctx.fillRect(250,y3,250,30);
    y3 += 5;
    if (tama > 0) {
        ctx.fillStyle = "red";
        ctx.fillRect(x+10,-tama*10,10,10);
    }


    ctx.fillStyle = "yellow";
    ctx.fillRect(x,480,30,30);
    requestAnimationFrame(gameLoop);
}

gameLoop();