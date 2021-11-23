
let searchInput = document.getElementById("search");

searchInput.addEventListener("focus", function () {
  console.log("sfvs");
  let searchRow = document.querySelector(".search-col .row");
  console.log(searchRow);
  searchRow.style.backgroundColor = "var(--color_12)";
  /*searchRow.style.boxShadow = "rgba(0,0,0,0.11)";*/
  console.log(searchRow.backgroundColor);
});
searchInput.addEventListener("focusout", function () {
  console.log("sfvs");
  let searchRow = document.querySelector(".search-col .row");
  console.log(searchRow);
  searchRow.style.backgroundColor = "var(--color_4)";
  /*searchRow.style.boxShadow = "rgba(0,0,0,0.11)";*/
  console.log(searchRow.backgroundColor);
});

let signIn = document.getElementById("sign-link");

/*
signIn.addEventListener("mouseover", function () {
  let profileDropdown = document.getElementsByClassName("profile-dropdown")[0];
  profileDropdown.style.display = "flex";
  profileDropdown.style.flexDirection = "column";
  setTimeout(function () {
    profileDropdown.style.opacity = "1";
  }, 200);
});
*/

/*medium and small translating nav*/
let linkItems = document.querySelectorAll(".second-nav .link-item`);

for (let i = 0; i < linkItems.length; i++) {
  linkItems[i].addEventListener("click", function () {
    let dropdown = linkItems[i].getElementsByClassName("dropdown-container")[0];
    dropdown.style.display = "flex";
    let secondNav = document.getElementsByClassName("nav-links")[0];
    secondNav.style.animation = "forwards";
  });
}

let goBackItems = document.querySelectorAll(".go-back`);

for (let i = 0; i < goBackItems.length; i++) {
  goBackItems[i].addEventListener("click", function () {
    console.log("fhj");
    let secondNav = document.getElementsByClassName("nav-links")[0];
    if (secondNav.style.animation) {
      secondNav.style.animation = "";
    }
    console.log(secondNav.style.animation);
    setTimeout(function () {
      secondNav.style.animation = "";
    }, 200);
  });
}

let dropdownSpans = document.querySelectorAll(
  ".dropdown-col .link-group .arrow-container`
);

for (let i = 0; i < dropdownSpans.length; i++) {
  dropdownSpans[i].addEventListener("click", function () {
    let linkMains = document.querySelectorAll(
      ".dropdown-col .link-group .link-main.active`
    );

    let parentOfSpan = dropdownSpans[i].parentElement;

    for (let j = 0; j < linkMains.length; j++) {
      if (linkMains[j] != parentOfSpan) {
        current_dropdown = linkMains[j].nextElementSibling;
        current_span = linkMains[j].querySelector("span");
        linkMains[j].classList.toggle("active");
        current_dropdown.classList.toggle("active");
        current_span.classList.toggle("active");
      }
    }
    setTimeout(function () {
      let innerspan = dropdownSpans[i].querySelector("span");
      innerspan.classList.toggle("active");

      parentOfSpan.classList.toggle("active");
      let dropdownContent = parentOfSpan.nextElementSibling;
      dropdownContent.classList.toggle("active");
    }, 100);
  });
}

function openNav() {
  let secondNav = document.querySelector(".second-nav");
  secondNav.classList.add("active");
  let overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  setTimeout(function () {
    overlay.style.opacity = "1";
  }, 100);
}

function closeNav() {
  let secondNav = document.querySelector(".second-nav");
  secondNav.classList.remove("active");
  let overlay = document.getElementById("overlay");
  overlay.style.opacity = "0";
  setTimeout(function () {
    overlay.style.display = "none";
  }, 300);
}

let searchInput = document.getElementById("search");

      searchInput.addEventListener("focus", function () {
        console.log("sfvs");
        let searchRow = document.querySelector(".search-col .row");
        console.log(searchRow);
        searchRow.style.backgroundColor = "var(--color_12)";
        /*searchRow.style.boxShadow = "rgba(0,0,0,0.11)";*/
        console.log(searchRow.backgroundColor);
      });
      searchInput.addEventListener("focusout", function () {
        console.log("sfvs");
        let searchRow = document.querySelector(".search-col .row");
        console.log(searchRow);
        searchRow.style.backgroundColor = "var(--color_4)";
        /*searchRow.style.boxShadow = "rgba(0,0,0,0.11)";*/
        console.log(searchRow.backgroundColor);
      });

      let signIn = document.getElementById("sign-link");

      /*
signIn.addEventListener("mouseover", function () {
  let profileDropdown = document.getElementsByClassName("profile-dropdown")[0];
  profileDropdown.style.display = "flex";
  profileDropdown.style.flexDirection = "column";
  setTimeout(function () {
    profileDropdown.style.opacity = "1";
  }, 200);
});
*/

      /*medium and small translating nav*/
      let linkItems = document.querySelectorAll(".second-nav .link-item`);

      for (let i = 0; i < linkItems.length; i++) {
        linkItems[i].addEventListener("click", function () {
          let dropdown = linkItems[i].getElementsByClassName(
            "dropdown-container"
          )[0];
          dropdown.style.display = "flex";
          let secondNav = document.getElementsByClassName("nav-links")[0];
          secondNav.style.animation = "forwards";
        });
      }

      let goBackItems = document.querySelectorAll(".go-back`);

      for (let i = 0; i < goBackItems.length; i++) {
        goBackItems[i].addEventListener("click", function () {
          console.log("fhj");
          let secondNav = document.getElementsByClassName("nav-links")[0];
          if (secondNav.style.animation) {
            secondNav.style.animation = "";
          }
          console.log(secondNav.style.animation);
          setTimeout(function () {
            secondNav.style.animation = "";
          }, 200);
        });
      }

      let dropdownSpans = document.querySelectorAll(
        ".dropdown-col .link-group .arrow-container`
      );

      for (let i = 0; i < dropdownSpans.length; i++) {
        dropdownSpans[i].addEventListener("click", function () {
          let linkMains = document.querySelectorAll(
            ".dropdown-col .link-group .link-main.active`
          );

          let parentOfSpan = dropdownSpans[i].parentElement;

          for (let j = 0; j < linkMains.length; j++) {
            if (linkMains[j] != parentOfSpan) {
              current_dropdown = linkMains[j].nextElementSibling;
              current_span = linkMains[j].querySelector("span");
              linkMains[j].classList.toggle("active");
              current_dropdown.classList.toggle("active");
              current_span.classList.toggle("active");
            }
          }
          setTimeout(function () {
            let innerspan = dropdownSpans[i].querySelector("span");
            innerspan.classList.toggle("active");

            parentOfSpan.classList.toggle("active");
            let dropdownContent = parentOfSpan.nextElementSibling;
            dropdownContent.classList.toggle("active");
          }, 100);
        });
      }

      function openNav() {
        let secondNav = document.querySelector(".second-nav");
        secondNav.classList.add("active");
        let overlay = document.getElementById("overlay");
        overlay.style.display = "block";
        setTimeout(function () {
          overlay.style.opacity = "1";
        }, 100);
      }

      function closeNav() {
        let secondNav = document.querySelector(".second-nav");
        secondNav.classList.remove("active");
        let overlay = document.getElementById("overlay");
        overlay.style.opacity = "0";
        setTimeout(function () {
          overlay.style.display = "none";
        }, 300);
      }