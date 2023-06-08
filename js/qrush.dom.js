// Factory function instance
const qRushInstance = QRushFactory(
	JSON.parse(localStorage.getItem('chests')) || [],
	JSON.parse(localStorage.getItem('prizes')) || [],
	JSON.parse(localStorage.getItem('sponsors')) || [],
	JSON.parse(localStorage.getItem('knownChests')) || [],
	JSON.parse(localStorage.getItem('claimedPrizes')) || []
);

// Dummy information for testing starts here //////////////////////////////////
let dummyChests = [
	{ 'chest_id': 1000, 'prize_id': 2000, 'location': '32.546, -18.456' },
	{ 'chest_id': 1001, 'prize_id': 2001, 'location': '32.546, -18.456' },
	{ 'chest_id': 1002, 'prize_id': 0, 'location': '32.546, -18.456' }
];
let dummyPrizes = [
	{ 'prize_id': 2000, 'sponsor_id': 3000, 'prize_title': 'R100 Uber Voucher', 'count': 100 },
	{ 'prize_id': 2001, 'sponsor_id': 3001, 'prize_title': '5GB Telkom Data Bundle', 'count': 100 },
	{ 'prize_id': 2002, 'sponsor_id': 3002, 'prize_title': '1 Ster-Kinekor Ticket', 'count': 100 }
];
let dummySponsors = [
	{ 'sponsor_id': 3000, 'sponsor_name': 'Uber', 'location': '32.546, -18.456', 'email': 'usama68@gmail.com' },
	{ 'sponsor_id': 3001, 'sponsor_name': 'Ster-Kinekor', 'location': '32.546, -18.456', 'email': 'stefanygretzinger@cinema.com' },
	{ 'sponsor_id': 3002, 'sponsor_name': 'Telkom', 'location': '32.546, -18.456', 'email': 'tamlynr@telkom.com' }
];
let dummyKnownChests = [1001, 1002];
let dummyClaimedPrizes = [2001];
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
if (qRushInstance.getKnownChests() === []) {
	// localStorage.setItem('claimedPrizes', []);
	localStorage.setItem('claimedPrizes', dummyClaimedPrizes);
}

// DOM CODE BEGINS HERE

// INDEX PAGE

// SPONSOR PAGE