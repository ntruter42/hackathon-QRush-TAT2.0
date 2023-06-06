// checking if the value is in the local storage
let chest;

if (localStorage['knownChests']) {
    chest = localStorage.getItem(JSON.parse('knownChests'));
}


// factory function instance

const qRushInstance = QRushFactory(chest);

// local storage code

qRushInstance.setKnownChests([{ yfukfe : 637373 }]);
localStorage.setItem('knownChests', JSON.stringify(qRushInstance.getKnownChests()));