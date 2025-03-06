document.addEventListener("DOMContentLoaded", () => {
    const oreButton = document.getElementById("oreButton");
    const oreCount = document.getElementById("oreCount");
    let ores = 0;

    oreButton.addEventListener("click", () => {
        ores++;
        oreCount.textContent = ores;
    });
});
