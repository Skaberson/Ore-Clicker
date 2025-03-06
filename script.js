document.addEventListener("DOMContentLoaded", () => {
    const oreButton = document.getElementById("oreButton");
    const oreCountElement = document.getElementById("oreCount");
    const upgradeOreButton = document.getElementById("upgradeOre");
    const upgradePickaxeButton = document.getElementById("upgradePickaxe");
    
    let ores = 0;
    let oreValue = 1;
    let oreUpgradeCost = 50;
    let pickaxeUpgradeCost = 100;
    let pickaxeMultiplier = 1;

    oreButton.addEventListener("click", () => {
        ores += oreValue * pickaxeMultiplier;
        oreCountElement.textContent = ores;
        checkUpgrades();
    });

    upgradeOreButton.addEventListener("click", () => {
        if (ores >= oreUpgradeCost) {
            ores -= oreUpgradeCost;
            oreUpgradeCost *= 2;
            oreValue += 1;
            checkUpgrades();
            upgradeOreButton.textContent = `Upgrade Ore (Cost: ${oreUpgradeCost} ores)`;
            oreCountElement.textContent = ores;
        }
    });

    upgradePickaxeButton.addEventListener("click", () => {
        if (ores >= pickaxeUpgradeCost) {
            ores -= pickaxeUpgradeCost;
            pickaxeUpgradeCost *= 2;
            pickaxeMultiplier += 1;
            checkUpgrades();
            upgradePickaxeButton.textContent = `Upgrade Pickaxe (Cost: ${pickaxeUpgradeCost} ores)`;
            oreCountElement.textContent = ores;
        }
    });

    function checkUpgrades() {
        upgradeOreButton.disabled = ores < oreUpgradeCost;
        upgradePickaxeButton.disabled = ores < pickaxeUpgradeCost;
    }
});
