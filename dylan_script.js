/* =========================================
   MUSIC
========================================= */

const music = document.getElementById("music");
const musicToggle = document.getElementById("musicToggle");
const musicStatus = document.getElementById("musicStatus");


function toggleMusic() {

    if (!music) return;

    if (music.paused) {

        music.play()
            .then(() => {

                musicToggle.classList.add("active");

                musicStatus.textContent =
                    "Playing...";

            })
            .catch(() => {

                musicStatus.textContent =
                    "Music file not found";

            });

    } else {

        music.pause();

    }

}


if (musicToggle) {

    musicToggle.addEventListener(
        "click",
        toggleMusic
    );

}


if (music) {

    music.addEventListener(
        "pause",
        () => {

            musicToggle.classList.remove(
                "active"
            );

            if (!music.ended) {

                musicStatus.textContent =
                    "Paused";

            }

        }
    );


    music.addEventListener(
        "playing",
        () => {

            musicToggle.classList.add(
                "active"
            );

            musicStatus.textContent =
                "Playing...";

        }
    );


    music.addEventListener(
        "error",
        () => {

            musicStatus.textContent =
                "Music file not found";

        }
    );

}


/* =========================================
   FLOATING FLOWERS
========================================= */

const flowerContainer =
    document.querySelector(".flowers");


const flowers = [
    "✿",
    "❀",
    "❁",
    "✾",
    "✽",
    "❋"
];


function createFlower() {

    if (!flowerContainer) return;


    const flower =
        document.createElement("div");


    flower.className = "flower";


    flower.textContent =
        flowers[
            Math.floor(
                Math.random() *
                flowers.length
            )
        ];


    flower.style.left =
        Math.random() * 100 + "%";


    flower.style.fontSize =
        Math.random() * 12 + 10 + "px";


    flower.style.animationDuration =
        Math.random() * 7 + 8 + "s";


    flowerContainer.appendChild(
        flower
    );


    setTimeout(() => {

        flower.remove();

    }, 18000);

}


setInterval(
    createFlower,
    800
);


/* =========================================
   MEMORY POPUP
========================================= */

const viewMemoriesBtn =
    document.getElementById(
        "viewMemoriesBtn"
    );


const memoryPopup =
    document.getElementById(
        "memoryPopup"
    );


const memoryClose =
    document.getElementById(
        "memoryClose"
    );


function openMemories() {

    if (!memoryPopup) return;


    memoryPopup.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}


function closeMemories() {

    if (!memoryPopup) return;


    memoryPopup.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}


if (viewMemoriesBtn) {

    viewMemoriesBtn.addEventListener(
        "click",
        openMemories
    );

}


if (memoryClose) {

    memoryClose.addEventListener(
        "click",
        closeMemories
    );

}


if (memoryPopup) {

    memoryPopup.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                memoryPopup
            ) {

                closeMemories();

            }

        }
    );

}


/* =========================================
   EXPANDED IMAGE VIEWER
========================================= */

const collageImages =
    document.querySelectorAll(
        ".memory-collage img"
    );


const imageViewer =
    document.getElementById(
        "imageViewer"
    );


const expandedImage =
    document.getElementById(
        "expandedImage"
    );


const expandedTitle =
    document.getElementById(
        "expandedTitle"
    );


const expandedMessage =
    document.getElementById(
        "expandedMessage"
    );


const imageViewerClose =
    document.getElementById(
        "imageViewerClose"
    );


function openImageViewer(image) {

    if (
        !imageViewer ||
        !expandedImage
    ) return;


    /* Reset image animation */

    expandedImage.style.opacity = "0";
    expandedImage.style.transform = "scale(.96)";


    /* Load clicked image */

    expandedImage.src =
        image.src;


    expandedImage.alt =
        image.alt;


    if (expandedTitle) {

        expandedTitle.textContent =
            image.dataset.title ||
            "Our Memory ♡";

    }


    if (expandedMessage) {

        expandedMessage.textContent =
            image.dataset.message ||
            "";

    }


    imageViewer.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";


    /* Trigger iOS style image animation */

    requestAnimationFrame(() => {

        expandedImage.style.opacity = "";
        expandedImage.style.transform = "";

    });

}


function closeImageViewer() {

    if (!imageViewer) return;


    imageViewer.classList.remove(
        "show"
    );


    /* Keep memory popup open */

    if (
        memoryPopup &&
        memoryPopup.classList.contains(
            "show"
        )
    ) {

        document.body.style.overflow =
            "hidden";

    }

    else {

        document.body.style.overflow =
            "";

    }

}


collageImages.forEach(
    (image) => {

        image.addEventListener(
            "click",
            () => {

                openImageViewer(
                    image
                );

            }
        );

    }
);


if (imageViewerClose) {

    imageViewerClose.addEventListener(
        "click",
        closeImageViewer
    );

}


if (imageViewer) {

    imageViewer.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                imageViewer
            ) {

                closeImageViewer();

            }

        }
    );

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            if (
                imageViewer &&
                imageViewer.classList.contains(
                    "show"
                )
            ) {

                closeImageViewer();

            }

            else if (
                memoryPopup &&
                memoryPopup.classList.contains(
                    "show"
                )
            ) {

                closeMemories();

            }

        }

    }
);
