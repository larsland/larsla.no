var btn = document.getElementById('post-btn');
var form = document.getElementById('submit-container');

function toggle() {
    form.style.display = form.style.display == "block" ? "none" : "block";
}

btn.addEventListener('click', function(e) {
    e.preventDefault();
    toggle();
})
