let images = document.querySelectorAll(".student-journey-starts .images-sticky img");


let paragraphs = document.querySelectorAll(".journey-div .para-container");

let journeyContainer = document.querySelector(".journey-div .para-grid");

let journeyRect = journeyContainer.getBoundingClientRect();

console.log("hshfdjf");


let imagesSticky = document.querySelector(".student-journey-starts .images-sticky");


window.addEventListener('unload', function(e){
	document.body.style.display = 'none';
 });

let scroll = 0;
let fixedScroll = 5;


let body = document.getElementsByTagName('body')[0];

let pagedown = 0;

console.log(document.documentElement.scrollHeight,"---");



let windowHeight = window.innerHeight;
let pageHeight = document.documentElement.scrollHeight;

let opacityHeight = (5*windowHeight)/100;//40 percentage of vw 40vw
let totalElements = 6;
let windowWidth = window.outerWidth;
if(windowWidth > 1200) {
	body.onscroll = function() {
		let journeyTotalHeight = 6*window.innerHeight;
		
		let scrolledJourneyHeight = windowHeight + window.pageYOffset - journeyRect.top;
	
		let scrolledPercentage = (scrolledJourneyHeight*100)/journeyTotalHeight;
	
		console.log(scrolledJourneyHeight%windowHeight)
		if(scrolledJourneyHeight%windowHeight > 0 && scrolledJourneyHeight%windowHeight < opacityHeight ){
			let image_no = Math.floor(scrolledJourneyHeight/windowHeight);
			console.log(image_no,"no");
			for(let i=0;i<images.length;i++){
				images[i].classList.remove("active");
			}

			if(image_no > 0){
				images[image_no - 1].classList.add("active");
			}
			
		}

		if(window.pageYOffset > pagedown){
			console.log("down");
			scroll = scroll + fixedScroll;
		}
		else{
			console.log("up");
			scroll = scroll - fixedScroll;
		}
	
		pagedown = window.pageYOffset;
	
		if(scrolledJourneyHeight > windowHeight){
			if(!imagesSticky.classList.contains("active")){
				imagesSticky.classList.add("active");
			}	
			
		}
		else{
			if(imagesSticky.classList.contains("active")){
				imagesSticky.classList.remove("active");
			}	
		}
	
		imagesSticky.style.transform = "translateY(-" + scrolledPercentage + "%)";
		
		
	};
}
