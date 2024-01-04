
let webName = document.querySelector("h1");
let dropDown = document.querySelector("div.options");
let menu = document.querySelector("div.topnav button");
let spanLuke = document.querySelector("div.info span.moreInfo");
let buttonIntroNextPg = document.querySelector("button.introNextPg");
var dropDownOn = false;
let introVal = true;
let projectsVal = false;
let contactsVal = false;
let introLink = document.querySelector("a.intro");
let intro = document.querySelector("div.intro");
let projectsLink = document.querySelector("a.projects");
let projects = document.querySelector("div.project");
let contactsLink = document.querySelector("a.contacts");
let contacts = document.querySelector("div.contacts");
let nextButton = document.querySelector("button.introNextPg");
let prevButton = document.querySelector("button.previous");
let prevBut = document.querySelector("button.previousCont");
let projs = document.querySelectorAll("div.vid video, div.vid img");
let descrip = document.querySelectorAll("span.description");






function detectOrientation() {
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  if ((screenWidth / screenHeight) <= 0.6) {
    // webName.innerText = "R";
    for(let i= 0; i < projs.length; i++){
      projs[i].style.height = "13em";
      descrip[i].style.width = "15em";
    }
    spanLuke.style.fontSize = "1em";
    buttonIntroNextPg.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"

  }
  else {
    // webName.innerText = "Roaminate";
    for(let i= 0; i < projs.length; i++){
      projs[i].style.height = "20em";
      descrip[i].style.width = "24em";
    }
    spanLuke.style.fontSize = "1.2em";
  }
}

// Call the function on page load and when the orientation changes
detectOrientation();

// Listen for the orientation change event
window.addEventListener("resize", detectOrientation);
menu.onclick = function() {
  if (dropDownOn == false) {
    dropDown.style.display = "inline-block";
    dropDown.style.transition = "10s";
    dropDownOn = true;
    // console.log("dropdownon was FALSE");
  }
  else {
    dropDown.style.display = "none";
    dropDownOn = false;
    // console.log("dropdownon was TRUE");

  }
}

nextButton.onclick = function() {
  console.log(introVal + " " + projectsVal + " " + contactsVal);
  if (projectsVal == true) {
    projectsVal = false;
    contactsVal = true;
    projects.style.display = "none";
    contacts.style.display = "flex";
    nextButton.style.display = "none";//
  }
  if (introVal == true) {
    introVal = false;
    projectsVal = true;
    projects.style.display = "flex";
    intro.style.display = "none";
  }

}


projectsLink.onclick = function() {
  projectsVal = true;
  introVal = false;
  contactsVal = false;
  intro.style.display = "none";
  projects.style.display = "flex";
  contacts.style.display = "none";
  nextButton.style.display = "inline-block";//


}

prevButton.onclick = function() {
  console.log(introVal + " " + projectsVal + " " + contactsVal);
  if (projectsVal == true) {
    projectsVal = false;
    contactsVal = false;
    introVal = true;
    projects.style.display = "none";
    intro.style.display = "block";
  }

  // if(contactsVal == true){
  //   // console.log("Dit it work");
  //   projectsVal = true;
  //   contactsVal = false;
  //   introVal = false;
  //   projects.style.display = "none";
  //   contacts.style.display = "block";
  // }
}

contactsLink.onclick = function() {
  projectsVal = false;
  introVal = false;
  contactsVal = true;
  intro.style.display = "none";
  projects.style.display = "none";
  contacts.style.display = "flex";
  nextButton.style.display = "none";//

}

prevBut.onclick = function() {
  // console.log(introVal + " " + projectsVal + " " + contactsVal);
  // console.log("Is it working")
  if(contactsVal == true){
    projectsVal = true;
    contactsVal = false;
    introVal = false;
    projects.style.display = "flex";
    contacts.style.display = "none";
    nextButton.style.display = "inline-block";//

  }
}
