// Note - to see rotating image uncomment "rotating img trial" code

// to make navbar size change on scroll

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
    ) {
        document.getElementById("navbar").style.height = "3.4vw";
        document.getElementById("logo1").style.height = "3.8vw";
    } else {
        document.getElementById("navbar").style.height = "4vw";
        document.getElementById("logo1").style.height = "4.5vw";
    }
}

// to make ham menu responsive

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

// js to change content of types of ambulance detail box

// making an array of objects that contain all ambulance data

let ambulancesList = [
    {
        name: "ALS",
        fullName: "Advance Life Support",
        detail: `Large vehicle <br>
        Advance Life Support is used for critical
        patients`,
        features: [
            "Defibrillator",
            "Medicines",
            "Stretcher",
            "Nurse",
            "Bandages",
            "Oxygen Supply",
        ],
    },
    {
        name: "BLS",
        fullName: "Basic Life Support",
        detail: `Basic vehicle <br>
        Basic Life Support is used to provide Basic support`,
        features: [
            "Medicines",
            "Stretcher",
            "Nurse",
            "Bandages",
            "Oxygen Supply",
            "Defibrillator",
        ],
    },
    {
        name: "PTS",
        fullName: "Patient Transport Service",
        detail: `Medium vehicle <br>
        Patient Transport Service is used for transporting patients`,
        features: [
            "Stretcher",
            "Nurse",
            "Bandages",
            "Oxygen Supply",
            "Defibrillator",
            "Medicines",
        ],
    },
    {
        name: "MA",
        fullName: "Medium vehicle",
        detail: `Medium vehicle <br>
        MA is used for transporting patients`,
        features: [
            "Nurse",
            "Bandages",
            "Oxygen Supply",
            "Defibrillator",
            "Medicines",
            "Stretcher",
        ],
    },

    // rotating img trial

    // {
    //     name: "PA",
    //     fullName: "Medium vehicle",
    //     detail: `Medium vehicle <br>
    //   MA is used for transporting patients`,
    //     features: [
    //         "Nurse",
    //         "Bandages",
    //         "Oxygen Supply",
    //         "Defibrillator",
    //         "Medicines",
    //         "Stretcher",
    //     ],
    // },
];

// converting data to html and adding it to js-ambulance-list class element

let ambulanceHTML = "";

// to convert it to html

ambulancesList.forEach((ambulance) => {
    ambulanceHTML += `<figure class="ambulances-img js-ambulance" data-name="${ambulance.name}" >
  <abbr title="${ambulance.name}">
    <img src="images/ambulance/${ambulance.name}.png" alt="${ambulance.name} Ambulance image" class="ambulance-img ${ambulance.name}-ambulance-img">
  </abbr>
  <abbr title="${ambulance.name}">
    <figcaption class="ambulance-img-figcaption">${ambulance.name}</figcaption>
  </abbr>
  </figure>
  `;
});

// to display in on webpage
document.querySelector(".js-ambulance-list").innerHTML = ambulanceHTML;

document.querySelector(".ALS-ambulance-img").style.background =
    "linear-gradient(135deg, #0092ee 0%, #203381 100%)";

// adding click functionality to all ambulance

document.querySelectorAll(".js-ambulance").forEach((ambulance) => {
    ambulance.addEventListener("click", () => {
        // js that change background color of selected ambulance by setting bgc of selected ambulance and removing from other
        ambulancesList.forEach((ambulance) => {
            // creating a name variable that store class name from which we need to remove bgc
            const name = "." + ambulance.name + "-ambulance-img";
            document.querySelector(name).style.background = "none";

            // rotating img trial

            // const image = "." + ambulance.name + "-ambulance-img";
            // document.querySelector(
            //     image
            // ).src = `images/ambulance/${ambulance.name}.png`;
        });

        // creating a name variable that store class name from which we need to add bgc
        const name = "." + `${ambulance.dataset.name}` + "-ambulance-img";
        document.querySelector(name).style.background =
            "linear-gradient(135deg, #0092ee 0%, #203381 100%)";

        // rotating img trial

        // const image = "." + `${ambulance.dataset.name}` + "-ambulance-img";
        // console.log(image);
        // document.querySelector(
        //     image
        // ).src = `images/ambulance/${ambulance.dataset.name}.gif`;

        ambulancesList.forEach((ambulances) => {
            // checking which ambulance is selected
            if (ambulances.name === ambulance.dataset.name) {
                // creating html of selected ambulance

                // creating html of features of selected ambulance

                let featuresHTML = "";
                ambulances.features.forEach((feature) => {
                    featuresHTML += `<abbr title="Ambulance Features">
                <figure class="selected-ambulance-features">
                  <img src="images/ambulance/features/${
                      ambulances.name
                  }/FEATURES ${
                        ambulances.features.indexOf(feature) + 1
                    }.png" alt="" class="selected-ambulance-feature-img">
                  <p class="selected-ambulance-feature-p">${feature}</p>
                </figure>
              </abbr>`;
                });

                // adding ambulance detail to ambulance-detail class
                document.querySelector(".ambulance-detail").innerHTML = `
                <article>
        <!-- full name of ambulance -->
        <h1 class="ambulance-detail-h1">${ambulances.fullName}</h1>
        <!-- inner and outer images -->
        <div class="selected-ambulance-img">
          <figure class="selected-ambulance-outer-figure">
            <img src="images/ambulance/${ambulances.name}.png" alt="" class="selected-ambulance-outer-img">
          </figure>
          <figure class="selected-ambulance-inner-figure">
            <img src="images/ambulance/inner-${ambulances.name}.png" alt="" class="selected-ambulance-inner-img">
          </figure>
        </div>
        <!-- ambulance detail paragraph -->
        <div class="selected-ambulance-detail">
          <p class="selected-ambulance-detail-p">${ambulances.detail} </p>
        </div>
        
        
        <!-- ambulance features -->
        
        <!-- ambulance feature 1 -->
        <div class="selected-ambulance-features-div">
          
        ${featuresHTML}
        
        </div>
        </article>
                `;
            }
        });
    });
});
