function QRushFactory() {
	let chests = JSON.parse(localStorage.getItem('chests')) || [];
	let prizes = JSON.parse(localStorage.getItem('prizes')) || [];
	let sponsors = JSON.parse(localStorage.getItem('sponsors')) || [];
	let knownChests = JSON.parse(localStorage.getItem('knownChests')) || [];
	let claimedPrizes = JSON.parse(localStorage.getItem('claimedPrizes')) || [];

	// Dummy information for testing starts here //////////////////////////////////
	let dummyChests = [
		{ 'chest_id': 1000, 'prize_id': 2000, 'location': '-33.9220352, 18.4220006' },
		{ 'chest_id': 1001, 'prize_id': 0, 'location': '-33.923069, 18.4238172' },
		{ 'chest_id': 1002, 'prize_id': 2004, 'location': '-33.9117977, 18.4226978' },
		{ 'chest_id': 1003, 'prize_id': 2003, 'location': '-33.9327695, 18.4230611' },
		{ 'chest_id': 1004, 'prize_id': 0, 'location': '-33.9278084, 18.4165421' },
		{ 'chest_id': 1005, 'prize_id': 2002, 'location': '-33.9319319, 18.408851' },
		{ 'chest_id': 1006, 'prize_id': 2001, 'location': '-33.920699, 18.421795' }
	];
	let dummyPrizes = [
		{ 'prize_id': 2000, 'sponsor_id': 3000, 'prize_title': 'R200 Uber Voucher', 'count': 169, 'url': './img/prizes/uber_r200_voucher.jpg' },
		{ 'prize_id': 2001, 'sponsor_id': 3001, 'prize_title': '10GB Telkom Data Bundle', 'count': 320, 'url': './img/prizes/telkom_10gb_discount.jpeg' },
		{ 'prize_id': 2002, 'sponsor_id': 3002, 'prize_title': '2 Ster-Kinekor Tickets', 'count': 12, 'url': './img/prizes/ster-kinekor_2_tickets.jpeg' },
		{ 'prize_id': 2003, 'sponsor_id': 3002, 'prize_title': 'Food Lovers 30% Discount', 'count': 49, 'url': './img/prizes/food_lover_30percent_discount.jpg' },
		{ 'prize_id': 2004, 'sponsor_id': 3002, 'prize_title': 'Pick n Pay R50 discount', 'count': 120, 'url': './img/prizes/picknpay_r50_discount.jpeg' }
	];
	let dummySponsors = [
		{ 'sponsor_id': 3000, 'sponsor_name': 'Pick n Pay Family Strand Street', 'location': '-33.920699, 18.421795', 'email': 'info@picknpay.com' },
		{ 'sponsor_id': 3001, 'sponsor_name': 'Ster-Kinekor V&A Waterfront', 'location': '-33.9044466, 18.4193801', 'email': 'steffanygretzinger@cinema.com' },
		{ 'sponsor_id': 3002, 'sponsor_name': 'Telkom Direct Sea Point', 'location': '-33.9113301, 18.3937723', 'email': 'tamlyn@telkom.com' }
	];
	let dummyKnownChests = [1001, 1002];
	let dummyClaimedPrizes = [2001];

	if (getChests().length === 0) {
		// localStorage.setItem('chests', []);
		localStorage.setItem('chests', JSON.stringify(dummyChests));
	}
	if (getPrizes().length === 0) {
		// localStorage.setItem('prizes', []);
		localStorage.setItem('prizes', JSON.stringify(dummyPrizes));
	}
	if (getSponsors().length === 0) {
		// localStorage.setItem('sponsors', []);
		localStorage.setItem('sponsors', JSON.stringify(dummySponsors));
	}
	if (getKnownChests().length === 0) {
		// localStorage.setItem('knownChests', []);
		localStorage.setItem('knownChests', JSON.stringify(dummyKnownChests));
	}
	if (getClaimedPrizes().length === 0) {
		// localStorage.setItem('claimedPrizes', []);
		localStorage.setItem('claimedPrizes', JSON.stringify(dummyClaimedPrizes));
	}
	// Dummy information ends here ////////////////////////////////////////////////

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

			if (currentChest.chest_id === id) {
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
	function addPrize(sponsor_name, fullname, email, location, title, count) {
		let sponsor_id = getNewSponsorId();

		for (let i in sponsors) {
			if (sponsors[i].sponsor_name === sponsor_name) {
				sponsor_id = sponsors[i].sponsor_id;
			}
		}

		if (sponsor_id === getNewSponsorId()) {
			addSponsor(sponsor_name, location, email);
		}

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
			prizes.splice(index, 1);
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

	function getClaimedPrizes() {
		return claimedPrizes;
	}

	// get a prize from a treasure chest and adds it to player collection
	// then decrement that prize count
	function collectPrize(prize_id) {
		for (let i in prizes) {
			if (prizes[i].prize_id === prize_id) {
				claimedPrizes.push(prize_id);
				prizes[i].count -= 1;
			}
		}
	}

	//////////////////// LOCATION FUNCTIONS ////////////////////

	// return coordinates of all known chests
	function getMapMarkerLocations() {
		let locations = [];

		for (let i in chests) {
			let chest = chests[i];

			let x = parseFloat(chest.location.split(',')[0]);
			let y = parseFloat(chest.location.split(',')[1]);
			locations.push([chest.chest_id.toString(), x, y, parseInt(i)]);
		}

		return locations;
	}

	function getMarkerAverageCenter() {
		let x = 0;
		let y = 0;

		for (let i in chests) {
			let chest = chests[i];

			x += parseFloat(chest.location.split(',')[0]);
			y += parseFloat(chest.location.split(',')[1]);
		}

		return { 'lat': x / chests.length, 'lng': y / chests.length };
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
	function validateEmptyInput(formInput) {
		if (formInput === "") {
			return false;
		}

		return true;
	}

	function getNewChestId() {
		if (chests.length > 0) {
			return chests[chests.length - 1].chest_id + 1;
		}
		return 1000;
	}

	function getNewPrizeId() {
		if (prizes.length > 0) {
			return prizes[prizes.length - 1].prize_id + 1;
		}
		return 2000;
	}

	function getNewSponsorId() {
		if (sponsors.length > 0) {
			return sponsors[sponsors.length - 1].sponsor_id + 1;
		}
		return 3000;
	}

	function getChestObject(chest_id) {
		for (let i = 0; i < chests.length; i++) {
			if (chests[i].chest_id === chest_id) {
				return chests[i];
			}
		}
		return false;
	}

	function getPrizeObject(prize_id) {
		for (let i = 0; i < prizes.length; i++) {
			if (prizes[i].prize_id === prize_id) {
				return prizes[i];
			}
		}
		return false;
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
		getClaimedPrizes,
		validateEmptyForm,
		validateEmptyInput,
		getMapMarkerLocations,
		getMarkerAverageCenter,
		getNewChestId,
		getNewPrizeId,
		getNewSponsorId,
		getChestObject,
		getPrizeObject,
	}
}
