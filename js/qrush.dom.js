// Factory function instance
const qRushInstance = QRushFactory();

// DOM CODE BEGINS HERE
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');
const claimedPrizes = document.querySelector('.claimed');
const unclaimedPrizes = document.querySelector('.unclaimed');
showClaimedPrizes();

function swapPrizeDisplay() {
	claimedPrizes.classList.toggle('hidden');
	unclaimedPrizes.classList.toggle('hidden');
}

function showClaimedPrizes() {
	let claimed = qRushInstance.getClaimedPrizes();

	for (let id in claimed) {
		let currentPrize = qRushInstance.getPrizeObject(claimed[id]);

		let imgElement = document.createElement('img');
		imgElement.src = currentPrize.url;

		let divElement = document.createElement('div');
		divElement.classList.add('prize');

		divElement.append(imgElement);
		claimedPrizes.children[1].append(divElement);
	}

	if (!claimedPrizes.firstElementChild) {
		claimedPrizes.classList.add('hidden');
		unclaimedPrizes.classList.remove('hidden');
	}
}

nextButton.addEventListener('click', swapPrizeDisplay);

prevButton.addEventListener('click', swapPrizeDisplay);