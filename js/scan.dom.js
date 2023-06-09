// elements reference

const foundTreasure = document.querySelector('.treasureFound');

// hide the foundTreasure element for the first time
foundTreasure.classList.add('hidden');

const qRushScan = QRushFactory();

const collectButton = document.querySelector('button');

function onScanSuccess(decodedText, decodedResult) {
	html5QrcodeScanner.clear();

	if (!isNaN(decodedText)) {
		let chest_id = Number(decodedText);

		if (chest_id >= 1000 && chest_id < 2000) {
			qRushScan.discoverChest(chest_id);
			let foundChest = qRushScan.getChestObject(chest_id);
			let foundPrize = qRushScan.getPrizeObject(foundChest.prize_id);

			console.log(foundPrize.url);
			document.getElementById("prize-img").src = foundPrize.url;
			document.getElementById("treasure").classList.remove('hidden');
			document.getElementById("reader").classList.add('hidden');
			foundTreasure.classList.remove('hidden');
			foundTreasure.innerHTML = "Treasure found!";

			collectButton.addEventListener('click', function () {
				qRushScan.collectPrize(foundPrize.prize_id);
				foundTreasure.innerHTML = "Treasure collected";
				setTimeout(function () {
					foundTreasure.classList.add('hidden');
					window.location.href = './index.html';
				}, 5000);
			});
		} else {
			foundTreasure.innerHTML = "";
		}
	}
}

var html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 50, qrbox: 400, disableFlip: true }
);

html5QrcodeScanner.render(onScanSuccess);