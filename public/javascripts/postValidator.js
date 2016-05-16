var submitBtn = document.getElementById('submit-btn');
var postArticleForm = document.getElementById('submit-container');

checkPost = function() {
	var title = document.getElementById('titleField').value;
	var content = document.getElementById('contentField').value;

	if ((title === "") || (content === "")) {
		alert("Title or content fields are empty!");
	}

	postArticleForm.style.display = postArticleForm.style.display == "block" ? "none" : "block";
}

submitBtn.addEventListener('click', checkPost)
