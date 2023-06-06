function QRushFactory() {
    // create a global variable for the local storage
    let chestVar;

    function setKnownChests(chest) {
        chestVar = chest;
    }

    function getKnownChests() {
        return chestVar;
    }

    return {
        setKnownChests,
        getKnownChests
    }
}