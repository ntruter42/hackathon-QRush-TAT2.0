describe('The QRush App factory function', function () {
	let qRush;

	beforeEach(function () {
		qRush = QRushFactory();
	});

	describe('addChest, setChests, getChests', function () {
		it('should set and get the treasure chests', function () {
			let localStorageChests = [];

			qRush.setChests(localStorageChests);
			assert.deepEqual([], qRush.getChests());
		});

		it('should set and get the treasure chests', function () {
			let localStorageChests = [
				{ 'chest_id': 21425108, 'location': '-33.92804417019321, 18.423937019115005', 'prizes': '' },
				{ 'chest_id': 32753124, 'location': '-33.927047504280935, 18.45548536441777', 'prizes': '' }
			];
			qRush.setChests(localStorageChests);
			assert.deepEqual(localStorageChests, qRush.getChests());
		});

		it('should initialise all chests in the factory function', function () {
			let localStorageChests = [
				{ 'chest_id': 53903426, 'location': '-33.91786995338542, 18.422654047132987', 'prizes': '' },
				{ 'chest_id': 24982562, 'location': '-33.92938377623288, 18.41104307597263', 'prizes': '' }
			];
			qRush.setChests(localStorageChests);
			assert.deepEqual(localStorageChests, qRush.getChests());
		});

		it('should add a chest to list of all chests', function () {
			let localStorageChests = [{ 'chest_id': 53903426, 'location': '-33.91786995338542, 18.422654047132987' }, { 'chest_id': 24982562, 'location': '-33.92938377623288, 18.41104307597263' }];
			qRush.setChests(localStorageChests);
			assert.deepEqual(localStorageChests, qRush.getChests());

			let newChest = { 'chest_id': 33456780, 'location': '-33.92804417019321, 18.423937019115005' };
			qRush.addChest(newChest);

			localStorageChests = [
				{ 'chest_id': 53903426, 'location': '-33.91786995338542, 18.422654047132987', 'prizes': '' },
				{ 'chest_id': 24982562, 'location': '-33.92938377623288, 18.41104307597263', 'prizes': '' },
				{ 'chest_id': 33456780, 'location': '-33.92804417019321, 18.423937019115005', 'prizes': '' }
			];
			assert.deepEqual(localStorageChests, qRush.getChests());
		});
	});

	describe('setKnownChests, getKnownChests', function () {
		it('should set and get the known treasure chests', function () {
			let localStorageChests = [];
			qRush.setKnownChests(localStorageChests);
			assert.deepEqual([], qRush.getKnownChests());
		});

		it('should set and get the known treasure chests', function () {
			let localStorageChests = [
				{ 'chest_id': 21425108, 'location': '-33.92804417019321, 18.423937019115005', 'prizes': '' },
				{ 'chest_id': 32753124, 'location': '-33.927047504280935, 18.45548536441777', 'prizes': '' }
			];
			qRush.setKnownChests(localStorageChests);
			assert.deepEqual(localStorageChests, qRush.getKnownChests());
		});

		it('should be able to initialise the known chests in the factory function', function () {
			let localStorageChests = [
				{ 'chest_id': 53903426, 'location': '-33.91786995338542, 18.422654047132987', 'prizes': '' },
				{ 'chest_id': 24982562, 'location': '-33.92938377623288, 18.41104307597263', 'prizes': '' }
			];
			qRush.setKnownChests(localStorageChests);
			assert.deepEqual(localStorageChests, qRush.getKnownChests());
		});
	});

	describe('discoverChest', function () {
		it('should add a discovered chest to known chests', function () {
			let localStorageChests = [
				{ 'chest_id': 53903426, 'location': '-33.91786995338542, 18.422654047132987' },
				{ 'chest_id': 24982562, 'location': '-33.92938377623288, 18.41104307597263' },
				{ 'chest_id': 33456780, 'location': '-33.92938377623288, 18.41104307597263' }
			];
			
			qRush.setChests(localStorageChests);
			assert.deepEqual(localStorageChests, qRush.getChests());

			let allKnownChests = [53903426, 24982562];

			qRush.setKnownChests(allKnownChests);
			assert.deepEqual(allKnownChests, qRush.getKnownChests());

			let newChest_id = 33456780;
			qRush.discoverChest(newChest_id);

			assert.deepEqual(allKnownChests, qRush.getKnownChests());
		});

		it('should add multiple discovered chests to known chests', function () {
			let localStorageChests = [
				{ 'chest_id': 53903426, 'location': '-33.91786995338542, 18.422654047132987', 'prizes': '' },
				{ 'chest_id': 24982562, 'location': '-33.92938377623288, 18.41104307597263', 'prizes': '' }
			];
			qRush.setChests(localStorageChests);
			assert.deepEqual(localStorageChests, qRush.getChests());

			let newChest1 = { 'chest_id': 33456780, 'location': '-33.92804417019321, 18.423937019115005' };
			let newChest2 = { 'chest_id': 53903426, 'location': '-33.91786995338542, 18.422654047132987' };
			qRush.discoverChest(newChest1);
			qRush.discoverChest(newChest2);

			let allKnownChests = [
				{ 'chest_id': 53903426, 'location': '-33.91786995338542, 18.422654047132987', 'prizes': '' },
				{ 'chest_id': 24982562, 'location': '-33.92938377623288, 18.41104307597263', 'prizes': '' },
				{ 'chest_id': 33456780, 'location': '-33.92804417019321, 18.423937019115005', 'prizes': '' },
				{ 'chest_id': 53903426, 'location': '-33.91786995338542, 18.422654047132987', 'prizes': '' }
			];
			assert.deepEqual(allKnownChests, qRush.getKnownChests());
		});
	});

	describe('addSponsor, getSponsor', function () {
		it('should return a registered company named Shoprite.', function () {

			qRush.addSponsor('Shoprite', 'Ottery', 'shoprite@gmail.com');
			assert.deepEqual(['Shoprite'], qRush.getSponsors());
		})

		it('should return a registered company named Woolworths and Shooprite.', function () {

			qRush.addSponsor('Woolworths', 'Claremont', 'woolies@gmail.com');
			qRush.addSponsor('Shoprite', 'Ottery', 'shoprite@gmail.com');
			assert.deepEqual(['Woolworths', 'Shoprite'], qRush.getSponsors());
		})

		it('should return an error message, 1 or more sections have not been been filled in.', function () {

			qRush.addSponsor('Claremont');
			assert.deepEqual([], qRush.getSponsors());
		})
	});

	describe('addPrize, removePrize, setPrizes, getPrizes', function () {
		it('should add a prize to list of prizes', function () {
			let newPrize = { prize_id: 34564565, 'prize_title': 'R200 Uber Voucher', 'prize_count': 10, 'sponsor_name': 'Uber' };

			qRush.addPrize(newPrize);
			assert.deepEqual([newPrize], qRush.getPrizes());
		});

		it('should add multiple prizes to list of prizes', function () {
			let newPrize1 = { prize_id: 34564565, 'prize_title': 'R200 Uber Voucher', 'prize_count': 10, 'sponsor_name': 'Uber' };
			let newPrize2 = { prize_id: 34564566, 'prize_title': '5GB Telkom Data Bundle', 'prize_count': 20, 'sponsor_name': 'Telkom' };

			qRush.addPrize(newPrize1);
			qRush.addPrize(newPrize2);
			assert.deepEqual([newPrize1, newPrize2], qRush.getPrizes());
		});

		it('should remove a prize from list of prizes', function () {
			let newPrize1 = { prize_id: 34564565, 'prize_title': 'R200 Uber Voucher', 'prize_count': 10, 'sponsor_name': 'Uber' };
			let newPrize2 = { prize_id: 34564566, 'prize_title': '5GB Telkom Data Bundle', 'prize_count': 20, 'sponsor_name': 'Telkom' };

			qRush.addPrize(newPrize1);
			qRush.addPrize(newPrize2);
			assert.deepEqual([newPrize1, newPrize2], qRush.getPrizes());

			qRush.removePrize(newPrize1);
			assert.deepEqual([newPrize2], qRush.getPrizes());
		});

		it('should set a list of prizes', function () {
			let newPrize1 = { prize_id: 34564565, 'prize_title': 'R200 Uber Voucher', 'prize_count': 10, 'sponsor_name': 'Uber' };
			let newPrize2 = { prize_id: 34564566, 'prize_title': '5GB Telkom Data Bundle', 'prize_count': 20, 'sponsor_name': 'Telkom' };
			qRush.addPrize(newPrize1);
			qRush.addPrize(newPrize2);
			assert.deepEqual([newPrize1, newPrize2], qRush.getPrizes());
			let prizeList = [newPrize1, newPrize2];

			console.log(prizeList)
			qRush.removePrize(newPrize1);
			qRush.removePrize(newPrize2);
			assert.deepEqual([], qRush.getPrizes());
			
			qRush.setPrizes(prizeList);
			assert.deepEqual([newPrize1, newPrize2], qRush.getPrizes());
		});
	});

	describe('getMapMarkerLocations', function () {
		it('should return a list of locations of markers for given list', function () {
			let listOfChests = [
				{ 'chest_id': 21425108, 'location': '-33.92804417019321, 18.423937019115005', 'prizes': '' },
				{ 'chest_id': 32753124, 'location': '-33.927047504280935, 18.45548536441777', 'prizes': '' }
			];

			let listOfLocations = [
				'-33.92804417019321, 18.423937019115005',
				'-33.927047504280935, 18.45548536441777'
			];
			assert.deepEqual(listOfLocations, qRush.getMapMarkerLocations(listOfChests));
		});

		it('should return a list of locations of markers for given list', function () {
			let listOfChests = [
				{ 'chest_id': 53903426, 'location': '-33.91786995338542, 18.422654047132987', 'prizes': '' },
				{ 'chest_id': 24982562, 'location': '-33.92938377623288, 18.41104307597263', 'prizes': '' },
				{ 'chest_id': 33456780, 'location': '-33.92804417019321, 18.423937019115005', 'prizes': '' }
			];

			let listOfLocations = [
				'-33.91786995338542, 18.422654047132987',
				'-33.92938377623288, 18.41104307597263',
				'-33.92804417019321, 18.423937019115005'
			];
			assert.deepEqual(listOfLocations, qRush.getMapMarkerLocations(listOfChests));
		});
	});

	describe('collectPrize', function () {
		it('should decrement prize_count from collected prize', function () {
			let prizeList = [
				{ prize_id: 34564565, 'prize_title': 'R200 Uber Voucher', 'prize_count': 10, 'sponsor_name': 'Uber' },
				{ prize_id: 34564566, 'prize_title': '5GB Telkom Data Bundle', 'prize_count': 20, 'sponsor_name': 'Telkom' }
			];

			qRush.collectPrize(34564565);

			let newPrizeList = [
				{ prize_id: 34564565, 'prize_title': 'R200 Uber Voucher', 'prize_count': 9, 'sponsor_name': 'Uber' },
				{ prize_id: 34564566, 'prize_title': '5GB Telkom Data Bundle', 'prize_count': 20, 'sponsor_name': 'Telkom' }
			];

			assert.deepEqual(newPrizeList, qRush.getPrizes());
		});

		it('should remove prize if prize-count reaches 0', function () {
			let prizeList = [
				{ prize_id: 34564565, 'prize_title': 'R200 Uber Voucher', 'prize_count': 1, 'sponsor_name': 'Uber' },
				{ prize_id: 34564566, 'prize_title': '5GB Telkom Data Bundle', 'prize_count': 2, 'sponsor_name': 'Telkom' }
			];

			qRush.collectPrize(34564565);

			let newPrizeList = [
				{ prize_id: 34564566, 'prize_title': '5GB Telkom Data Bundle', 'prize_count': 2, 'sponsor_name': 'Telkom' }
			];

			assert.deepEqual(newPrizeList, qRush.getPrizes());
		});
	});
});
