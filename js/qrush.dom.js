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

nextButton.addEventListener('click', swapPrizeDisplay);

prevButton.addEventListener('click', swapPrizeDisplay);