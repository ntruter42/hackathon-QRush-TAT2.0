function QRushFactory() {
	let allChests = [];
	let knownChests = [];
	let sponsors = [];
	let prizes = [];

	//////////////////// CHEST FUNCTIONS ////////////////////

	// set all chests in area from localStorage / database
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

	// adds a prize to list of prize objects
	function addPrize(prize) {
		//
	}

	// remove a prize from list of prize objects
	function removePrize(prize_id) {
		//
	}

	// sets all prizes available from localStorage / database
	function setPrizes(prizes) {
		//
	}

	// returns list of available prizes
	function getPrizes() {
		//
	}

	// remove a prize from a treasure chest and adds it to player collection
	function collectPrize() {
		//
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
		validateEmptyForm,
		getMapMarkerLocations
	}
}
