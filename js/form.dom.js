// dom elements reference
const companyName = document.querySelector(".companyName");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const emailEle = document.querySelector(".email");
const branchAddress = document.querySelector(".branchAddress");
const rewardTitle = document.querySelector(".rewardTitle");
const submitBtn = document.querySelector(".submit-button");

// factory function instance
const qRushForm = QRushFactory();

function getDetails() {

        let fullName = firstName.value + ' ' + lastName.value;
    
    qRushForm.addPrize(companyName.value, fullName, emailEle.value, branchAddress.value, rewardTitle.value);
}

submitBtn.addEventListener("click", getDetails);
