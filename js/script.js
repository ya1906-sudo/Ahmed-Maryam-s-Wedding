
const weddingAudio = document.getElementById("weddingAudio");
const musicToggle = document.getElementById("musicToggle");
const welcomeScreen = document.getElementById("welcomeScreen");
const enterButton = document.getElementById("enterButton");
const flowersContainer = document.getElementById("flowersContainer");

let isPlaying = false;

// Floating Flowers Effect
function startFlowers() {

    const tones = ["tone-1", "tone-2", "tone-3", "tone-4"];

    for (let i = 0; i < 55; i++) {

        const petal = document.createElement("span");

        petal.classList.add(
            "petal",
            tones[Math.floor(Math.random() * tones.length)]
        );

        petal.style.left = Math.random() * 100 + "vw";

        petal.style.setProperty(
            "--size",
            (8 + Math.random() * 10) + "px"
        );

        petal.style.setProperty(
            "--duration",
            (9 + Math.random() * 10) + "s"
        );

        petal.style.setProperty(
            "--delay",
            -(Math.random() * 15) + "s"
        );

        petal.style.setProperty(
            "--drift",
            (5 + Math.random() * 15) + "vw"
        );

        flowersContainer.appendChild(petal);
    }

    flowersContainer.classList.add("active");
}


// Enter Wedding
enterButton.addEventListener("click", async () => {

    // Start flowers
    startFlowers();

    // Start music
    try {
        await weddingAudio.play();

        isPlaying = true;
        musicToggle.textContent = "Ⅱ";

    } catch (error) {
        console.error("Audio playback failed:", error);
    }

    // Hide welcome screen
    welcomeScreen.classList.add("hide");

});


// Music Control
musicToggle.addEventListener("click", async () => {

    if (!isPlaying) {

        try {
            await weddingAudio.play();

            isPlaying = true;
            musicToggle.textContent = "Ⅱ";

        } catch (error) {
            console.error("Audio playback failed:", error);
        }

    } else {

        weddingAudio.pause();

        isPlaying = false;
        musicToggle.textContent = "♫";

    }

});
