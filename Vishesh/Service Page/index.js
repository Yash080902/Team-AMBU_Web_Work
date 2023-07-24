// to make navbar size change on scroll

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style.height = "3.4vw";
    document.getElementById("logo1").style.height = "3.8vw";

  } else {
    document.getElementById("navbar").style.height = "4vw";
    document.getElementById("logo1").style.height = "4.5vw";

  }
}


// to make ham menu responsive

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}


// js to change content of types of ambulance detail box

let alsAmbulanceImg = document.querySelector(".ALS-ambulance-img")
let blsAmbulanceImg = document.querySelector(".BLS-ambulance-img")
let ptsAmbulanceImg = document.querySelector(".PTS-ambulance-img")
let maAmbulanceImg = document.querySelector(".MA-ambulance-img")
let ambulanceDetailH1 = document.querySelector(".ambulance-detail-h1")
let selectedAmbulanceOuterImg = document.querySelector(".selected-ambulance-outer-img")
let selectedAmbulanceInnerImg = document.querySelector(".selected-ambulance-inner-img")
let selectedAmbulanceDetailP = document.querySelector(".selected-ambulance-detail-p")
let selectedAmbulanceFeatureImg = document.querySelectorAll(".selected-ambulance-feature-img")
let selectedAmbulanceFeatureP = document.querySelectorAll(".selected-ambulance-feature-p")






alsAmbulanceImg.onclick = () => {
    // changing background
    ptsAmbulanceImg.style.background = "none"
    maAmbulanceImg.style.background = "none"
    blsAmbulanceImg.style.background = "none"
    alsAmbulanceImg.style.background = "linear-gradient(135deg, #0092ee 0%, #203381 100%)"
    ambulanceDetailH1.textContent = "Advance Life Support"
    selectedAmbulanceOuterImg.src = "./images/type of ambulances (ALS).png" 
    selectedAmbulanceInnerImg.src = "./images/TYPES OF AMBULANCE inner ALS 1.png"
    selectedAmbulanceDetailP.textContent = `Large vehicle
    Advance Life Support is used for critical patients`
    selectedAmbulanceFeatureImg[0].src = "./images/FEATURES 1.png"
    selectedAmbulanceFeatureP[0].textContent = "Defibrillator"
    selectedAmbulanceFeatureImg[1].src = "./images/FEATURES 2.png"
    selectedAmbulanceFeatureP[1].textContent = "Medicines"
    selectedAmbulanceFeatureImg[2].src = "./images/FEATURES 3.png"
    selectedAmbulanceFeatureP[2].textContent = "Stretcher"
    selectedAmbulanceFeatureImg[3].src = "./images/FEATURES 4.png"
    selectedAmbulanceFeatureP[3].textContent = "Nurse"
    selectedAmbulanceFeatureImg[4].src = "./images/FEATURES 5.png"
    selectedAmbulanceFeatureP[4].textContent = "Bandages"
    selectedAmbulanceFeatureImg[5].src = "./images/FEATURES 6.png"
    selectedAmbulanceFeatureP[5].textContent = "Oxygen support"





}

blsAmbulanceImg.onclick = () => {
    alsAmbulanceImg.style.background = "none"
    ptsAmbulanceImg.style.background = "none"
    maAmbulanceImg.style.background = "none"
    blsAmbulanceImg.style.background = "linear-gradient(135deg, #0092ee 0%, #203381 100%)"
    ambulanceDetailH1.textContent = "Basic Life Support"
    selectedAmbulanceOuterImg.src = "./images/TYPES OF AMBULANCE (BLS).png" 
    selectedAmbulanceInnerImg.src = "./images/TYPES OF AMBULANCE inner ALS 1.png"
    selectedAmbulanceDetailP.textContent = `Basic vehicle
    Basic Life Support is used to provide Basic support`

    selectedAmbulanceFeatureImg[0].src = "./images/FEATURES 6.png"
    selectedAmbulanceFeatureP[0].textContent = "Oxygen support"
    selectedAmbulanceFeatureImg[1].src = "./images/FEATURES 1.png"
    selectedAmbulanceFeatureP[1].textContent = "Defibrillator"
    selectedAmbulanceFeatureImg[2].src = "./images/FEATURES 2.png"
    selectedAmbulanceFeatureP[2].textContent = "Medicines"
    selectedAmbulanceFeatureImg[3].src = "./images/FEATURES 3.png"
    selectedAmbulanceFeatureP[3].textContent = "Stretcher"
    selectedAmbulanceFeatureImg[4].src = "./images/FEATURES 4.png"
    selectedAmbulanceFeatureP[4].textContent = "Nurse"
    selectedAmbulanceFeatureImg[5].src = "./images/FEATURES 5.png"
    selectedAmbulanceFeatureP[5].textContent = "Bandages"
    





}

ptsAmbulanceImg.onclick = () => {
    alsAmbulanceImg.style.background = "none"
    maAmbulanceImg.style.background = "none"
    blsAmbulanceImg.style.background = "none"
    ptsAmbulanceImg.style.background = "linear-gradient(135deg, #0092ee 0%, #203381 100%)"
    ambulanceDetailH1.textContent = "Patient Transport Service"
    selectedAmbulanceOuterImg.src = "./images/TYPES OF AMBULANCE (PTS).png" 
    selectedAmbulanceInnerImg.src = "./images/TYPES OF AMBULANCE inner ALS 1.png"
    selectedAmbulanceDetailP.textContent = `Medium vehicle
    Patient Transport Service is used for transporting patients`

    selectedAmbulanceFeatureImg[0].src = "./images/FEATURES 5.png"
    selectedAmbulanceFeatureP[0].textContent = "Bandages"
    selectedAmbulanceFeatureImg[1].src = "./images/FEATURES 6.png"
    selectedAmbulanceFeatureP[1].textContent = "Oxygen support"
    selectedAmbulanceFeatureImg[2].src = "./images/FEATURES 1.png"
    selectedAmbulanceFeatureP[2].textContent = "Defibrillator"
    selectedAmbulanceFeatureImg[3].src = "./images/FEATURES 2.png"
    selectedAmbulanceFeatureP[3].textContent = "Medicines"
    selectedAmbulanceFeatureImg[4].src = "./images/FEATURES 3.png"
    selectedAmbulanceFeatureP[4].textContent = "Stretcher"
    selectedAmbulanceFeatureImg[5].src = "./images/FEATURES 4.png"
    selectedAmbulanceFeatureP[5].textContent = "Nurse"
    
    




}

maAmbulanceImg.onclick = () => {
    alsAmbulanceImg.style.background = "none"
    ptsAmbulanceImg.style.background = "none"
    blsAmbulanceImg.style.background = "none"
    maAmbulanceImg.style.background = "linear-gradient(135deg, #0092ee 0%, #203381 100%)"
    ambulanceDetailH1.textContent = "Advance Life Support"
    selectedAmbulanceOuterImg.src = "./images/TYPES_OF_AMBULANCE__MA_.png" 
    selectedAmbulanceInnerImg.src = "./images/TYPES OF AMBULANCE inner ALS 1.png"
    selectedAmbulanceDetailP.textContent = `Medium vehicle` + String.fromCharCode(10) + `MA is used for transporting patients`

    selectedAmbulanceFeatureImg[0].src = "./images/FEATURES 4.png"
    selectedAmbulanceFeatureP[0].textContent = "Nurse"
    selectedAmbulanceFeatureImg[1].src = "./images/FEATURES 5.png"
    selectedAmbulanceFeatureP[1].textContent = "Bandages"
    selectedAmbulanceFeatureImg[2].src = "./images/FEATURES 6.png"
    selectedAmbulanceFeatureP[2].textContent = "Oxygen support"
    selectedAmbulanceFeatureImg[3].src = "./images/FEATURES 1.png"
    selectedAmbulanceFeatureP[3].textContent = "Defibrillator"
    selectedAmbulanceFeatureImg[4].src = "./images/FEATURES 2.png"
    selectedAmbulanceFeatureP[4].textContent = "Medicines"
    selectedAmbulanceFeatureImg[5].src = "./images/FEATURES 3.png"
    selectedAmbulanceFeatureP[5].textContent = "Stretcher"
    



}