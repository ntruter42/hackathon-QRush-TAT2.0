const qRushScan = QRushFactory();

const collectButton = document.querySelector('button');

function onScanSuccess(decodedText, decodedResult) {
	// Handle on success condition with the decoded text or result.
	// console.log(`Scan result: ${decodedText}`, decodedResult);

	if (!isNaN(decodedText)) {
		if (Number(decodedText) >= 1000 && Number(decodedText) < 2000) {
			qRushScan.discoverChest(Number(decodedText));
			// create an element for the pop up message
			const treasureFoundElement = document.createElement('div');
			// setting the innerText of the treasureFoundElement
			treasureFoundElement.innerText = 'Treasure found!';
			// append the newly created element to the dom
			document.body.append(treasureFoundElement);
		}
	}
}

var html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 1, qrbox: 400 }
);

html5QrcodeScanner.render(onScanSuccess);