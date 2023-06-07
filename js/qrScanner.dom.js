// dom elements references

// buttons reference
const collectButton = document.querySelector('button');


// functions
function onScanSuccess(decodedText, decodedResult) {
    
}

var html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 10, qrbox: 250 });

html5QrcodeScanner.render(onScanSuccess);


// event listeners