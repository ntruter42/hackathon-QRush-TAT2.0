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
				{ 'chest_id': 21425108, 'location': '-33.92804417019321, 18.423937019115005', 'prizes': ''},
				{ 'chest_id': 32753124, 'location': '-33.927047504280935, 18.45548536441777', 'prizes': ''}
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
			let localStorageChests = [{ 'chest_id': 53903426, 'location': '-33.91786995338542, 18.422654047132987' }, { 'chest_id': 24982562, 'location': '-33.92938377623288, 18.41104307597263' }];
			qRush.setKnownChests(localStorageChests);
			assert.deepEqual(localStorageChests, qRush.getKnownChests());

			let newChest = { 'chest_id': 33456780, 'location': '-33.92804417019321, 18.423937019115005' };
			qRush.discoverChest(newChest);

			localStorageChests = [
				{ 'chest_id': 53903426, 'location': '-33.91786995338542, 18.422654047132987', 'prizes': '' },
				{ 'chest_id': 24982562, 'location': '-33.92938377623288, 18.41104307597263', 'prizes': '' },
				{ 'chest_id': 33456780, 'location': '-33.92804417019321, 18.423937019115005', 'prizes': '' }
			];
			assert.deepEqual(localStorageChests, qRush.getKnownChests());
		});

		it('should add multiple discovered chests to known chests', function () {
			let localStorageChests = [
				{ 'chest_id': 53903426, 'location': '-33.91786995338542, 18.422654047132987', 'prizes': '' },
				{ 'chest_id': 24982562, 'location': '-33.92938377623288, 18.41104307597263', 'prizes': '' }
			];
			qRush.setKnownChests(localStorageChests);
			assert.deepEqual(localStorageChests, qRush.getKnownChests());

			let newChest1 = { 'chest_id': 33456780, 'location': '-33.92804417019321, 18.423937019115005' };
			let newChest2 = { 'chest_id': 53903426, 'location': '-33.91786995338542, 18.422654047132987' };
			qRush.discoverChest(newChest1);
			qRush.discoverChest(newChest2);

			localStorageChests = [
				{ 'chest_id': 53903426, 'location': '-33.91786995338542, 18.422654047132987', 'prizes': '' },
				{ 'chest_id': 24982562, 'location': '-33.92938377623288, 18.41104307597263', 'prizes': '' },
				{ 'chest_id': 33456780, 'location': '-33.92804417019321, 18.423937019115005', 'prizes': '' },
				{ 'chest_id': 53903426, 'location': '-33.91786995338542, 18.422654047132987', 'prizes': '' }
			];
			assert.deepEqual(localStorageChests, qRush.getKnownChests());
		});
	});

	describe('addSponsor, getSponsor', function () {
		it('should return a registered company named Shoprite.', function () {
			let CompanyName = { "companyName": 'Shoprite', "branchAddress": 'Ottery', "Date": '2023/06/6', "Email": 'shoprite@gmail.com' };

			qRush.addSponsor(CompanyName);
			assert.deepEqual([CompanyName], qRush.getSponsors());
		})

		it('should return a registered company named Woolworths.', function () {
			let CompanyName = { "companyName": 'Woolworths', "branchAddress": 'Claremont', "Date": '2023/05/6', "Email": 'woolies@gmail.com' };

			qRush.addSponsor(CompanyName);
			assert.deepEqual([CompanyName], qRush.getSponsors());
		})

		it('should return an error message, 1 or more sections have not been been filled in.', function () {
			let CompanyName = { "companyName": '', "branchAddress": 'Claremont', "Date": '2023/05/6', "Email": '' };

			qRush.addSponsor(CompanyName);
			assert.deepEqual([], qRush.getSponsors());
		})
	});

	describe('addPrize, removePrize, setPrizes, getPrizes', function () {
		it('should add a prize to list of prizes', function () {
			let newPrize = { prize_id: 34564565, 'prize_title': 'R200 Uber Voucher', 'sponsor_name': 'Uber' };

			qRush.addPrize(newPrize);
			assert.equal([newPrize], qRush.getPrizes());
		});

		it('should add multiple prizes to list of prizes', function () {
			let newPrize1 = { prize_id: 34564565, 'prize_title': 'R200 Uber Voucher', 'sponsor_name': 'Uber' };
			let newPrize2 = { prize_id: 34564566, 'prize_title': '5GB Telkom Data Bundle', 'sponsor_name': 'Telkom' };

			qRush.addPrize(newPrize1);
			qRush.addPrize(newPrize2);

			assert.equal([newPrize1, newPrize2], qRush.getPrizes());
		});

		it('should remove a prize from list of prizes', function () {
			let newPrize1 = { prize_id: 34564565, 'prize_title': 'R200 Uber Voucher', 'sponsor_name': 'Uber' };
			let newPrize2 = { prize_id: 34564566, 'prize_title': '5GB Telkom Data Bundle', 'sponsor_name': 'Telkom' };

			qRush.addPrize(newPrize1);
			qRush.addPrize(newPrize2);

			assert.equal([newPrize1, newPrize2], qRush.getPrizes());

			qRush.removePrize(newPrize1);

			assert.equal([newPrize2], qRush.getPrizes());
		});

		it('should set a list of prizes', function () {
			let newPrize1 = { prize_id: 34564565, 'prize_title': 'R200 Uber Voucher', 'sponsor_name': 'Uber' };
			let newPrize2 = { prize_id: 34564566, 'prize_title': '5GB Telkom Data Bundle', 'sponsor_name': 'Telkom' };

			qRush.addPrize(newPrize1);
			qRush.addPrize(newPrize2);

			let prizeList = qRush.getPrizes();

			qRush.removePrize(newPrize1);
			qRush.removePrize(newPrize2);

			assert.equal([], qRush.getPrizes());

			qRush.setPrizes(prizeList);

			assert.equal([newPrize1, newPrize2], qRush.getPrizes());
		});
	});
});
