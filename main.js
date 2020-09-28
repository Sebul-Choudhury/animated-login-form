const inputs = document.querySelectorAll(".input");


function addClick(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function removeClick(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addClick);
	input.addEventListener("blur", removeClick);
});