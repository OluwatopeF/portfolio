
// default:
// grid-template-rows:auto 1fr auto auto;

// body id
const bodyChange = document.getElementById("mainBody");

// opens Project section (NEEDS animations)
function openProjects(){
    bodyChange.style.gridTemplateRows = "auto auto 1fr auto";
};

function openContact(){
    bodyChange.style.gridTemplateRows = "auto auto auto 1fr";   
};



// returns display when clicking link
// function returnHome()


// will make it work more dynamically in future update