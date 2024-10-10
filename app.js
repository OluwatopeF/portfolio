// Get body and project elements
const bodyChange = document.body;
const projChange = document.querySelector(".project");
const contactSection = document.querySelector("footer");

// need id for inner div boxes (will set to none)
const contactBox = document.getElementById("contactBox");

// Hide div boxes initially
projChange.style.maxHeight = "0";
contactBox.style.display = "none";


// Returns home(resets style changes)
function returnHome(){
    if(bodyChange.classList.contains('expanded') || projChange.style.maxHeight != 0 || contactSection.style.maxHeight != 0){
        bodyChange.classList.remove('expanded');
        projChange.style.maxHeight = "0"; 
        contactSection.style.maxHeight = "0"; 
    }
}

// Opens Project section (with animation)
function openProjects() {
    if (bodyChange.classList.contains('expanded')) {
        // for repetition
        bodyChange.classList.remove('expanded');
        // to close
        projChange.style.maxHeight = "0"; 
        
    } else {
        // for repetition
        bodyChange.classList.add('expanded');
        // REQUIRED FOR ANIMATION
        projChange.style.maxHeight = "687px";
        // to keep contacts closed
        contactSection.style.maxHeight = "0"; 
    }
}

// Opens Contact section (with animation)
function openContact() {
    if(bodyChange.classList.contains('expanded')){
        // to shrink
        bodyChange.classList.remove('expanded');
        contactBox.style.maxHeight = "0";
        // too sudden
        // contactBox.style.display = "none";
        projChange.style.maxHeight = "0";
        contactSection.style.maxHeight = "0";
    } else{
        // to open
        bodyChange.classList.add('expanded');
        // will change to match requireed height:
        contactBox.style.maxHeight = "90px";
        contactBox.style.display = "flex";
        contactSection.style.maxHeight = "687px"; 
        projChange.style.maxHeight = "0"; 
    }
}


