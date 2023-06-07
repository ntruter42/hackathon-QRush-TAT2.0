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

	//////////////////// Player
	function setPlayer(playerInfo) {
		//
	}

	function getPlayer() {
		//
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

	function collectPrize() {
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
		collectPrize,
		validateForm,
		getMapMarkerLocations
	}
}
