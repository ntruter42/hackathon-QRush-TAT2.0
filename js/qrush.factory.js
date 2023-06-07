function QRushFactory() {
	let allChests = [];
	let knownChests = [];
	let sponsors = [];
	let prizesBasket = [];
	let redeemPrize = [];
	let prizeID = [];
	//////////////////// Chests
	function setChests(chests) {
		allChests = chests;
	}

	// returns all chests in area as list of objects
	function getChests() {
		return chests;
	}

	// adds a single chest object to list of all chests
	function addChest(chest_id, location) {
	}

	// sets known chests from localStorage / database
	function setKnownChests(chests) {
		knownChests = chests;
	}

	// returns all known chests as a list of objects
	function getKnownChests() {
		return knownChests;
	}

	// adds a single chest object to list of known chests
	function discoverChest(chest_id) {
		//
	}

	//////////////////// SPONSOR FUNCTIONS ////////////////////

	// adds sponsor details to list of sponsors
	function addSponsor(sponsorInfo) {
		if (validateEmptyForm(sponsorInfo)) {
			sponsors.push(sponsorInfo);
		}
	}

	// returns a list of all sponsors
	function getSponsors() {
		return sponsors;
	}

	//////////////////// PRIZE FUNCTIONS ////////////////////

	function addPrize(objectPrize) {
		if (validateForm(objectPrize)) {
			prizesBasket.push(objectPrize);
		}
		
	}

	function removePrize(prize_object) {
		let i = prizesBasket.indexOf(prize_object);
		prizesBasket.splice(i, 1)

	}

	// sets all prizes available from localStorage / database
	function setPrizes(prizes) {
		prizesBasket = prizes;
	}

	// returns list of available prizes
	function getPrizes() {
		return prizesBasket;
	}

	// remove a prize from a treasure chest and adds it to player collection
	function collectPrize() {
		return redeemPrize;
	}

	//////////////////// LOCATION FUNCTIONS ////////////////////

	// return coordinates of all know chests
	function getMapMarkerLocations(chests) {
		//
	}

	//////////////////// Validation

	// validates multiple inputs for empty fields
	function validateEmptyForm(formInputs) {
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
