
const sideNavBar = document.querySelector(".side-nav-bar")
const sideNavBox = document.querySelector(".side-box")
const topNavBar = document.querySelector(".top-nav")
const HamBurger = document.querySelector(".ham-burger")
const bigContainer = document.querySelector(".container")
const rightNav = document.querySelector(".right-side-nav")
let flag;

HamBurger.addEventListener("click",() => {
	sideNavBar.classList.toggle("activate")
	bigContainer.classList.toggle("activate")
	topNavBar.classList.toggle("activate")
	sideNavBox.classList.toggle("activate")
	rightNav.classList.toggle("activate")
	
})

if(bigContainer.className[bigContainer.classList.length - 1] === ("activate")) {
	flag = true;
}

bigContainer.addEventListener("click",() => {
	
	
	sideNavBar.classList.remove("activate")
	bigContainer.classList.remove("activate")
	topNavBar.classList.remove("activate")
	sideNavBox.classList.remove("activate")
	rightNav.classList.remove ("activate")
		
	
	
})
const links = document.querySelectorAll(".scrolling-links a");
let prevLink;
let buttonClicked = false;
if(buttonClicked === false) {
	window.addEventListener("scroll`,() => {

		links.forEach(link => {

			if(window.pageYOffset > document.querySelector(link.attributes.href.value).offsetTop - 300 && window.pageYOffset < document.querySelector(link.attributes.href.value).clientHeight + document.querySelector(link.attributes.href.value).offsetTop - 300) {
				if(prevLink && prevLink.className === "activated-nav") {
					prevLink.classList.remove("activated-nav")
				}
				prevLink = link
				if(buttonClicked === false) {
					link.classList.add("activated-nav")
				}
				
			}
			else {
				link.classList.remove("activated-nav")
			}
		});
	})
}
function smoothscroll(target,duration) {
	var target = document.querySelector(target);
	var targetPosition = target.offsetTop;
	var startPosition = window.pageYOffset;
	console.log("Tp ",targetPosition)
	console.log("sp ",startPosition)
	var distance = targetPosition - startPosition - 30;
	var startTime = null
	console.log("dist , distance);
	function animation(currentTime) {
	  if(startTime === null) {
		startTime = currentTime;
	  }
	  var timeElapsed = currentTime - startTime;
	  var run = ease(timeElapsed,startPosition,distance,duration);
	  console.log(run)
	  window.scrollTo(0,run);
	  if(timeElapsed < duration) {
		requestAnimationFrame(animation)
	  }
	}
	function ease(t,b,c,d) {
	  
	  t /= d/2;
	  if(t<1) {
		return c / 2 *t * t + b
	  }
	  t--;
	  return -c/2 * (t * (t-2) - 1) + b; 
	}
	requestAnimationFrame(animation);
	
	// buttonClicked = false;
}

let prevLinkActive;
links.forEach(link => {

  	link.addEventListener("click",()=> {
		buttonClicked = true; 
		if(prevLinkActive && prevLinkActive.className === "activated-nav") {
			prevLinkActive.classList.remove("activated-nav")
		}
		prevLinkActive = link
		
		smoothscroll(link.attributes.href.value,1000);
		setTimeout(() => {
			link.classList.add("activated-nav")
			buttonClicked=false;
		},800)
		
		// document.querySelector(link.attributes.href.value).addEventListener("transitionend",() => {
		// 	buttonClicked = false;
		// 	console.log(false);
		// })
		
	})


	

});
"