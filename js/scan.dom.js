const collectButton = document.querySelector('button');

function onScanSuccess(decodedText, decodedResult) {
	// Handle on success condition with the decoded text or result.
	// console.log(`Scan result: ${decodedText}`, decodedResult);

	if (!isNaN(decodedText)) {
		if (1000 <= Number(decodedText) < 2000) {
			QrApp.discoverChest(decodedText);
		}
	}
}

var html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 1, qrbox: 400 }
);

html5QrcodeScanner.render(onScanSuccess);