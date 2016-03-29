var submitBtn = document.getElementById('submit-btn');

checkPost = function() {
	var title = document.getElementById('titleField').value;
	var content = document.getElementById('contentField').value;

	if ((title === "") || (content === "")) {
		alert("Title or content fields are empty!");
	}
}

submitBtn.addEventListener('click', checkPost)