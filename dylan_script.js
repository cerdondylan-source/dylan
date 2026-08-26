/* =========================
   MUSIC ON / OFF
========================= */

const music = document.getElementById("music");
const musicToggle = document.getElementById("musicToggle");
const musicStatus = document.getElementById("musicStatus");

let musicOn = false;

function toggleMusic() {

    if (music.paused) {

        music.play()
            .then(() => {

                musicOn = true;

                musicToggle.classList.add("active");
                musicStatus.textContent = "Playing...";

            })
            .catch(() => {

                musicStatus.textContent = "Tap again to play";

                alert(
                    "Make sure palayo_sa_mundo.mp3 is in the same folder as index.html."
                );

            });

    } else {

        music.pause();

        musicOn = false;

        musicToggle.classList.remove("active");
        musicStatus.textContent = "Paused";
    }
}


music.addEventListener("pause", () => {

    musicOn = false;

    musicToggle.classList.remove("active");

    if (musicStatus) {
        musicStatus.textContent = "Paused";
    }

});


/* =========================
   FLOATING FLOWERS
========================= */

const flowerContainer = document.querySelector(".flowers");

const flowers = [
    "✿",
    "❀",
    "❁",
    "✾",
    "✽",
    "❋"
];

function createFlower() {

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML =
        flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left =
        Math.random() * 100 + "%";

    flower.style.fontSize =
        Math.random() * 12 + 10 + "px";

    flower.style.animationDuration =
        Math.random() * 7 + 8 + "s";

    flower.style.animationDelay =
        Math.random() * 2 + "s";

    flowerContainer.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 18000);
}

setInterval(createFlower, 350);


/* =========================
   FALLING PETALS
========================= */

const petalContainer = document.querySelector(".petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left =
        Math.random() * 100 + "%";

    petal.style.animationDuration =
        Math.random() * 5 + 7 + "s";

    petalContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 15000);
}

setInterval(createPetal, 900);