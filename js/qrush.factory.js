function QRushFactory(chests, prizes, sponsors, knownChests, claimedPrizes) {
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
		let newChest = { 'chest_id': getNewChestId(), 'prize_id': 0, 'location': location };
		if (location) {
			chests.push(newChest);
		}

		return newChest.chest_id;
	}

	// sets known chests from localStorage / database
	function setKnownChests(chestsInput) {
		knownChests = chestsInput;
	}

	// returns all known chests as a list of objects
	function getKnownChests() {
		return knownChests;
	}

	// adds a single chest object to list of known chests
	function discoverChest(id) {
		for (let i = 0; i < chests.length; i++) {
			const currentChest = chests[i];

			if (currentChest[chest_id] === id) {
				knownChests.push(id);
				return;
			}
		}
	}

	//////////////////// SPONSOR FUNCTIONS ////////////////////

	// adds sponsor details to list of sponsors
	function addSponsor(name, location, email) {
		let newSponsor = {
			'sponsor_id': getNewSponsorId(),
			'sponsor_name': name,
			'location': location,
			'email': email
		};

		if (validateEmptyForm(newSponsor)) {
			sponsors.push(newSponsor);
		}

		return newSponsor.sponsor_id;
	}

	// returns a list of all sponsors
	function getSponsors() {
		return sponsors;
	}

	//////////////////// PRIZE FUNCTIONS ////////////////////

	// add a single prize to list of prizes,
	// then allocate it to an empty chest
	function addPrize(sponsor_id, title, count) {
		let newPrize = {
			'prize_id': getNewPrizeId(),
			'sponsor_id': sponsor_id,
			'prize_title': title,
			'count': count
		};

		if (validateEmptyForm(newPrize)) {
			prizes.push(newPrize);
		}

		return newPrize.prize_id;
	}

	function removePrize(id) {
		let index = -1;

		for (let i = 0; i < prizes.length; i++) {
			if (prizes[i].prize_id === id) {
				index = i;
			}
		}

		if (index >= 0) {
			prizes.splice(i, 1);
		}
	}

	// sets all prizes available from localStorage / database
	function setPrizes(prizesInput) {
		prizes = prizesInput;
	}

	// returns list of available prizes
	function getPrizes() {
		return prizes;
	}

	// get a prize from a treasure chest and adds it to player collection
	// then decrement that prize count
	function collectPrize(prize_id) {
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
