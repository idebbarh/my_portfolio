document.getElementsByTagName("body")[0].style.overflowY = "hidden";
document.getElementsByTagName("html")[0].style.overflowY = "hidden";
window.addEventListener("load",()=>{
window.setTimeout(()=>{
document.getElementsByTagName("body")[0].style.overflowY = "visible";
document.getElementsByTagName("html")[0].style.overflowY = "visible";
let mobileNavBar = document.getElementById("mobile-nav-bar");
let mobileNavBarOverlay = document.getElementById("mobile-nav-bar-overlay");
let closeMobileNavBarBtn = document.getElementById("close-mobile-nave-bar-btn");
let openMobileNavBar = document.getElementById("open-mobile-nave-bar-btn");
let allWebsiteContents = document.getElementById("all-website-contents");
let allNavMobilNavBarItems = document.querySelectorAll("#mobile-nav-bar .links a");
openMobileNavBar.addEventListener("click", () => {
  mobileNavBarOverlay.style.display = "block";
  window.setTimeout(() => {
    mobileNavBarOverlay.style.opacity = "1";
    mobileNavBar.style.left = "0";
    allWebsiteContents.style.left = "280px";
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    document.getElementsByTagName("html")[0].style.overflowY = "hidden";
  }, 300);
  window.setTimeout(()=>{
    for(let i = 0 ; i < allNavMobilNavBarItems.length ; i++){
      window.setTimeout(()=>{
      allNavMobilNavBarItems[i].style.opacity = "1";
      allNavMobilNavBarItems[i].style.bottom = "0";
      },300*i)
  }
  },600)

});
function closeMobileNavBar() {
  mobileNavBar.style.left = "-280px";
  mobileNavBarOverlay.style.opacity = "0";
  allWebsiteContents.style.left = "0";
  document.getElementsByTagName("body")[0].style.overflowY = "visible";
  document.getElementsByTagName("html")[0].style.overflowY = "visible";
  window.setTimeout(() => {
    mobileNavBarOverlay.style.display = "none";
  }, 600);
  window.setTimeout(()=>{
    for(let i = 0 ; i < allNavMobilNavBarItems.length ; i++){
      allNavMobilNavBarItems[i].style.opacity = "0";
      allNavMobilNavBarItems[i].style.bottom = "20px";
  }
  },600)
}
closeMobileNavBarBtn.addEventListener("click", closeMobileNavBar);
mobileNavBarOverlay.addEventListener("click", closeMobileNavBar);
let fixedHeaderContainer = document.querySelector(".fixed-container");
window.addEventListener("scroll",()=>{
  if(window.matchMedia("(min-width:993px)").matches){
    if (this.oldScroll < this.scrollY) {
      fixedHeaderContainer.style.top = "-82px";
    } else if(this.oldScroll > this.scrollY){
      fixedHeaderContainer.style.top = "0";
    }
  }else{
    fixedHeaderContainer.style.top = "0";
  }
  this.oldScroll = this.scrollY
})
let boxOneCode =
  "// My self introductionName {First name: Ismail,Last name: Debbarh,}";
window.setTimeout(() => {
  for (let i = 0; i < boxOneCode.length; i++) {
    window.setTimeout(() => {
      if (i <= 22) {
        document.querySelector("#box-one #code-area-one .comment").innerHTML +=
          boxOneCode[i];
      } else if (i <= 27) {
        if (i === 23) {
          document.querySelector(
            "#box-one #code-area-one .line-one .object-name"
          ).innerHTML += "<br>";
        }
        document.querySelector(
          "#box-one #code-area-one .line-one .object-name"
        ).innerHTML += boxOneCode[i];
      } else if (i === 28) {
        document.querySelector(
          "#box-one #code-area-one .line-one .bracket"
        ).innerHTML += boxOneCode[i];
      } else if (i <= 40) {
        if (i === 29) {
          document.querySelector(
            "#box-one #code-area-one .line-two .key"
          ).innerHTML += "<br>";
          document.querySelector(
            "#box-one #code-area-one .line-two .key"
          ).innerHTML += "&nbsp;&nbsp;&nbsp;";
        }
        document.querySelector(
          "#box-one #code-area-one .line-two .key"
        ).innerHTML += boxOneCode[i];
      } else if (i <= 47) {
        document.querySelector(
          "#box-one #code-area-one .line-two .value"
        ).innerHTML += boxOneCode[i];
      } else if (i <= 58) {
        if (i === 48) {
          document.querySelector(
            "#box-one #code-area-one .line-three .key"
          ).innerHTML += "<br>";
          document.querySelector(
            "#box-one #code-area-one .line-three .key"
          ).innerHTML += "&nbsp;&nbsp;&nbsp;";
        }
        document.querySelector(
          "#box-one #code-area-one .line-three .key"
        ).innerHTML += boxOneCode[i];
      } else if (i <= 66) {
        document.querySelector(
          "#box-one #code-area-one .line-three .value"
        ).innerHTML += boxOneCode[i];
      } else {
        document.querySelector(
          "#box-one #code-area-one .line-four .bracket"
        ).innerHTML += "<br>";
        document.querySelector(
          "#box-one #code-area-one .line-four .bracket"
        ).innerHTML += boxOneCode[i];
      }
    }, 80 * i);
  }
}, 1300);

let boxTwoCode =
  "What I Do {Profession: Developer,Languages: [HTML,CSS,JS,Python],Specialty: Front-End,}";
window.setTimeout(() => {
  for (let i = 0; i < boxTwoCode.length; i++) {
    window.setTimeout(() => {
      if (i <= 9) {
        document.querySelector(
          "#box-two #code-area-two .line-one .object-name"
        ).innerHTML += boxTwoCode[i];
      } else if (i === 10) {
        document.querySelector(
          "#box-two #code-area-two .line-one .bracket"
        ).innerHTML += boxTwoCode[i];
      } else if (i <= 22) {
        if (i === 11) {
          document.querySelector(
            "#box-two #code-area-two .line-two .key"
          ).innerHTML += "<br>";
          document.querySelector(
            "#box-two #code-area-two .line-two .key"
          ).innerHTML += "&nbsp;&nbsp;&nbsp;";
        }
        document.querySelector(
          "#box-two #code-area-two .line-two .key"
        ).innerHTML += boxTwoCode[i];
      } else if (i <= 32) {
        document.querySelector(
          "#box-two #code-area-two .line-two .value"
        ).innerHTML += boxTwoCode[i];
      } else if (i <= 43) {
        if (i === 33) {
          document.querySelector(
            "#box-two #code-area-two .line-three .key"
          ).innerHTML += "<br>";
          document.querySelector(
            "#box-two #code-area-two .line-three .key"
          ).innerHTML += "&nbsp;&nbsp;&nbsp;";
        }
        document.querySelector(
          "#box-two #code-area-two .line-three .key"
        ).innerHTML += boxTwoCode[i];
      } else if (i === 44) {
        document.querySelector(
          "#box-two #code-area-two .line-three .bracket-one"
        ).innerHTML += boxTwoCode[i];
      } else if (i <= 62) {
        document.querySelector(
          "#box-two #code-area-two .line-three .value-one"
        ).innerHTML += boxTwoCode[i];
      } else if (i === 63) {
        document.querySelector(
          "#box-two #code-area-two .line-three .bracket-two"
        ).innerHTML += boxTwoCode[i];
      } else if (i === 64) {
        document.querySelector(
          "#box-two #code-area-two .line-three .value-two"
        ).innerHTML += boxTwoCode[i];
      } else if (i <= 75) {
        if (i === 65) {
          document.querySelector(
            "#box-two #code-area-two .line-four .key"
          ).innerHTML += "<br>";
          document.querySelector(
            "#box-two #code-area-two .line-four .key"
          ).innerHTML += "&nbsp;&nbsp;&nbsp;";
        }
        document.querySelector(
          "#box-two #code-area-two .line-four .key"
        ).innerHTML += boxTwoCode[i];
      } else if (i <= 85) {
        document.querySelector(
          "#box-two #code-area-two .line-four .value"
        ).innerHTML += boxTwoCode[i];
      } else {
        if (i === 86) {
          document.querySelector(
            "#box-two #code-area-two .line-five .bracket"
          ).innerHTML += "<br>";
        }
        document.querySelector(
          "#box-two #code-area-two .line-five .bracket"
        ).innerHTML += boxTwoCode[i];
      }
    }, 80 * i);
  }
}, 80 * boxOneCode.length + 1300);
let boxCaders = document.querySelectorAll(".box-cadre");
let rubberBandAnimation = document.getElementsByClassName(
  "rubberBandAnimation"
);
boxCaders.forEach((cader) => {
  cader.classList.add("cadre-later-show-animation");
  cader.addEventListener("animationend", () => {
    cader.style.opacity = "1";
    cader.style.top = "15px";
    cader.style.left = "15px";
  });
});
for (let i = 0; i < rubberBandAnimation.length; i++) {
  rubberBandAnimation[i].addEventListener("mouseover", () => {
    rubberBandAnimation[i].classList.add("start");
  });
  rubberBandAnimation[i].addEventListener("mouseout", () => {
    window.setTimeout(() => {
      rubberBandAnimation[i].classList.remove("start");
    }, 1000);
  });
}
let yearsExperienceBoxes = document.querySelectorAll(
  ".about-me .container .years-experience .box"
);
let yearsExperienceBoxesContainer = document.querySelector(".about-me .container .years-experience");
let aboutMeBorderBottom = document.querySelector(".about-me .container .border-bottom");
let oldSAboutMe = window.scrollY;
function decTransforY(elem,scrollVal) {
  let matrixArr = window
    .getComputedStyle(elem)
    .getPropertyValue("transform")
    .match(/(-?[0-9\.]+)/g);
  let blurArr = window
    .getComputedStyle(elem)
    .getPropertyValue("filter")
    .match(/(-?[0-9\.]+)/g);
  let translateYValue = parseInt(matrixArr[5]);
  let blurVal = parseFloat(blurArr[0]);
  let screenPos = window.innerHeight;
  let elemPos = yearsExperienceBoxesContainer.getBoundingClientRect().top;
  let borderPos = aboutMeBorderBottom.getBoundingClientRect().top;
  if(elemPos < screenPos){
    elem.style.transition = "0s";
    if(scrollVal > 0){
      if(borderPos > screenPos){
        if(blurVal - (scrollVal/180) > 0){
          elem.style.filter = `blur(${blurVal - (scrollVal/180)}px)`;
        }
        if(translateYValue-(scrollVal/2) > 0){
          elem.style.transform = `translateY(${translateYValue-(scrollVal/2)}px)`;
        }
      }else{
        elem.style.transform = `translateY(0px)`;
        elem.style.filter = `blur(0px)`;
      }
    }else{
      if(borderPos - 100 > screenPos){
        if(blurVal - (scrollVal/180) < 4){
          elem.style.filter = `blur(${blurVal - (scrollVal/180)}px)`;
        }
        if(elem.classList.contains("stop")){
          if(translateYValue-(scrollVal/2) < 100){
            elem.style.transform = `translateY(${translateYValue-(scrollVal/2)}px)`;
          }
        }else{
          if(translateYValue-(scrollVal/2) < 180){
            elem.style.transform = `translateY(${translateYValue-(scrollVal/2)}px)`;
          }
        }
      }
    }
  }else{
    elem.style.filter = "blur(4px)" ;
    if(elem.classList.contains("stop")){
      elem.style.transform = "translateY(100px)";
    }else{
      elem.style.transform = "translateY(180px)";
    }
  }
}

window.addEventListener("scroll", () => {
  let scrollValue =  window.scrollY-oldSAboutMe
  yearsExperienceBoxes.forEach(box=>{
    if (window.matchMedia("(min-width: 993px)").matches){
      decTransforY(box,scrollValue);
    }else{
      box.style.transform = `translateY(0px)`;
      box.style.filter = `blur(0px)`;
    }
    
  })
  oldSAboutMe = window.scrollY;
});
// hover 3d effect
let projectWithHover3dEffect = document.querySelectorAll(".hover-effect-3d");
if (window.matchMedia("(min-width: 993px)").matches) {
  VanillaTilt.init(projectWithHover3dEffect, {
    reverse: false, // reverse the tilt direction
    max: 5, // max tilt rotation (degrees)
    startX: 0, // the starting tilt on the X axis, in degrees.
    startY: 0, // the starting tilt on the Y axis, in degrees.
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 300, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: false, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    glare: false, // if it should have a "glare" effect
    "max-glare": 1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender": false, // false = VanillaTilt creates the glare elements for you, otherwise
    // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
    "mouse-event-element": null, // css-selector or link to HTML-element what will be listen mouse events
    gyroscope: true, // Boolean to enable/disable device orientation detection,
    gyroscopeMinAngleX: -45, // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
    gyroscopeMaxAngleX: 45, // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
    gyroscopeMinAngleY: -45, // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
    gyroscopeMaxAngleY: 45, // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
  });
}
window.addEventListener("resize", () => {
  VanillaTilt.init(projectWithHover3dEffect, {
    max: 5, // max tilt rotation (degrees)
    speed: 300, // Speed of the enter/exit transition
    reset: false, // If the tilt effect has to be reset on exit.
  });
  if (window.matchMedia("(max-width: 992px)").matches) {
    projectWithHover3dEffect.forEach((project) => {
      project.vanillaTilt.destroy();
    });
  }
});
//project scroll effect
let projectRightToLeftSlideOne = document.querySelector(
  ".my-projects .right-to-left-one"
);
let projectLeftToRightSlideOne = document.querySelector(
  ".my-projects .left-to-right-one"
);
let projectRightToLeftSlideTwo = document.querySelector(
  ".my-projects .right-to-left-two"
);
let oldS = window.scrollY;

function moveOnScrollRightToLeftEffect(
  elem
) {
  let leftValue = parseInt(
    window.getComputedStyle(elem).getPropertyValue("left")
  );
  let blurArr = window
    .getComputedStyle(elem)
    .getPropertyValue("filter")
    .match(/(-?[0-9\.]+)/g);
  let blurVal = parseFloat(blurArr[0]);
  let screenPos = window.innerHeight;
  let elemPos = elem.getBoundingClientRect().top;
  if (this.scrollY > oldS) {
    if (elemPos < screenPos) {
      if (leftValue - (this.scrollY - oldS) >= 0) {
        elem.style.left = `${leftValue - (this.scrollY - oldS)}px`;
        elem.style.filter = `blur(${blurVal - (this.scrollY - oldS) / 150}px)`;
      } else {
        elem.style.left = `${0}px`;
        elem.style.filter = `blur(0px)`;
      }
    } else {
      elem.style.left = `${400}px`;
      elem.style.filter = "blur(4px)";
    }
  } else {
    if (elemPos + elem.clientHeight + 50 > screenPos) {
      if (leftValue - (this.scrollY - oldS) <= 400) {
        elem.style.left = `${leftValue - (this.scrollY - oldS)}px`;
        elem.style.filter = `blur(${blurVal - (this.scrollY - oldS) / 150}px)`;
      } else {
        elem.style.left = `${400}px`;
        elem.style.filter = `blur(4px)`;
      }
    }
  }
  oldS = this.scrollY;
}
function moveOnScrollLeftToRightEffect(
  elem
) {
  let rightValue = parseInt(
    window.getComputedStyle(elem).getPropertyValue("right")
  );
  let blurArr = window
    .getComputedStyle(elem)
    .getPropertyValue("filter")
    .match(/(-?[0-9\.]+)/g);
  let blurVal = parseFloat(blurArr[0]);
  let screenPos = window.innerHeight;
  let elemPos = elem.getBoundingClientRect().top;
  if (this.scrollY > oldS) {
    if (elemPos < screenPos) {
      if (rightValue - (this.scrollY - oldS) >= 0) {
        elem.style.right = `${rightValue - (this.scrollY - oldS)}px`;
        elem.style.filter = `blur(${blurVal - (this.scrollY - oldS) / 150}px)`;
      } else {
        elem.style.right = `${0}px`;
        elem.style.filter = `blur(0px)`;
      }
    } else {
      elem.style.right = `${400}px`;
      elem.style.filter = "blur(4px)";
    }
  } else {
    if (elemPos + elem.clientHeight + 50 > screenPos) {
      if (rightValue - (this.scrollY - oldS) <= 400) {
        elem.style.right = `${rightValue - (this.scrollY - oldS)}px`;
        elem.style.filter = `blur(${blurVal - (this.scrollY - oldS) / 150}px)`;
      } else {
        elem.style.right = `${400}px`;
        elem.style.filter = `blur(4px)`;
      }
    }
  }
  oldS = this.scrollY;
}
window.addEventListener("scroll", () => {
  let screenPos = window.innerHeight;
  let elemOne = projectRightToLeftSlideOne;
  let elemTwo = projectLeftToRightSlideOne;
  let elemThree = projectRightToLeftSlideTwo;
  if (window.matchMedia("(min-width: 993px)").matches) {
    if(elemOne.getBoundingClientRect().top > screenPos){
      elemOne.style.left = "400px";
      elemOne.style.filter = "blur(4px)";
      elemThree.style.left = "400px";
      elemThree.style.filter = "blur(4px)";
      elemTwo.style.right = "400px";
      elemTwo.style.filter = "blur(4px)";
    }else{
      if (elemOne.getBoundingClientRect().top < screenPos && elemTwo.getBoundingClientRect().top - 50 > screenPos) {
        elemOne.style.transition = "0.3s none";
        moveOnScrollRightToLeftEffect(projectRightToLeftSlideOne);
      } else if (elemTwo.getBoundingClientRect().top < screenPos && elemThree.getBoundingClientRect().top - 50 > screenPos) {
        elemOne.style.transition = "0.3s ease";
        elemTwo.style.transition = "none";
        elemOne.style.left = "0px";
        elemOne.style.filter = "blur(0)";
        moveOnScrollLeftToRightEffect(projectLeftToRightSlideOne);
      } else if(elemThree.getBoundingClientRect().top < screenPos){
        elemTwo.style.transition = "0.3s ease";
        elemTwo.style.right = "0px";
        elemTwo.style.filter = "blur(0)";
        moveOnScrollRightToLeftEffect(projectRightToLeftSlideTwo);
      }
    }
  } else {
    elemOne.style.left = "0px";
    elemOne.style.filter = "blur(0)";
    elemThree.style.left = "0px";
    elemThree.style.filter = "blur(0)";
    elemTwo.style.right = "0px";
    elemTwo.style.filter = "blur(0)";
  }
});
//header cursor effect
let headerCursor = document.querySelector(".header-cursor");
let headerLinks = document.querySelectorAll("header .links a");
let showCursor = false;
window.addEventListener("mousemove", (e) => {
  if(window.matchMedia("(min-width: 993px)").matches){
    if (showCursor) {
      headerCursor.style.top = e.pageY - window.scrollY + "px";
      headerCursor.style.left = e.pageX + "px";
      headerCursor.style.display = "block";
      document.body.style.cursor = "none";
    } else {
      headerCursor.style.display = "none";
      document.body.style.cursor = "auto";
    }
  }
});
document.getElementById("page-header").addEventListener("mouseover", () => {
  showCursor = true;
});
document.getElementById("page-header").addEventListener("mouseleave", () => {
  showCursor = false;
});
headerLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    if (link.className !== "main-btn-them resume-download") {
      headerCursor.classList.add("hoverEffect");
      link.classList.add("linkHoverEffect");
    }
  });
  link.addEventListener("mouseleave", () => {
    if (link.className !== "main-btn-them resume-download") {
      headerCursor.classList.remove("hoverEffect");
      link.classList.remove("linkHoverEffect");
    }
  });
});
//other project hover effect
let otherProjectsBoxes = document.querySelectorAll(
  ".work .other-projects .project-boxes .box"
);
otherProjectsBoxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.classList.add("active");
  });
  box.addEventListener("mouseleave", () => {
    box.classList.remove("active");
  });
});
//show more other project effect
let showMoreOtherProjectBtn = document.querySelector(
  ".work .other-projects .show-more-other-project-btn"
);
let otherProjectGroupes = document.querySelectorAll(
  ".work .other-projects .project-boxes .group"
);
showMoreOtherProjectBtn.addEventListener("click", () => {
  if (showMoreOtherProjectBtn.classList.contains('show-more')) {
    for (let i = 0; i < otherProjectGroupes.length; i++) {
      if (!otherProjectGroupes[i].classList.contains("active")) {
        otherProjectGroupes[i].classList.add("active");
        let groupBoxes = otherProjectGroupes[i].children;
        window.setTimeout(() => {
          for (let j = 0; j < groupBoxes.length; j++) {
            window.setTimeout(() => {
              groupBoxes[j].classList.add("show");
            }, 200 * j);
          }
        }, 500);
        if (i === otherProjectGroupes.length - 1) {
          showMoreOtherProjectBtn.innerHTML = "Show Less";
          showMoreOtherProjectBtn.classList.replace('show-more','show-less')
        }
        break;
      }
    }
  } else {
    for (let i = otherProjectGroupes.length - 1; i > 0; i--) {
      if (otherProjectGroupes[i].classList.contains("active")) {
        otherProjectGroupes[i].classList.remove("active");
        let groupBoxes = otherProjectGroupes[i].children;
        for (let j = 0; j < groupBoxes.length; j++) {
          groupBoxes[j].classList.remove("show");
        }
        showMoreOtherProjectBtn.innerHTML = "Show More";
        showMoreOtherProjectBtn.classList.replace('show-less','show-more')
      }
    }
  }
});
// skill progress animation
let skillProgressContainers = document.querySelectorAll(
  ".skills .skills-contents .skill-container"
);
let skillProgressInfos = document.querySelectorAll(
  ".skills .skills-contents .skill-container .info"
);
let skillsContents = document.querySelector(".skills .skills-contents");
function skillProgressAnimation() {
  let screenPos = window.innerHeight - 100;
  if (skillsContents.getBoundingClientRect().top < screenPos){
  for (let i = 0; i < skillProgressContainers.length; i++) {
    window.setTimeout(() => {
      if (!window.matchMedia("(max-width: 768px)").matches) {
        skillProgressContainers[i].style.height = `${skillProgressContainers[
          i
        ].getAttribute("data-progress")}`;
        skillProgressInfos[i].style.transform = "translateY(0px)";
      } else {
        skillProgressContainers[i].style.width = `${skillProgressContainers[
          i
        ].getAttribute("data-progress")}`;
      }
      skillProgressInfos[i].style.opacity = "1";
    }, i * 300);
  }
}
}
window.addEventListener("resize", skillProgressAnimation);
// Create 3D Rotating Text Sphere
const SphereContainer = document.querySelector(".sphere");
const texts = [
  "HTML",
  "Bootstrap",
  "JavaScript",
  "Python",
  "TypeScript",
  "Sass",
  "Git",
  "ReactJs",
  "CSS",
  "Premiere Pro",
  "Node Js",
  "Photoshop",
  "SQL",
  "Wordpress",
];
const options = {
  radius: 250,
  initSpeed: "normal",
  maxSpeed: "normal",
};
function sphereRadius() {
  if (window.matchMedia("(max-width: 1200px)").matches) {
    options.radius = 180;
  }
  if (window.matchMedia("(max-width: 992px)").matches) {
    options.radius = 300;
  }
  if (window.matchMedia("(max-width: 550px)").matches) {
    options.radius = 180;
  }
}
sphereRadius();
TagCloud(SphereContainer, texts, options);
// Scroll Show Animation
let onScrollShowAnimationElem = document.querySelectorAll(
  ".on-scroll-show-animation"
);
let onScrollLaterShowAnimationElem = document.querySelectorAll(
  ".on-scroll-later-show-animation"
);
let otherProjectFirstGroup = document.querySelector(
  ".work .other-projects .project-boxes .first-group"
);
let firstGroupBoxes = otherProjectFirstGroup.querySelectorAll(".box");
let footer = document.querySelector("#footer");
let footerBorderTop = document.querySelector("footer .container .border-top");
let footerContents = document.querySelectorAll(
  "footer .container .with-animation"
);
let socialMediaIconsContainer = document.querySelector(".contact .social-media");
let socialMediaIcons = document.querySelectorAll(".contact .social-media .icons a i");
let allSections = document.querySelectorAll(".section");
let mobileNavBarLinks = document.querySelectorAll("#mobile-nav-bar .links a:not(.main-btn-them)");
function scrollShowAnimation() {
  let screenPos = window.innerHeight - 100;
  onScrollShowAnimationElem.forEach((elem) => {
    let elemPos = elem.getBoundingClientRect().top;
    if (elemPos < screenPos) {
      elem.classList.add("show-animation");
    }
  });
  onScrollLaterShowAnimationElem.forEach((elem) => {
    let elmPos = elem.getBoundingClientRect().top;
    if (elmPos < screenPos) {
      elem.classList.add("later-show-animation");
    }
  });
  if (otherProjectFirstGroup.getBoundingClientRect().top < screenPos) {
    for (let i = 0; i < firstGroupBoxes.length; i++) {
      window.setTimeout(()=>{
        window.setTimeout(() => {
          firstGroupBoxes[i].classList.add("show");
        }, 200 * i);
      },700)
    }
  }
  if (skillsContents.getBoundingClientRect().top < screenPos) {
    window.setTimeout(() => {
      skillProgressAnimation();
    }, 1400);
  }
  if (footer.getBoundingClientRect().top - 100 < screenPos) {
    footerBorderTop.style.width = "100%";
    footerContents.forEach((elem) => {
      elem.style.top = "0";
      elem.style.opacity = "1";
    });
  }
  if (socialMediaIconsContainer.getBoundingClientRect().top < screenPos){
    window.setTimeout(()=>{
      for(let i = 0 ; i<socialMediaIcons.length;i++){
        window.setTimeout(()=>{
          socialMediaIcons[i].style.opacity = "1";
          socialMediaIcons[i].style.bottom = "0";
        },100*i)
      }
    },700)
  }
  allSections.forEach(sec=>{
    let elemPos = sec.getBoundingClientRect().top;
    if (elemPos <= 200){
      for (let i = 0; i < headerLinks.length; i++) {
        headerLinks[i].classList.remove("active");
      }
      for (let i = 0; i < mobileNavBarLinks.length; i++) {
        mobileNavBarLinks[i].classList.remove("active");
      }
      let link = document.querySelector(`[data-section-name=${sec.id}]`)
        link.classList.add("active");
        let link2 = document.querySelector(`[data-section-name2=${sec.id}]`)
        link2.classList.add("active");
    }
  })
  if (yearsExperienceBoxesContainer.getBoundingClientRect().top < screenPos) {
      for(let i = 0 ; i < yearsExperienceBoxes.length ; i++){
        window.setTimeout(()=>{
          yearsExperienceBoxes[i].style.transition = "0.6s ease-in-out";
          yearsExperienceBoxes[i].style.opacity = "1";
          yearsExperienceBoxes[i].style.top = "0";
        },300*i)
      }
}

}
for(let i = 0 ;i<headerLinks.length;i++){
  window.setTimeout(()=>{
    headerLinks[i].style.opacity = "1";
    headerLinks[i].style.bottom = "0";
  },100*i)
}
let logoCyanIcon = document.querySelector("header .logo .icon");
let logoText = document.querySelector("header .text")
logoCyanIcon.style.opacity = "1";
window.setTimeout(()=>{
  logoText.style.left = "0";
  logoText.style.opacity = "1";
},300)
onScrollShowAnimationElem.forEach((elem) => {
  elem.addEventListener("animationend", () => {
    elem.style.opacity = "1";
  });
});
onScrollLaterShowAnimationElem.forEach((elem) => {
  elem.addEventListener("animationend", () => {
    elem.style.opacity = "1";
  });
});
scrollShowAnimation()
window.addEventListener("scroll", scrollShowAnimation);
let navLinksScrolling = false;
function mobileNavBarLinksScrollingHandler(link){
  link.addEventListener("click",()=>{
    navLinksScrolling = true ;
    link.classList.add("active");
    if(link.getAttribute("data-section-name2") !== "landing"){
      let section = document.querySelector(`#${link.getAttribute("data-section-name2")}`);
      let des = section.getBoundingClientRect().top
      let scrollYValue = des+window.scrollY
      window.scrollTo(0,scrollYValue)
    }else{
      window.scrollTo(0,0);
    }
  })
}
mobileNavBarLinks.forEach(link=>{
  mobileNavBarLinksScrollingHandler(link)
})
let timer = null;
window.addEventListener("scroll", function() {
  if(navLinksScrolling){
  clearTimeout(timer);        
  timer = setTimeout(function() {
    closeMobileNavBar()
    navLinksScrolling = false;
  }, 150);
  }
}, false);
},2600)
let preloadPage =  document.querySelector(".preload-page");
let loadingAnimationContainer = document.querySelector(".preload-page .loading-animation-container");
let progressBarBackground = document.querySelector(".preload-page .progress-bar .progress-bar-bg");
  progressBarBackground.style.width = "100%";
  window.setTimeout(()=>{
    loadingAnimationContainer.style.opacity = "0";
  },2000)
  window.setTimeout(()=>{
    preloadPage.style.opacity = "0";
     window.setTimeout(()=>{
      preloadPage.style.display = "none";
     },300)
  },2300)
})
