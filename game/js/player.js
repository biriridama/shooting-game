const playerImage = new Image();
playerImage.src = "https://news.ntv.co.jp/gimage/n24/articles/fc891a2304d9401fa61f576bebc30151/65051a93-c112-4b8f-a668-76946dde0a6d.JPG?w=1200";

export const player = {
    x: 0,
    y: 0,
    width: 30,
    height: 30,
    color: "yellow",
    life: 3,
    score: 0,
};

export function initPlayer(canvas) {
    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height - 60;
    console.log("Player:", player);
}

export function drawPlayer(ctx) {
    ctx.fillStyle = player.color;
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}