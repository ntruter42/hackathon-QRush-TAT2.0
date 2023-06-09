// Factory function instance
const qRushInstance = QRushFactory();

// DOM CODE BEGINS HERE
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');
const claimedPrizes = document.querySelector('.claimed');
const unclaimedPrizes = document.querySelector('.unclaimed');

function swapPrizeDisplay() {
	claimedPrizes.classList.toggle('hidden');
	unclaimedPrizes.classList.toggle('hidden');
}

function showClaimedPrizes() {
	let claimedPrizes = qRushInstance.getClaimedPrizes();

	for (let id in claimedPrizes) {
		let currentPrize = qRushInstance.getPrizeObject(claimedPrizes[id]);

		let imgElement = document.createElement('img');
		imgElement.src = currentPrize.url;

		let divElement = document.createElement('div');
		divElement.classList.add('prize');

		divElement.append(imgElement);
		unclaimedPrizes.append(divElement);
	}
}

nextButton.addEventListener('click', swapPrizeDisplay);

prevButton.addEventListener('click', swapPrizeDisplay);