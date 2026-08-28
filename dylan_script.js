document.addEventListener("DOMContentLoaded", () => {


    /* =========================
       MUSIC
    ========================= */

    const music = document.getElementById("music");
    const musicToggle =
        document.getElementById("musicToggle");

    const musicStatus =
        document.getElementById("musicStatus");


    if (music && musicToggle) {

        musicToggle.addEventListener("click", async () => {

            if (music.paused) {

                try {

                    await music.play();

                    musicToggle.classList.add("active");

                    if (musicStatus) {
                        musicStatus.textContent =
                            "Playing...";
                    }

                } catch (error) {

                    if (musicStatus) {
                        musicStatus.textContent =
                            "Music file not found";
                    }

                    console.log(error);

                }

            } else {

                music.pause();

                musicToggle.classList.remove("active");

                if (musicStatus) {
                    musicStatus.textContent =
                        "Paused";
                }

            }

        });


        music.addEventListener("pause", () => {

            musicToggle.classList.remove("active");

        });

    }


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

        document.body.style.overflow =
            "hidden";

    }


    function closeMemories() {

        if (!memoryPopup) return;

        memoryPopup.classList.remove("show");

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
                    event.target === memoryPopup
                ) {
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

    const expandedImage =
        document.getElementById("expandedImage");

    const expandedTitle =
        document.getElementById("expandedTitle");

    const expandedMessage =
        document.getElementById("expandedMessage");

    const imageViewerClose =
        document.getElementById(
            "imageViewerClose"
        );


    function openImage(image) {

        if (
            !imageViewer ||
            !expandedImage
        ) return;


        expandedImage.src = image.src;


        expandedTitle.textContent =
            image.dataset.title ||
            "Our Memory ♡";


        expandedMessage.textContent =
            image.dataset.message ||
            "Every memory with you is special to me.";


        imageViewer.classList.add("show");


        document.body.style.overflow =
            "hidden";

    }


    function closeImage() {

        if (!imageViewer) return;


        imageViewer.classList.remove(
            "show"
        );


        document.body.style.overflow =
            "";

    }


    /* Click images in collage */

    const collageImages =
        document.querySelectorAll(
            ".memory-collage img"
        );


    collageImages.forEach((image) => {

        image.addEventListener(
            "click",
            () => {

                openImage(image);

            }
        );

    });


    /* Click the 8 gallery cards */

    const galleryImages =
        document.querySelectorAll(
            ".photo-card img"
        );


    galleryImages.forEach((image) => {

        image.addEventListener(
            "click",
            () => {

                const card =
                    image.closest(".photo-card");


                if (card) {

                    image.dataset.title =
                        card.dataset.title;

                    image.dataset.message =
                        card.dataset.message;

                }


                openImage(image);

            }
        );

    });


    /* Close expanded image */

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

                if (
                    event.target === imageViewer
                ) {
                    closeImage();
                }

            }
        );

    }


    /* =========================
       ESCAPE KEY
    ========================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                closeImage();
                closeMemories();

            }

        }
    );


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
                    Math.random() *
                    flowers.length
                )
            ];


        flower.style.left =
            Math.random() * 100 + "%";


        flower.style.fontSize =
            Math.random() * 12 +
            10 +
            "px";


        flower.style.animationDuration =
            Math.random() * 7 +
            8 +
            "s";


        flowerContainer.appendChild(
            flower
        );


        setTimeout(() => {

            flower.remove();

        }, 18000);

    }


    setInterval(
        createFlower,
        700
    );


    /* =========================
       FALLING PETALS
    ========================= */

    const petalContainer =
        document.querySelector(".petals");


    function createPetal() {

        if (!petalContainer) return;


        const petal =
            document.createElement("div");


        petal.className =
            "petal";


        petal.innerHTML =
            "✦";


        petal.style.left =
            Math.random() * 100 + "%";


        petal.style.animationDuration =
            Math.random() * 5 +
            7 +
            "s";


        petalContainer.appendChild(
            petal
        );


        setTimeout(() => {

            petal.remove();

        }, 15000);

    }


    setInterval(
        createPetal,
        1200
    );


});
