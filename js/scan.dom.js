// elements reference

const foundTreasure = document.querySelector('.treasureFound');

// hide the foundTreasure element for the first time
foundTreasure.style.display = 'none';

const qRushScan = QRushFactory();

const collectButton = document.querySelector('button');

function onScanSuccess(decodedText, decodedResult) {
	// Handle on success condition with the decoded text or result.
	// console.log(`Scan result: ${decodedText}`, decodedResult);

	if (!isNaN(decodedText)) {
		let chest_id = Number(decodedText);

		if (chest_id >= 1000 && chest_id < 2000) {
			qRushScan.discoverChest(chest_id);
			let foundChest = qRushScan.getChestObject(chest_id);
			let foundPrize = qRushScan.getPrizeObject(foundChest.prize_id);

			document.getElementById("prize-img").src = foundPrize.url;
			document.getElementById("prize-img").classList.remove('hidden');
			document.getElementById("reader").classList.add('hidden');
			// when the scan is successful the foundTreasure element will appear again
			foundTreasure.style.display = 'block';
		}
	}
}

var html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 50, qrbox: 400 }
);

html5QrcodeScanner.render(onScanSuccess);