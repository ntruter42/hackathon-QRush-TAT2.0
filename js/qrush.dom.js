// factory function instance
const qRushInstance = QRushFactory(
	JSON.parse(localStorage['chests']) || [],
	JSON.parse(localStorage['prizes']) || [],
	JSON.parse(localStorage['sponsors']) || [],
	JSON.parse(localStorage['knownChests']) || []
);

// Dummy information for testing starts here //////////////////////////////////
let dummyPrizes = [
	{ 'prize_id': 1000, 'sponsor_id': 3000, 'prize_title': 'R100 Uber Voucher' },
	{ 'prize_id': 1001, 'sponsor_id': 3001, 'prize_title': '5GB Telkom Data Bundle' },
	{ 'prize_id': 1002, 'sponsor_id': 3002, 'prize_title': '1 Ster-Kinekor Ticket' }
];
let dummyChests = [
	{ 'chest_id': 2000, 'prize_id': 1000, 'location': '32.546, -18.456' },
	{ 'chest_id': 2001, 'prize_id': 1001, 'location': '32.546, -18.456' },
	{ 'chest_id': 2002, 'prize_id': 1002, 'location': '32.546, -18.456' }
];
let dummySponsors = [
	{ 'sponsor_id': 3000, 'sponsor_name': 'Uber', 'location': '32.546, -18.456', 'email': 'usama68@gmail.com' },
	{ 'sponsor_id': 3001, 'sponsor_name': 'Ster-Kinekor', 'location': '32.546, -18.456', 'email': 'stef123@gmail.com' },
	{ 'sponsor_id': 3002, 'sponsor_name': 'Telkom', 'location': '32.546, -18.456', 'email': 'tammy95@yahoo.com' }
];
let dummyKnownChests = [2001, 2002];
// Dummy information ends here ////////////////////////////////////////////////

if (qRushInstance.getPrizes() === []) {
	// localStorage.setItem('chests', []);
	localStorage.setItem('chests', dummyChests);
}

if (qRushInstance.getChests() === []) {
	// localStorage.setItem('prizes', []);
	localStorage.setItem('prizes', dummyPrizes);
}

if (qRushInstance.getSponsors() === []) {
	// localStorage.setItem('sponsors', []);
	localStorage.setItem('sponsors', dummySponsors);
}

if (qRushInstance.getKnownChests() === []) {
	// localStorage.setItem('knownChests', []);
	localStorage.setItem('knownChests', dummyKnownChests);
}