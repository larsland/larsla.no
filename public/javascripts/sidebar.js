var box = document.getElementById('box').style
var click = document.getElementById('borderTop')

function hide() {
	box.display = 'none'
}

function show() {
	box.display = 'block'
}

click.addEventListener('click', function() {
	if (box.display == 'none') {
		show()
	}
	else {
		hide()
	}
})
