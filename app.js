// Get body and project elements
const bodyChange = document.body;
const projChange = document.querySelector(".project");
const contactSection = document.querySelector("footer");

// Hide project section initially
projChange.style.maxHeight = "0";


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
        bodyChange.classList.remove('expanded');
        projChange.style.maxHeight = "0"; 
        contactSection.style.maxHeight = "0"; 
    } else {
        bodyChange.classList.add('expanded');
        projChange.style.maxHeight = "687px"; 
        contactSection.style.maxHeight = "0"; 
    }
}

// Opens Contact section (with animation)
function openContact() {
    if(bodyChange.classList.contains('expanded')){
        bodyChange.classList.remove('expanded');
        projChange.style.maxHeight = "0";
        contactSection.style.maxHeight = "690px";
    } else{
        bodyChange.classList.add('expanded');
        contactSection.style.maxHeight = "687px"; 
        projChange.style.maxHeight = "0"; 
    }
}
    
