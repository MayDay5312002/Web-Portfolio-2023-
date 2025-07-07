
let webName = document.querySelector("h1");
let dropDown = document.querySelector("div.options");
let menu = document.querySelector("div.topnav button");
let spanLuke = document.querySelector("div.info span.moreInfo");
let buttonIntroNextPg = document.querySelector("button.introNextPg");
var dropDownOn = false;
let introVal = true;
let projectsVal = false;
let badgesCertVal = false;
let contactsVal = false;
let introLink = document.querySelector("a.intro");
let intro = document.querySelector("div.intro");
let projectsLink = document.querySelector("a.projects");
let projects = document.querySelector("div.project");
let badgesCertLink = document.querySelector("a.CertBadges");
let badgesCert = document.querySelector("div.CertBadges");
let contactsLink = document.querySelector("a.contacts");
let contacts = document.querySelector("div.contacts");
let nextButton = document.querySelector("button.introNextPg");
let prevButton = document.querySelector("button.previous");
let prevBut = document.querySelector("button.previousCont");
let prevButBC = document.querySelector("button.prevBC");
let projs = document.querySelectorAll("div.vid video, div.vid img");
let descrip = document.querySelectorAll("span.description");
let otherProjsDiv = document.querySelector("div.other-projects");

let signifierOtherProj = 0;
const otherProjsCont = [
                    {"name": "Seli", "link": "https://selii.mooo.com/", "img-name": "Seli.png", "description": ["A web app that posts weekly LinkedIn job listings and helps you track and organize your applied jobs.", "Django, React, Nginx, Scrapy"]},
                    {"name": "Concurrent Socket Server", "link": "https://github.com/MayDay5312002/Concurrent-Server-Socket", 
                      "img-name": "conc.jpg", "description": ["A multithreaded client-server system that allows TCP connection between two machines.", "Java, Linux"]},
                    {"name": "Candy Crash", "link": "https://github.com/MayDay5312002/Candy-Crash", "img-name": "CandyCrash.gif", "description": ["A game featuring a monster character that consumes candies.", "C#, Unity"]},
                    {"name": "Personal Web Portfolio (2022)", "link": "https://mayday5312002.github.io/Portfolio/", "img-name": "port.jpg", "description": ["A website that displays my skills, who I am, and more.", "HTML, CSS, JS"]},
                    {"name": "MayDay Projects", "link": "https://maydayproj.mooo.com", "img-name": "MayDay.jpg", "description": ["This website exhibits some of my school and personal projects.", "HTML, CSS, JS, Flask, Nginx"]},
                  ];






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
  console.log(introVal + " " + projectsVal + " " + badgesCertVal + " " + contactsVal);
  if(badgesCertVal == true){
    badgesCertVal = false;
    contactsVal = true;
    contacts.style.display = "flex";
    badgesCert.style.display = "none";
    nextButton.style.display = "none";//
    
  }
  if (projectsVal == true) {
    projectsVal = false;
    badgesCertVal = true;
    projects.style.display = "none";
    badgesCert.style.display = "flex";

  }
  if (introVal == true) {
    introVal = false;
    projectsVal = true;
    projects.style.display = "flex";
    createOtherProjects();
    badgesCert.style.display = "none";
    intro.style.display = "none";
  }

}


projectsLink.onclick = function() {
  projectsVal = true;
  introVal = false;
  badgesCertVal = false;
  contactsVal = false;
  intro.style.display = "none";
  projects.style.display = "flex";
  createOtherProjects();
  contacts.style.display = "none";
  badgesCert.style.display = "none";
  nextButton.style.display = "inline-block";//


}

prevButton.onclick = function() {
  console.log(introVal + " " + projectsVal + " " + badgesCertVal + " " + contactsVal);
  if (projectsVal == true) {
    projectsVal = false;
    contactsVal = false;
    badgesCertVal = false;
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
  badgesCertVal = false;
  contactsVal = true;
  intro.style.display = "none";
  projects.style.display = "none";
  contacts.style.display = "flex";
  badgesCert.style.display = "none";
  nextButton.style.display = "none";//

}

prevBut.onclick = function() {
  // console.log(introVal + " " + projectsVal + " " + contactsVal);
  // console.log("Is it working")
  if(contactsVal == true){
    projectsVal = false;
    badgesCertVal = true;
    contactsVal = false;
    introVal = false;

    contacts.style.display = "none";
    badgesCert.style.display = "flex";
    nextButton.style.display = "inline-block";//

  }
}

badgesCertLink.onclick = function(){
  projectsVal = false;
  introVal = false;
  badgesCertVal = true;
  contactsVal = false;
  intro.style.display = "none";
  projects.style.display = "none";
  contacts.style.display = "none";
  badgesCert.style.display = "flex";
  nextButton.style.display = "inline-block";//
}

prevButBC.onclick = function() {
  console.log(introVal + " " + projectsVal + " " + badgesCertVal + " " + contactsVal);
  // console.log("Is it working")
  if(badgesCertVal == true){
    projectsVal = true;
    contactsVal = false;
    introVal = false;
    badgesCertVal = false;
    projects.style.display = "flex";
    createOtherProjects();
    badgesCert.style.display = "none";
    // nextButton.style.display = "inline-block";//

  }
}

// Function to create other projects
function createOtherProjects() {
  if (signifierOtherProj === 0) {
    for (let i = 0; i < otherProjsCont.length; i++) {
    // const wrapperDiv = document.createElement('div');
    const projectSpan = document.createElement('span');
    projectSpan.className = 'project';

    const vidDiv = document.createElement('div');
    vidDiv.className = 'vid';

    const imageLink = document.createElement('a');
    imageLink.href = otherProjsCont[i].link;
    imageLink.className = 'image';
    imageLink.target = '_blank';

    const img = document.createElement('img');
    img.src = otherProjsCont[i]['img-name'];
    img.className = 'proj';
    // img.height = 300;
    // img.style.height = "13em";

    imageLink.appendChild(img);
    vidDiv.appendChild(imageLink);

    const titleSpan = document.createElement('span');
    titleSpan.className = 'title';

    const titleLink = document.createElement('a');
    titleLink.href = otherProjsCont[i].link;
    titleLink.target = '_blank';
    titleLink.textContent = otherProjsCont[i].name;

    titleSpan.appendChild(titleLink);
    vidDiv.appendChild(titleSpan);

    projectSpan.appendChild(vidDiv);

    const descSpan = document.createElement('span');
    descSpan.className = 'description';
    descSpan.innerHTML = `${otherProjsCont[i].description[0]}<hr>${otherProjsCont[i].description[1]}`;
    // descSpan.style.width = "15em";

    projectSpan.appendChild(descSpan);
    console.log("Project span created");
    otherProjsDiv.appendChild(projectSpan);
    signifierOtherProj = 1;
    // wrapperDiv.appendChild(projectSpan);
    }
  }
}

