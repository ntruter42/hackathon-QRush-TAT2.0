function QRushFactory(chest) {
    // create a global variable for the local storage
    let chestVar = chest || '';

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