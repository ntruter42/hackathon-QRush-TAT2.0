function QRushFactory() {
	let knownChests = [];
	let sponsors = [];
	let prizesBasket = [];
	let redeemPrize = [];
	let prizeID = [];
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
	function addPrize(objectPrize) {
		if (validateForm(objectPrize)) {
			prizesBasket.push(objectPrize);
		}
		let prizeID = prizesBasket[prizesBasket.length - 1].prizeID + 1;
		prizesBasket.push();
	}



	function removePrize(prize_object) {
		let i = prizesBasket.indexOf(prize_object);
		prizesBasket.splice(i, 1)

	}

	function setPrizes(prizes) {
		prizesBasket = prizes;
	}

	function getPrizes() {
		return prizesBasket;
	}

	function collectPrize() {
		return redeemPrize;
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
	function validateInput(formInput) {
		if (formInput === "") {
			return false;
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
		getMapMarkerLocations,
		validateInput
	}
}
