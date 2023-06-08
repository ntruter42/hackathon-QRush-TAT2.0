function QRushFactory() {
	let prizes = [
		{ 'prize_id': 1000, 'sponsor_id': 3000, 'prize_title': 'R100 Uber Voucher' },
		{ 'prize_id': 1001, 'sponsor_id': 3001, 'prize_title': '5GB Telkom Data Bundle' },
		{ 'prize_id': 1002, 'sponsor_id': 3002, 'prize_title': '1 Ster-Kinekor Ticket' }
	];

	let chests = [
		{ 'chest_id': 2000, 'prize_id': 1000, 'location': '32.546, -18.456' },
		{ 'chest_id': 2001, 'prize_id': 1001, 'location': '32.546, -18.456' },
		{ 'chest_id': 2002, 'prize_id': 1002, 'location': '32.546, -18.456' }
	];

	let sponsors = [
		{ 'sponsor_id': 3000, 'sponsor_name': 'Uber', 'location': '32.546, -18.456', 'email': 'usama68@gmail.com' },
		{ 'sponsor_id': 3001, 'sponsor_name': 'Ster-Kinekor', 'location': '32.546, -18.456', 'email': 'stef123@gmail.com' },
		{ 'sponsor_id': 3002, 'sponsor_name': 'Telkom', 'location': '32.546, -18.456', 'email': 'tammy95@yahoo.com' }
	];

	let knownChests = [2001, 2002];

	//////////////////// Chests
	function setChests(chestsInput) {
		chests = chestsInput;
	}

	// returns all chests in area as list of objects
	function getChests() {
		return chests;
	}

	// adds a single chest object to list of all chests
	function addChest(location) {
		for (let id in chests) {
			if (chests[id] === chest_id) {
				return;
			}
		}
		chests_id()
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
		for (let i = 0; i < allChests.length; i++) {
			const currentChest = allChests[i];

			if (currentChest['chest_id'] === chest_id) {
				knownChests.push(chest_id);
			}
		}
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
		let prizeID = prizesBasket[prizesBasket.length - 1].prizeID + 1;
		prizesBasket.push();
	}

	function removePrize(prize_object) {
		let i = prizesBasket.indexOf(prize_object);
		prizesBasket.splice(i, 1);
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

	// return coordinates of all known chests
	function getMapMarkerLocations() {
		let locations = [];

		for (let i in chests) {
			let chest = chests[i];
			if (knownChests.includes(chest.chest_id)) {
				let x = parseFloat(chest.location.split(',')[0]);
				let y = parseFloat(chest.location.split(',')[1]);
				locations.push([chest_id.toString(), x, y, parseInt(index)]);
			}
		}

		return locations;
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

	// validates a single input for an empty field
	function validateInput(formInput) {
		if (formInput === "") {
			return false;
		}

		return true;
	}

	function getNewChestId() {
		return chests[chests.length - 1].id + 1;
	}

	function getNewPrizeId() {
		return prizes[prizes.length - 1].id + 1;
	}

	function getNewSponsorId() {
		return sponsors[sponsors.length - 1].id + 1;
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
		validateInput,
		getNewChestId,
		getNewPrizeId,
		getNewSponsorId
	}
}
