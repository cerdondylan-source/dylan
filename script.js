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


    expandedImage.style.opacity = "0";
    expandedImage.style.transform = "scale(.96)";


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

}


function closeImageViewer() {

    if (!imageViewer) return;


    imageViewer.classList.remove(
        "show"
    );


    if (
        memoryPopup &&
        memoryPopup.classList.contains(
            "show"
        )
    ) {

        document.body.style.overflow =
            "hidden";

    } else {

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
   VIDEO VIEWER
========================================= */

const videoCard =
    document.getElementById(
        "videoCard"
    );


const videoViewer =
    document.getElementById(
        "videoViewer"
    );


const expandedVideo =
    document.getElementById(
        "expandedVideo"
    );


const videoClose =
    document.getElementById(
        "videoClose"
    );


function openVideoViewer() {

    if (
        !videoViewer ||
        !expandedVideo
    ) return;


    videoViewer.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";


    expandedVideo.currentTime =
        0;


    expandedVideo.play()
        .catch(() => {});

}


function closeVideoViewer() {

    if (
        !videoViewer ||
        !expandedVideo
    ) return;


    expandedVideo.pause();


    videoViewer.classList.remove(
        "show"
    );


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


if (videoCard) {

    videoCard.addEventListener(
        "click",
        openVideoViewer
    );

}


if (videoClose) {

    videoClose.addEventListener(
        "click",
        closeVideoViewer
    );

}


if (videoViewer) {

    videoViewer.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                videoViewer
            ) {

                closeVideoViewer();

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
                videoViewer &&
                videoViewer.classList.contains(
                    "show"
                )
            ) {

                closeVideoViewer();

            }

            else if (
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

/* =========================================
   VIDEO VIEWER
========================================= */

const videoCard =
    document.getElementById(
        "videoCard"
    );


const videoViewer =
    document.getElementById(
        "videoViewer"
    );


const fullVideo =
    document.getElementById(
        "fullVideo"
    );


const videoViewerClose =
    document.getElementById(
        "videoViewerClose"
    );


function openVideo() {

    if (
        !videoViewer ||
        !fullVideo
    ) return;


    videoViewer.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";


    /* Reset video */

    fullVideo.currentTime = 0;


    /* Play only after user clicks */

    fullVideo.play()
        .catch(
            () => {

                console.log(
                    "Tap play to start video"
                );

            }
        );

}


function closeVideo() {

    if (
        !videoViewer ||
        !fullVideo
    ) return;


    /* Stop video */

    fullVideo.pause();

    fullVideo.currentTime = 0;


    videoViewer.classList.remove(
        "show"
    );


    /* Keep other popup open */

    if (
        imageViewer &&
        imageViewer.classList.contains(
            "show"
        )
    ) {

        document.body.style.overflow =
            "hidden";

    }

    else if (
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


if (videoCard) {

    videoCard.addEventListener(
        "click",
        openVideo
    );

}


if (videoViewerClose) {

    videoViewerClose.addEventListener(
        "click",
        closeVideo
    );

}


if (videoViewer) {

    videoViewer.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                videoViewer
            ) {

                closeVideo();

            }

        }
    );

}


/* VIDEO ESCAPE KEY */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            videoViewer &&
            videoViewer.classList.contains(
                "show"
            )
        ) {

            closeVideo();

        }

    }
);
