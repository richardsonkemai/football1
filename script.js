// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	document.getElementById("ramspic").classList.add("opaque");
	document.getElementById("patspic").classList.add("opaque");	
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	document.getElementById("pats-column").classList.remove("pats-silver");
	document.getElementById("rams-column").classList.remove("rams-blue");
	
}

function showTrophy(el){
	document.getElementById("ramspic").src = "images/lombardi_trophy.png";
	document.getElementById("patspic").src = "images/lombardi_trophy.png";
	document.getElementById("nopic").src = "images/lombardi_trophy.png";
}
