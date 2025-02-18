
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
        contactBox.style.maxHeight = "0";
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
        projChange.style.maxHeight = "650px";
        // to keep contacts closed
        contactSection.style.maxHeight = "0"; 
        contactBox.style.maxHeight = "0";
    }
}

// Opens Contact section (with animation)
function openContact() {
    if(bodyChange.classList.contains('expanded')){
        // to shrink
        bodyChange.classList.remove('expanded');
        contactBox.style.maxHeight = "0";
    
        projChange.style.maxHeight = "0";
        contactSection.style.maxHeight = "0";
    } else{
        // to open
        bodyChange.classList.add('expanded');
        // will change to match requireed height:
        contactBox.style.maxHeight = "90px";
        contactBox.style.display = "flex";
        contactSection.style.maxHeight = "650px"; 
        projChange.style.maxHeight = "0"; 
    }
}

function openEmail(){
    window.location.href = 'mailto:topeumar@gmail.com';
}

function openLinkedin(){
    window.open('https://www.linkedin.com/in/oluwatope-folorunso-523222207/')
}


// using JSON for convenient input of project description in future
fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const innerProj = document.getElementById('innerProj');
        innerProj.innerHTML = '';

        // function to create a new div for each project in JSON
        data.forEach(item => {
            const projDiv = document.createElement('div');
            projDiv.className = 'projectItems';

            const itemlink = item.link;


            // NOTE: {`} is not the same as {'}
            projDiv.innerHTML = `
                <img src = "${item.image}" alt="${item.title}" style = "width:100%; height:40%;">
                <h1>${item.title}</h1>
                <br>
                <p>${item.description}</p>
                <br>
                <a href="${itemlink}" target="_blank">Open link</a>
                `;

            innerProj.appendChild(projDiv);
        });
    });
