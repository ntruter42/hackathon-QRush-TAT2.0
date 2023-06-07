function QRushFactory() {
	let knownChests = [];
	let sponsors = [];
	let prizes = [];

	//////////////////// Chests
	function setKnownChests(chests) {
		knownChests = chests;
	}

	function getKnownChests() {
		return knownChests;
	}

	//////////////////// Sponsors
	function addSponsor(sponsorInfo) {
		if (validateForm(sponsorInfo)) {
			sponsors.push(sponsorInfo);
		}
	}

	function getSponsors() {
		return sponsors;
	}

	//////////////////// Prizes
	function addPrize(prize) {
		//
	}

	function removePrize(prize_id) {
		//
	}

	function setPrizes(prizes) {
		//
	}

	function getPrizes() {
		//
	}

	//////////////////// Validation
	function validateForm(formInputs) {
		for (let input in formInputs) {
			if (formInputs[input] === "") {
				return false;
			}
		}
		return true;
	}

	return {
		setKnownChests,
		getKnownChests,
		addSponsor,
		getSponsors,
		addPrize,
		removePrize,
		setPrizes,
		getPrizes,
		validateForm
	}
}
