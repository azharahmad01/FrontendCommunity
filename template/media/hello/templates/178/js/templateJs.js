
let leftSideBar = document.querySelector(".mainContainer .leftSideBar");
let rightSideBar = document.querySelector(".mainContainer .rightSideBar");
let centerContainer = document.querySelector(".mainContainer .centerContainer");
let leftToggleBar = document.querySelector(".mainContainer .leftToggleBar");
let rightToggleBar = document.querySelector(".mainContainer .rightToggleBar");
let courseMainOverlay = document.querySelector(".courseSectionContainer .mainContainer .overlay")
function toggleLeftBar(ele){
    leftSideBar.classList.toggle("toggle");
    centerContainer.classList.toggle("leftToggle");
    leftToggleBar.classList.toggle("toggle");
}


function toggleRightBar(){
    rightSideBar.classList.toggle("toggle");
    centerContainer.classList.toggle("rightToggle");
    rightToggleBar.classList.toggle("toggle");
}

function toggleLeftBarSmall(){
    if(!leftSideBar.classList.contains("toggle")){
        courseMainOverlay.classList.add("active");
    }
    leftSideBar.classList.toggle("toggle");
    if(rightSideBar.classList.contains("toggle")){
        rightSideBar.classList.toggle("toggle");
    }
}

function closeOpenSideBars(){

    courseMainOverlay.classList.remove("active");
    if(leftSideBar.classList.contains("toggle")){
        leftSideBar.classList.toggle("toggle");
    }
    if(rightSideBar.classList.contains("toggle")){
        rightSideBar.classList.toggle("toggle");
    }
}

function toggleRightBarSmall(){
    if(!rightSideBar.classList.contains("toggle")){
        courseMainOverlay.classList.add("active");
    }
    rightSideBar.classList.toggle("toggle");
    if(leftSideBar.classList.contains("toggle")){
        leftSideBar.classList.toggle("toggle");
    }
}
let menuHeadings = document.querySelectorAll(".menuItem .heading");
let menuSubItems = document.querySelectorAll(".menuItem .subItems");

for(let i=0;i<menuHeadings.length;i++){
    menuHeadings[i].addEventListener("click",() => {
       /* let activeSubItem = document.querySelector(".menuItem .subItems.active");
        if(activeSubItem){
            activeSubItem.classList.remove("active")
        }*/
        menuSubItems[i].classList.toggle("active");
    })
}



let noteFormContainer = document.querySelector(".mainContainer .rightSideBar .notesSection .contentContainer .createNoteForm");

function openNoteForm(){
    noteFormContainer.classList.add("active");
}
function closeNoteForm(){
    noteFormContainer.classList.remove("active");
}


