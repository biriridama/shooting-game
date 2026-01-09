const playerImage = new Image();
playerImage.src = "https://www.sponichi.co.jp/baseball/news/2025/11/23/jpeg/20251123s10001173265000p_view.webp";

export const player = {
    x: 0,
    y: 0,
    width: 60,
    height: 60,
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