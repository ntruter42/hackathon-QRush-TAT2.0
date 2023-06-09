// elements reference

const foundTreasure = document.querySelector('.treasureFound');

// hide the foundTreasure element for the first time
foundTreasure.classList.add('hidden');

const qRushScan = QRushFactory();

const collectButton = document.querySelector('#collect-button');

function onScanSuccess(decodedText, decodedResult) {
	html5QrcodeScanner.clear();

	if (!isNaN(decodedText)) {
		let chest_id = Number(decodedText);

		if (chest_id >= 1000 && chest_id < 2000) {
			qRushScan.discoverChest(chest_id);
			let foundChest = qRushScan.getChestObject(chest_id);
			let foundPrize = qRushScan.getPrizeObject(foundChest.prize_id);

			if (foundPrize) {
				foundTreasure.innerHTML = "Treasure found :D";
				collectButton.classList.remove('hidden');
			} else {
				foundTreasure.innerHTML = "No treasure here :(";
				collectButton.classList.add('hidden');
				setTimeout(function () {
					foundTreasure.classList.add('hidden');
					window.location.href = './index.html';
				}, 3000);
			}

			document.getElementById("prize-img").src = foundPrize.url;
			document.getElementById("treasure").classList.remove('hidden');
			document.getElementById("reader").classList.add('hidden');
			foundTreasure.classList.remove('hidden');

			collectButton.addEventListener('click', function () {
				qRushScan.collectPrize(foundPrize.prize_id);
				foundTreasure.innerHTML = "Collected :)";
				qRushScan.updateLocalStorage();
				setTimeout(function () {
					foundTreasure.classList.add('hidden');
					window.location.href = './index.html';
				}, 3000);
			});
		} else {
			foundTreasure.innerHTML = "That's not a treasure chest :\\";
			setTimeout(function () {
				foundTreasure.classList.add('hidden');
				window.location.href = './scan.html';
			}, 3000);
		}
	} else {
		foundTreasure.innerHTML = "That's not a treasure chest :\\";
		setTimeout(function () {
			foundTreasure.classList.add('hidden');
			window.location.href = './scan.html';
		}, 3000);
	}
}

var html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 50, qrbox: 400, aspectRatio: 1, disableFlip: true }
);

html5QrcodeScanner.render(onScanSuccess);