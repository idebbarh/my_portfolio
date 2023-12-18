document.getElementsByTagName("body")[0].style.overflowY = "hidden";
document.getElementsByTagName("html")[0].style.overflowY = "hidden";
function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
window.addEventListener("load", () => {
  window.setTimeout(() => {
    document.getElementsByTagName("body")[0].style.overflowY = "visible";
    document.getElementsByTagName("html")[0].style.overflowY = "visible";
    let mobileNavBar = document.getElementById("mobile-nav-bar");
    let mobileNavBarOverlay = document.getElementById("mobile-nav-bar-overlay");
    let closeMobileNavBarBtn = document.getElementById(
      "close-mobile-nave-bar-btn",
    );
    let openMobileNavBar = document.getElementById("open-mobile-nave-bar-btn");
    let allWebsiteContents = document.getElementById("all-website-contents");
    let allNavMobilNavBarItems = document.querySelectorAll(
      "#mobile-nav-bar .links a",
    );
    openMobileNavBar.addEventListener("click", () => {
      mobileNavBarOverlay.style.display = "block";
      window.setTimeout(() => {
        mobileNavBarOverlay.style.opacity = "1";
        mobileNavBar.style.left = "0";
        allWebsiteContents.style.left = "280px";
        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
      }, 300);
      window.setTimeout(() => {
        for (let i = 0; i < allNavMobilNavBarItems.length; i++) {
          window.setTimeout(() => {
            allNavMobilNavBarItems[i].style.opacity = "1";
            allNavMobilNavBarItems[i].style.bottom = "0";
          }, 300 * i);
        }
      }, 600);
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
      window.setTimeout(() => {
        for (let i = 0; i < allNavMobilNavBarItems.length; i++) {
          allNavMobilNavBarItems[i].style.opacity = "0";
          allNavMobilNavBarItems[i].style.bottom = "20px";
        }
      }, 600);
    }
    closeMobileNavBarBtn.addEventListener("click", closeMobileNavBar);
    mobileNavBarOverlay.addEventListener("click", closeMobileNavBar);
    let fixedHeaderContainer = document.querySelector(".fixed-container");
    window.addEventListener("scroll", () => {
      if (window.matchMedia("(min-width:993px)").matches) {
        if (this.oldScroll < this.scrollY) {
          fixedHeaderContainer.style.top = "-82px";
        } else if (this.oldScroll > this.scrollY) {
          fixedHeaderContainer.style.top = "0";
        }
      } else {
        fixedHeaderContainer.style.top = "0";
      }
      this.oldScroll = this.scrollY;
    });

    const animationBoxes = [
      {
        comment: {
          content: "// My self introduction",
          container: document.querySelector("#box-one #code-area-one .comment"),
        },
        objectName: {
          content: "Name",
          container: document.querySelector(
            "#box-one #code-area-one .line-one .object-name",
          ),
        },

        openBracket: {
          content: "&nbsp;{",
          container: document.querySelector(
            "#box-one #code-area-one .line-one .bracket",
          ),
        },
        objectEntries: [
          {
            content: {
              key: {
                content: "First name",

                container: document.querySelector(
                  "#box-one #code-area-one .line-two .key",
                ),
              },
              value: {
                content: "Ismail",
                container: document.querySelector(
                  "#box-one #code-area-one .line-two .value",
                ),
              },
            },
          },
          {
            content: {
              key: {
                content: "Last name",

                container: document.querySelector(
                  "#box-one #code-area-one .line-three .key",
                ),
              },
              value: {
                content: "Debbarh",
                container: document.querySelector(
                  "#box-one #code-area-one .line-three .value",
                ),
              },
            },
          },
        ],
        closeBracket: {
          content: "<br>}",
          container: document.querySelector(
            "#box-one #code-area-one .line-four .bracket",
          ),
        },
      },

      {
        objectName: {
          content: "What I Do",
          container: document.querySelector(
            "#box-two #code-area-two .line-one .object-name",
          ),
        },
        openBracket: {
          content: "&nbsp;{",
          container: document.querySelector(
            "#box-two #code-area-two .line-one .bracket",
          ),
        },
        objectEntries: [
          {
            content: {
              key: {
                content: "Profession",
                container: document.querySelector(
                  "#box-two #code-area-two .line-two .key",
                ),
              },
              value: {
                content: "Software Engineer",
                container: document.querySelector(
                  "#box-two #code-area-two .line-two .value",
                ),
              },
            },
          },
          {
            content: {
              key: {
                content: "Specialty",
                container: document.querySelector(
                  "#box-two #code-area-two .line-three .key",
                ),
              },
              value: {
                content: "Full-stack Development",
                container: document.querySelector(
                  "#box-two #code-area-two .line-three .value",
                ),
              },
            },
          },
        ],
        closeBracket: {
          content: "<br>}",
          container: document.querySelector(
            "#box-two #code-area-two .line-four .bracket",
          ),
        },
      },
    ];

    async function animateCodeBoxes() {
      async function animateBox(box) {
        for (let [key, value] of Object.entries(box)) {
          switch (key) {
            case "comment":
              for (let char of Array.from(value.content)) {
                value.container.innerHTML += char;
                await delay(80);
              }
              break;
            case "objectName":
              value.container.innerHTML += "<br>";
              console.log(value);
              await delay(80);
              for (let char of Array.from(value.content)) {
                value.container.innerHTML += char;
                await delay(80);
              }
            case "objectEntries":
              for (let i = 0; i < value.length; i++) {
                let line = value[i];
                line.content.key.container.innerHTML += "<br>";
                await delay(80);
                line.content.key.container.innerHTML += "&nbsp;&nbsp;&nbsp;";
                await delay(80);
                for (let char of Array.from(line.content.key.content)) {
                  line.content.key.container.innerHTML += char;
                  await delay(80);
                }
                line.content.key.container.innerHTML += ":";
                await delay(80);
                line.content.value.container.innerHTML += "&nbsp;";
                await delay(80);
                for (let char of Array.from(line.content.value.content)) {
                  line.content.value.container.innerHTML += char;
                  await delay(80);
                }
              }
              break;
            default:
              console.log(key);
              value.container.innerHTML += value.content;
          }
          await delay(80);
        }
      }
      await delay(1300);
      await animateBox(animationBoxes[0]);
      await animateBox(animationBoxes[1]);
    }
    animateCodeBoxes();

    let boxCaders = document.querySelectorAll(".box-cadre");
    let rubberBandAnimation = document.getElementsByClassName(
      "rubberBandAnimation",
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
    //header cursor effect
    let headerCursor = document.querySelector(".header-cursor");
    let headerLinks = document.querySelectorAll("header .links a");
    let showCursor = false;
    window.addEventListener("mousemove", (e) => {
      if (window.matchMedia("(min-width: 993px)").matches) {
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
    document
      .getElementById("page-header")
      .addEventListener("mouseleave", () => {
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
      ".work .other-projects .project-boxes .box",
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
      ".work .other-projects .show-more-other-project-btn",
    );
    let otherProjectGroupes = document.querySelectorAll(
      ".work .other-projects .project-boxes .group",
    );
    showMoreOtherProjectBtn.addEventListener("click", () => {
      if (showMoreOtherProjectBtn.classList.contains("show-more")) {
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
              showMoreOtherProjectBtn.classList.replace(
                "show-more",
                "show-less",
              );
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
            showMoreOtherProjectBtn.classList.replace("show-less", "show-more");
          }
        }
      }
    });
    // Scroll Show Animation
    let onScrollShowAnimationElem = document.querySelectorAll(
      ".on-scroll-show-animation",
    );
    let onScrollLaterShowAnimationElem = document.querySelectorAll(
      ".on-scroll-later-show-animation",
    );
    let otherProjectFirstGroup = document.querySelector(
      ".work .other-projects .project-boxes .first-group",
    );
    let firstGroupBoxes = otherProjectFirstGroup.querySelectorAll(".box");
    let footer = document.querySelector("#footer");
    let footerBorderTop = document.querySelector(
      "footer .container .border-top",
    );
    let footerContents = document.querySelectorAll(
      "footer .container .with-animation",
    );
    let socialMediaIconsContainer = document.querySelector(
      ".contact .social-media",
    );
    let socialMediaIcons = document.querySelectorAll(
      ".contact .social-media .icons a i",
    );
    let allSections = document.querySelectorAll(".section");
    let mobileNavBarLinks = document.querySelectorAll(
      "#mobile-nav-bar .links a:not(.main-btn-them)",
    );
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
          window.setTimeout(() => {
            window.setTimeout(() => {
              firstGroupBoxes[i].classList.add("show");
            }, 200 * i);
          }, 700);
        }
      }
      if (footer.getBoundingClientRect().top - 100 < screenPos) {
        footerBorderTop.style.width = "100%";
        footerContents.forEach((elem) => {
          elem.style.top = "0";
          elem.style.opacity = "1";
        });
      }
      if (socialMediaIconsContainer.getBoundingClientRect().top < screenPos) {
        window.setTimeout(() => {
          for (let i = 0; i < socialMediaIcons.length; i++) {
            window.setTimeout(() => {
              socialMediaIcons[i].style.opacity = "1";
              socialMediaIcons[i].style.bottom = "0";
            }, 100 * i);
          }
        }, 700);
      }
      allSections.forEach((sec) => {
        let elemPos = sec.getBoundingClientRect().top;
        if (elemPos <= 200) {
          for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].classList.remove("active");
          }
          for (let i = 0; i < mobileNavBarLinks.length; i++) {
            mobileNavBarLinks[i].classList.remove("active");
          }
          let link = document.querySelector(`[data-section-name=${sec.id}]`);
          link.classList.add("active");
          let link2 = document.querySelector(`[data-section-name2=${sec.id}]`);
          link2.classList.add("active");
        }
      });
    }

    for (let i = 0; i < headerLinks.length; i++) {
      window.setTimeout(() => {
        headerLinks[i].style.opacity = "1";
        headerLinks[i].style.bottom = "0";
      }, 100 * i);
    }

    let logoCyanIcon = document.querySelector("header .logo .icon");
    let logoText = document.querySelector("header .text");

    logoCyanIcon.style.opacity = "1";
    window.setTimeout(() => {
      logoText.style.left = "0";
      logoText.style.opacity = "1";
    }, 300);
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
    scrollShowAnimation();
    window.addEventListener("scroll", scrollShowAnimation);
    let navLinksScrolling = false;
    function mobileNavBarLinksScrollingHandler(link) {
      link.addEventListener("click", () => {
        navLinksScrolling = true;
        link.classList.add("active");
        if (link.getAttribute("data-section-name2") !== "landing") {
          let section = document.querySelector(
            `#${link.getAttribute("data-section-name2")}`,
          );
          let des = section.getBoundingClientRect().top;
          let scrollYValue = des + window.scrollY;
          window.scrollTo(0, scrollYValue);
        } else {
          window.scrollTo(0, 0);
        }
      });
    }
    mobileNavBarLinks.forEach((link) => {
      mobileNavBarLinksScrollingHandler(link);
    });
    let timer = null;
    window.addEventListener(
      "scroll",
      function () {
        if (navLinksScrolling) {
          clearTimeout(timer);
          timer = setTimeout(function () {
            closeMobileNavBar();
            navLinksScrolling = false;
          }, 150);
        }
      },
      false,
    );
  }, 2600);
  let preloadPage = document.querySelector(".preload-page");
  let loadingAnimationContainer = document.querySelector(
    ".preload-page .loading-animation-container",
  );
  let progressBarBackground = document.querySelector(
    ".preload-page .progress-bar .progress-bar-bg",
  );
  progressBarBackground.style.width = "100%";
  window.setTimeout(() => {
    loadingAnimationContainer.style.opacity = "0";
  }, 2000);
  window.setTimeout(() => {
    preloadPage.style.opacity = "0";
    window.setTimeout(() => {
      preloadPage.style.display = "none";
    }, 300);
  }, 2300);
});
