
document.getElementById("caloriesForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const exercise = document.getElementById("exercises").value;
    const duration = document.getElementById("duration").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const age = document.getElementById("age").value;
    const result = document.getElementById("caloriesResult");
    const imgDisplay = document.getElementById("exerciseImage");

    try {
      const url = "https://trackapi.nutritionix.com/v2/natural/exercise";
      const headers = {
        "Content-Type": "application/json",
        "x-app-id": "5515ff3d",
        "x-app-key": "e81732775d09b946c86ab5a9b5d995ce",
      };

      const bodyData = {
        query: `${exercise} for ${duration}`,
        weight_kg: weight,
        height_cm: height,
        age: age,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(bodyData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const calories = data.exercises[0].nf_calories;
      const workout = data.exercises[0].name;
      console.log(calories);
      console.log(workout);
      result.innerHTML = `According to your personal data, engaging in ${workout} for ${duration} minutes is estimated to burn approximately ${calories} calories.`;
      imgDisplay.setAttribute("src", "assets/imgs/about5.jpg");
      document.getElementById("results").hidden = false;
      document.getElementById("hidden-container").hidden = true;
      document.getElementById("warning").hidden = true;
    } catch (error) {
      document.getElementById("warning").hidden = false;
      console.error("Error: ", error);
    }
  });

document.getElementById("reset-button").addEventListener("click", () => {
  document.getElementById("caloriesForm").reset();
  document.getElementById("results").hidden = true;
  document.getElementById("hidden-container").hidden = false;
});


//=================Navbar===============//
const body = document.querySelector('body')
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.navlist');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');

menuBtn.addEventListener('click', () => {
  menu.classList.add('active');
  menuBtn.classList.add('hide');
  body.classList.add('disabledScroll');
})

cancelBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  menuBtn.classList.remove('hide');
  body.classList.remove('disabledScroll')
})

window.addEventListener('scroll', () => {
  this.scrollY > 20? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
})



//=================TeamMembers functions==========//

const ShowMoreBtn = document.getElementById("show_more");

ShowMoreBtn.addEventListener("click", showMoreHandler);

function showMoreHandler() {
  const ToDisappearElement = document.getElementById("to_disappear");
  if (ShowMoreBtn.textContent === "Show More") {
    ToDisappearElement.style.display = "block";
    ShowMoreBtn.textContent = "Show Less";
  } else {
    ToDisappearElement.style.display = "none";
    ShowMoreBtn.textContent = "Show More";
  }
}

const ShowMoreBtn2 = document.getElementById("show_more2");

ShowMoreBtn2.addEventListener("click", showMoreHandler2);

function showMoreHandler2() {
  const ToDisappearElement2 = document.getElementById("to_disappear2");
  if (ShowMoreBtn2.textContent === "Show More") {
    ToDisappearElement2.style.display = "block";
    ShowMoreBtn2.textContent = "Show Less";
  } else {
    ToDisappearElement2.style.display = "none";
    ShowMoreBtn2.textContent = "Show More";
  }
}

const ShowMoreBtn3 = document.getElementById("show_more3");

ShowMoreBtn3.addEventListener("click", showMoreHandler3);

function showMoreHandler3() {
  const ToDisappearElement3 = document.getElementById("to_disappear3");
  if (ShowMoreBtn3.textContent === "Show More") {
    ToDisappearElement3.style.display = "block";
    ShowMoreBtn3.textContent = "Show Less";
  } else {
    ToDisappearElement3.style.display = "none";
    ShowMoreBtn3.textContent = "Show More";
  }
}

const ShowMoreBtn4 = document.getElementById("show_more4");

ShowMoreBtn4.addEventListener("click", showMoreHandler4);

function showMoreHandler4() {
  const ToDisappearElement4 = document.getElementById("to_disappear4");
  if (ShowMoreBtn4.textContent === "Show More") {
    ToDisappearElement4.style.display = "block";
    ShowMoreBtn4.textContent = "Show Less";
  } else {
    ToDisappearElement4.style.display = "none";
    ShowMoreBtn4.textContent = "Show More";
  }
}

const ShowMoreBtn5 = document.getElementById("show_more5");

ShowMoreBtn5.addEventListener("click", showMoreHandler5);

function showMoreHandler5() {
  const ToDisappearElement5 = document.getElementById("to_disappear5");
  if (ShowMoreBtn5.textContent === "Show More") {
    ToDisappearElement5.style.display = "block";
    ShowMoreBtn5.textContent = "Show Less";
  } else {
    ToDisappearElement5.style.display = "none";
    ShowMoreBtn5.textContent = "Show More";
  }
}

const ShowMoreBtn6 = document.getElementById("show_more6");

ShowMoreBtn6.addEventListener("click", showMoreHandler6);

function showMoreHandler6() {
  const ToDisappearElement6 = document.getElementById("to_disappear6");
  if (ShowMoreBtn6.textContent === "Show More") {
    ToDisappearElement6.style.display = "block";
    ShowMoreBtn6.textContent = "Show Less";
  } else {
    ToDisappearElement6.style.display = "none";
    ShowMoreBtn6.textContent = "Show More";
  }
}

const ShowMoreBtn7 = document.getElementById("show_more7");

ShowMoreBtn7.addEventListener("click", showMoreHandler7);

function showMoreHandler7() {
  const ToDisappearElement7 = document.getElementById("to_disappear7");
  if (ShowMoreBtn7.textContent === "Show More") {
    ToDisappearElement7.style.display = "block";
    ShowMoreBtn7.textContent = "Show Less";
  } else {
    ToDisappearElement7.style.display = "none";
    ShowMoreBtn7.textContent = "Show More";
  }
}

const ShowMoreBtn8 = document.getElementById("show_more8");

ShowMoreBtn8.addEventListener("click", showMoreHandler8);

function showMoreHandler8() {
  const ToDisappearElement8 = document.getElementById("to_disappear8");
  if (ShowMoreBtn8.textContent === "Show More") {
    ToDisappearElement8.style.display = "block";
    ShowMoreBtn8.textContent = "Show Less";
  } else {
    ToDisappearElement8.style.display = "none";
    ShowMoreBtn8.textContent = "Show More";
  }
}

// const ShowMoreBtn9 = document.getElementById("show_more9");

// ShowMoreBtn9.addEventListener("click", showMoreHandler9);

// function showMoreHandler9() {
//   const ToDisappearElement9 = document.getElementById("to_disappear9");
//   if (ShowMoreBtn9.textContent === "Show More") {
//     ToDisappearElement9.style.display = "block";
//     ShowMoreBtn9.textContent = "Show Less";
//   } else {
//     ToDisappearElement9.style.display = "none";
//     ShowMoreBtn9.textContent = "Show More";
//   }
// }

// ======================Contact Area Functions ============

const enquireButton = Array.from(
  document.getElementsByClassName("enquire_button")
);

enquireButton[0].addEventListener("click", enquireShowForm);

// =============================CONTACT FORM AREA===================================================

function enquireShowForm() {
  var x = document.getElementById("contact-us");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// IN the form class-'help';
// <!-- function hideLocationConsultationGender(){
// const selectValueElement = document
// if(value === "press_enquiries"){
// Location : display - hidden;
// Consultation : display - hidden;
// Gender : display - hidden;
//  : display - hidden;
// }
// } -->
