function QRushFactory(chest) {
    // create a global variable for the local storage
    let chestVar = chest || '';
    let sponsors = [];

    function setKnownChests(chest) {
        chestVar = chest;
    }

    function getKnownChests() {
        return chestVar;
    }
    /////////////////////////////////////////function for sponsors
    function addSponsor(sponsorInfo) {
        for (let formInput in sponsorInfo) {
            if (validateForm(sponsorInfo[formInput])) {
                return;
            }
        }
        sponsors.push(sponsorInfo);

    }

    function getSponsors() {
        return sponsors;
    }

    function validateForm(input) {
        if (input === "") {
            return true;
        } else {
            return false;
        }
    }
    /////////////////////////////////////////function for sponsors
    return {
        setKnownChests,
        getKnownChests,
        addSponsor,//function for sponsors
        getSponsors,//function for sponsors
        validateForm
    }
}