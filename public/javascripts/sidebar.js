var box1 = document.getElementById('box1').style
var box2 = document.getElementById('box"').style
var click1 = document.getElementById('borderTop1')
var click2 = document.getElementById('borderTop2')


function hide1() {
	box1.display = 'none'
}
function hide2() {
	box2.display = 'none'
}

function show1() {
	box1.display = 'block'
}
function show2() {
	box2.display='block'
}

click1.addEventListener('click', function() {
	if (box1.display == 'none') {
		show1()
	}
	else {
		hide1()
	}
})
