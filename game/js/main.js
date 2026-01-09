
import { player, initPlayer, drawPlayer } from "./player.js";
import { spawnEnemy, enemies, updateEnemies, drawEnemies } from "./enemies.js";
import { handleCollisions } from "./collision.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const bulletsImage = new Image();
bulletsImage.src = "https://piclike.net/wp-content/uploads/2023/01/ball.png"

initPlayer(canvas);

export const bullets = [];
const BULLET_SPEED = -5;

function tryShoot() {
    bullets.push({
        x: player.x + player.width / 2 - 20,
        y: player.y,
        width: 40,
        height: 40,
        vx: 0,
        vy: BULLET_SPEED,
    },
    {
        x: player.x + player.width / 2 - 20,
        y: player.y,
        width: 40,
        height: 40,
        vx: 1,
        vy: BULLET_SPEED,
    },
    {
        x: player.x + player.width / 2 - 20,
        y: player.y,
        width: 40,
        height: 40,
        vx: -1,
        vy: BULLET_SPEED,
    })
}

function updateScore() {
    const scoreBoard = document.getElementById("scoreBoard");
    scoreBoard.innerText = `Score: ${player.score}`;
    const lifeBoard = document.getElementById("lifeBoard");
    lifeBoard.innerText = `Life: ${player.life}`;
}


window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        if (player.x > 10) {
            player.x -= 10;
        }
    } else if (e.key === "ArrowRight") {
        if (player.x < canvas.width - player.width - 10) {
            player.x += 10;
        }

    } else if(e.key === "ArrowUp") {
        if (player.y > 10) {
            player.y -= 10;
        }

    } else if (e.key === "ArrowDown") {
        if (player.y < canvas.height - player.height - 10) {
            player.y += 10;
        }
    } else if (e.code === "Space") {
        tryShoot();
    }
});

function update() {
    for (let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        bullet.y += bullet.vy;
        bullet.x += bullet.vx;

        if (bullet.y < 0) {
            bullets.splice(i, 1);
        }
    }
    spawnEnemy(canvas);
    updateEnemies(canvas);
    handleCollisions();
    updateScore();
}

function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawPlayer(ctx);

    ctx.fillStyle = "white";
    for (let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        ctx.drawImage(bulletsImage,bullet.x, bullet.y, bullet.width, bullet.height);
    }

    drawEnemies(ctx);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
