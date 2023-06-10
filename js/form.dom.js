// dom elements reference
const companyName = document.querySelector(".companyName");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const emailAddress = document.querySelector(".email");
const branchAddress = document.querySelector(".branchAddress");
const rewardTitle = document.querySelector(".rewardTitle");
const rewardCount = document.querySelector("#rewardCount");
const submitBtn = document.querySelector(".submit-button");

// factory function instance
const qRushForm = QRushFactory();

function getDetails() {
	console.log("Hello");
	var geocoder = new google.maps.Geocoder();
	var address = branchAddress.value;
	let fullName = firstName.value;

	geocoder.geocode({ 'address': address }, function (results, status) {

		if (status == google.maps.GeocoderStatus.OK) {
			let latitude = results[0].geometry.location.lat();
			let longitude = results[0].geometry.location.lng();
			qRushForm.addPrize(companyName.value, fullName, emailAddress.value, latitude + ',' + longitude, rewardTitle.value, rewardCount);
		}
	});
}

submitBtn.addEventListener("click", getDetails);