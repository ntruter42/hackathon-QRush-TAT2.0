function QRushFactory() {
	let knownChests = [];
	let sponsors = [];
	let prizes = [];

	//////////////////// Chests
	function setChests(chests) {
		//
	}

	function getChests() {
		// 
	}

	function addChest(id, location) {
		//
	}

	function setKnownChests(chests) {
		knownChests = chests;
	}

	function getKnownChests() {
		return knownChests;
	}

	function discoverChest(chest_id) {
		//
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

	//////////////////// Locations
	function getMapMarkerLocations(chests) {
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
		setChests,
		getChests,
		addChest,
		setKnownChests,
		getKnownChests,
		discoverChest,
		addSponsor,
		getSponsors,
		addPrize,
		removePrize,
		setPrizes,
		getPrizes,
		validateForm,
		getMapMarkerLocations
	}
}
