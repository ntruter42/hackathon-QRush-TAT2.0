describe('The QRush App factory function', function () {
	let qRush;

	beforeEach(function () {
		qRush = QRushFactory();
	});

	describe('addChest, setChests, getChests', function () {
		it('should set and get the treasure chests', function () {

			let dummyChests = [];

			qRush.setChests(dummyChests);
			assert.deepEqual([], qRush.getChests());
		});

		it('should set and get the treasure chests', function () {

			let dummyChests = [
				{ 'chest_id': 1000, 'prize_id': 2000, 'location': '32.546, -18.456' },
				{ 'chest_id': 1001, 'prize_id': 2001, 'location': '32.546, -18.456' },
				{ 'chest_id': 1002, 'prize_id': 0, 'location': '32.546, -18.456' }
			];

			qRush.setChests(dummyChests);
			assert.deepEqual(dummyChests, qRush.getChests());
		});

		it('should add a chest to list of all chests', function () {

			let dummyChests = [
				{ 'chest_id': 1000, 'prize_id': 2000, 'location': '32.546, -18.456' },
				{ 'chest_id': 1001, 'prize_id': 2001, 'location': '32.546, -18.456' },
				{ 'chest_id': 1002, 'prize_id': 0, 'location': '32.546, -18.456' }
			];

			qRush.setChests(dummyChests);
			assert.deepEqual(dummyChests, qRush.getChests());

			qRush.addChest('-33.92804417019321, 18.423937019115005');

			dummyChests = [
				{ 'chest_id': 1000, 'prize_id': 2000, 'location': '32.546, -18.456' },
				{ 'chest_id': 1001, 'prize_id': 2001, 'location': '32.546, -18.456' },
				{ 'chest_id': 1002, 'prize_id': 0, 'location': '32.546, -18.456' },
				{'chest_id' : 1003, 'prize_id' : 0, 'location' : '-33.92804417019321, 18.423937019115005'}
			];
			
			assert.deepEqual(dummyChests, qRush.getChests());
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
			let dummyChests = [
				{ 'chest_id': 1000, 'prize_id': 2000, 'location': '32.546, -18.456' },
				{ 'chest_id': 1001, 'prize_id': 2001, 'location': '32.546, -18.456' },
				{ 'chest_id': 1002, 'prize_id': 0, 'location': '32.546, -18.456' }
			];
			
			qRush.setChests(dummyChests);
			assert.deepEqual(dummyChests, qRush.getChests());

			let dummyKnownChests = [1001, 1002];

			qRush.setKnownChests(dummyKnownChests);
			assert.deepEqual(dummyKnownChests, qRush.getKnownChests());

			let newChest_id = 33456780;
			qRush.discoverChest(newChest_id);

			assert.deepEqual(dummyKnownChests, qRush.getKnownChests());
		});

		it('should add multiple discovered chests to known chests', function () {
			let dummyChests = [
				{ 'chest_id': 1000, 'prize_id': 2000, 'location': '32.546, -18.456' },
				{ 'chest_id': 1001, 'prize_id': 2001, 'location': '32.546, -18.456' },
				{ 'chest_id': 1002, 'prize_id': 0, 'location': '32.546, -18.456' }
			];

			qRush.setChests(dummyChests);
			assert.deepEqual(dummyChests, qRush.getChests());

			let scannedChest = 1000;
			// let newChest2 = { 'chest_id': 1007, 'prize_id': 2009, 'location': '32.645, -18.956' };

			qRush.discoverChest(scannedChest);
			// qRush.discoverChest(newChest2['chest_id']);

			assert.deepEqual([1001, 1002, 1000], qRush.getKnownChests());
		});
	});

	describe('addSponsor, getSponsor', function () {
		it('should return a registered company named Shoprite.', function () {

			let currentSponsors = [
				{ 'sponsor_id': 3000, 'sponsor_name': 'Uber', 'location': '32.546, -18.456', 'email': 'usama68@gmail.com' },
				{ 'sponsor_id': 3001, 'sponsor_name': 'Ster-Kinekor', 'location': '32.546, -18.456', 'email': 'stefanygretzinger@cinema.com' },
				{ 'sponsor_id': 3002, 'sponsor_name': 'Telkom', 'location': '32.546, -18.456', 'email': 'tamlynr@telkom.com' }
			];

			qRush.addSponsor('Shoprite', '32.546, -18.456', 'shoprite@gmail.com');

			currentSponsors = [
				{ 'sponsor_id': 3000, 'sponsor_name': 'Uber', 'location': '32.546, -18.456', 'email': 'usama68@gmail.com' },
				{ 'sponsor_id': 3001, 'sponsor_name': 'Ster-Kinekor', 'location': '32.546, -18.456', 'email': 'stefanygretzinger@cinema.com' },
				{ 'sponsor_id': 3002, 'sponsor_name': 'Telkom', 'location': '32.546, -18.456', 'email': 'tamlynr@telkom.com' },
				{'sponsor_id': 3003, 'sponsor_name': 'Shoprite', 'location': '32.546, -18.456', 'email': 'shoprite@gmail.com'}
			];

			assert.deepEqual(currentSponsors, qRush.getSponsors());
		})

		it('should return a registered company named Woolworths and Shooprite.', function () {
			let currentSponsors = [
				{ 'sponsor_id': 3000, 'sponsor_name': 'Uber', 'location': '32.546, -18.456', 'email': 'usama68@gmail.com' },
				{ 'sponsor_id': 3001, 'sponsor_name': 'Ster-Kinekor', 'location': '32.546, -18.456', 'email': 'stefanygretzinger@cinema.com' },
				{ 'sponsor_id': 3002, 'sponsor_name': 'Telkom', 'location': '32.546, -18.456', 'email': 'tamlynr@telkom.com' }
			];

			qRush.addSponsor('Woolworths', '32.546, -18.456', 'woolies@gmail.com');

			currentSponsors = [
				{ 'sponsor_id': 3000, 'sponsor_name': 'Uber', 'location': '32.546, -18.456', 'email': 'usama68@gmail.com' },
				{ 'sponsor_id': 3001, 'sponsor_name': 'Ster-Kinekor', 'location': '32.546, -18.456', 'email': 'stefanygretzinger@cinema.com' },
				{ 'sponsor_id': 3002, 'sponsor_name': 'Telkom', 'location': '32.546, -18.456', 'email': 'tamlynr@telkom.com' },
				{ 'sponsor_id': 3003, 'sponsor_name': 'Woolworths', 'location': '32.546, -18.456', 'email': 'woolies@gmail.com' }
			];
			
			assert.deepEqual(currentSponsors, qRush.getSponsors());
		})
		
	});

	describe('addPrize, removePrize, setPrizes, getPrizes', function () {
		it('should add a prize to list of prizes', function () {
			let dummyPrizes = [
				{ 'prize_id': 2000, 'sponsor_id': 3000, 'prize_title': 'R100 Uber Voucher', 'count': 100 },
				{ 'prize_id': 2001, 'sponsor_id': 3001, 'prize_title': '5GB Telkom Data Bundle', 'count': 100 },
				{ 'prize_id': 2002, 'sponsor_id': 3002, 'prize_title': '1 Ster-Kinekor Ticket', 'count': 100 }
			];

			qRush.addPrize(3003, '20% off food lovers meal', 100);

			dummyPrizes = [
				{ 'prize_id': 2000, 'sponsor_id': 3000, 'prize_title': 'R100 Uber Voucher', 'count': 100 },
				{ 'prize_id': 2001, 'sponsor_id': 3001, 'prize_title': '5GB Telkom Data Bundle', 'count': 100 },
				{ 'prize_id': 2002, 'sponsor_id': 3002, 'prize_title': '1 Ster-Kinekor Ticket', 'count': 100 },
				{ 'prize_id': 2003, 'sponsor_id': 3003, 'prize_title': '20% off food lovers meal', 'count': 100 }
			];

			assert.deepEqual(dummyPrizes, qRush.getPrizes());
		});

		it('should add multiple prizes to list of prizes', function () {

			let currentPrizes = [
				{ 'prize_id': 2000, 'sponsor_id': 3000, 'prize_title': 'R100 Uber Voucher', 'count': 100 },
				{ 'prize_id': 2001, 'sponsor_id': 3001, 'prize_title': '5GB Telkom Data Bundle', 'count': 100 },
				{ 'prize_id': 2002, 'sponsor_id': 3002, 'prize_title': '1 Ster-Kinekor Ticket', 'count': 100 },
				{ 'prize_id': 2003, 'sponsor_id': 3003, 'prize_title': '20% off food lovers meal', 'count': 100 }
			];

			qRush.addPrize(3004, 'R200 Uber Voucher', 10);
			qRush.addPrize(3005, '5GB Telkom Data Bundle', 20);

			currentPrizes = [
				{ 'prize_id': 2000, 'sponsor_id': 3000, 'prize_title': 'R100 Uber Voucher', 'count': 100 },
				{ 'prize_id': 2001, 'sponsor_id': 3001, 'prize_title': '5GB Telkom Data Bundle', 'count': 100 },
				{ 'prize_id': 2002, 'sponsor_id': 3002, 'prize_title': '1 Ster-Kinekor Ticket', 'count': 100 },
				{ 'prize_id': 2003, 'sponsor_id': 3004, 'prize_title': 'R200 Uber Voucher', 'count': 10 },
				{ 'prize_id': 2004, 'sponsor_id': 3005, 'prize_title': '5GB Telkom Data Bundle', 'count': 20 }
			];

			assert.deepEqual(currentPrizes, qRush.getPrizes());
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
