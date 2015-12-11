var box1 = document.getElementById('box1').style
var click1 = document.getElementById('borderTop1')


function hide1() {
	box1.display = 'none'
}

function show1() {
	box1.display = 'block'
}

click1.addEventListener('click', function() {
	if (box1.display == 'none') {
		show1()
	}
	else {
		hide1()
	}
})

