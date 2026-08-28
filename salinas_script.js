document.addEventListener("DOMContentLoaded", () => {


    /* =========================
       MUSIC
    ========================= */

    const music =
        document.getElementById("music");

    const musicToggle =
        document.getElementById("musicToggle");

    const musicStatus =
        document.getElementById("musicStatus");


    if (music && musicToggle) {

        musicToggle.addEventListener("click", () => {

            if (music.paused) {

                music.play()
                    .then(() => {

                        musicToggle.classList.add("active");

                        if (musicStatus) {
                            musicStatus.textContent = "Playing...";
                        }

                    })
                    .catch(() => {

                        if (musicStatus) {
                            musicStatus.textContent =
                                "Tap again to play";
                        }

                    });

            } else {

                music.pause();

            }

        });


        music.addEventListener("pause", () => {

            musicToggle.classList.remove("active");

            if (musicStatus) {
                musicStatus.textContent = "Paused";
            }

        });

    }


    /* =========================
       FLOATING FLOWERS
    ========================= */

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

        flower.innerHTML =
            flowers[
                Math.floor(
                    Math.random() * flowers.length
                )
            ];

        flower.style.left =
            Math.random() * 100 + "%";

        flower.style.fontSize =
            Math.random() * 12 + 10 + "px";

        flower.style.animationDuration =
            Math.random() * 7 + 8 + "s";

        flowerContainer.appendChild(flower);


        setTimeout(() => {

            flower.remove();

        }, 18000);

    }


    setInterval(createFlower, 700);


    /* =========================
       VIEW MEMORIES POPUP
    ========================= */

    const viewMemoriesBtn =
        document.getElementById("viewMemoriesBtn");

    const memoryPopup =
        document.getElementById("memoryPopup");

    const memoryClose =
        document.getElementById("memoryClose");


    function openMemories() {

        if (!memoryPopup) return;

        memoryPopup.classList.add("show");

        document.body.style.overflow = "hidden";

    }


    function closeMemories() {

        if (!memoryPopup) return;

        memoryPopup.classList.remove("show");

        document.body.style.overflow = "";

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

                if (event.target === memoryPopup) {

                    closeMemories();

                }

            }
        );

    }


    /* =========================
       IMAGE VIEWER
    ========================= */

    const imageViewer =
        document.getElementById("imageViewer");

    const imageViewerClose =
        document.getElementById("imageViewerClose");

    const expandedImage =
        document.getElementById("expandedImage");

    const expandedTitle =
        document.getElementById("expandedTitle");

    const expandedMessage =
        document.getElementById("expandedMessage");


    function openImage(image, title, message) {

        if (
            !imageViewer ||
            !expandedImage
        ) return;


        expandedImage.src = image.src;


        expandedTitle.textContent =
            title ||
            "A Special Memory ♥";


        expandedMessage.textContent =
            message ||
            "Every memory with you is something I will always treasure.";


        imageViewer.classList.add("show");

        document.body.style.overflow = "hidden";

    }


    function closeImage() {

        if (!imageViewer) return;

        imageViewer.classList.remove("show");


        /* Keep memories popup open if it is open */

        if (
            !memoryPopup ||
            !memoryPopup.classList.contains("show")
        ) {

            document.body.style.overflow = "";

        }

    }


    /* MAIN 8 PHOTOS */

    document
        .querySelectorAll(".photo-card")
        .forEach(card => {

            const image =
                card.querySelector("img");


            card.addEventListener("click", () => {

                openImage(

                    image,

                    card.dataset.title,

                    card.dataset.message

                );

            });

        });


    /* 5 COLLAGE PHOTOS */

    document
        .querySelectorAll(".memory-collage img")
        .forEach(image => {

            image.addEventListener(
                "click",
                () => {

                    openImage(

                        image,

                        image.dataset.title,

                        image.dataset.message

                    );

                }
            );

        });


    if (imageViewerClose) {

        imageViewerClose.addEventListener(
            "click",
            closeImage
        );

    }


    if (imageViewer) {

        imageViewer.addEventListener(
            "click",
            (event) => {

                if (event.target === imageViewer) {

                    closeImage();

                }

            }
        );

    }


    /* ESCAPE KEY */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                if (
                    imageViewer &&
                    imageViewer.classList.contains("show")
                ) {

                    closeImage();

                } else {

                    closeMemories();

                }

            }

        }
    );


});
