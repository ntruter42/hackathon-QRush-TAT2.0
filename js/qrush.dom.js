// factory function instance
const qRushInstance = QRushFactory();

// local storage code
if (localStorage['knownChests']) {
    qRushInstance.setKnownChests(JSON.parse(localStorage['knownChests']));
} else {
	localStorage.setItem('knownChests', JSON.stringify(qRushInstance.getKnownChests()));
}