menu.onclick = function myFunction() {
	var x = document.getElementById('drop-menu');
	
	if (x.className == 'nav') {
		x.className += ' drop';
	} else {
		x.className = 'nav';
	}
	
}