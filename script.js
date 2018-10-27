var nav = document.getElementById('skills');
var distanceToTop = window.pageYOffset + nav.getBoundingClientRect().top;

// fix nav to top of page on scroll
window.onscroll = function changeClass() {
	var scrollPosY = window.pageYOffset | document.body.scrollTop;
	var header = document.getElementById('header');

	if(scrollPosY > (distanceToTop - 80)) {
		header.className = ('header header--float');
	} else  {
		header.className = ('header');
	}
}

var scrollToDiv = document.getElementById('skills');
var distanceToTop = scrollToDiv.getBoundingClientRect().top;
var hero = document.getElementById('card');

window.addEventListener('scroll', function() {
    var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currScrollPos2 > 0) {
      var poop = document.getElementById('card').style.opacity = -currScrollPos2 / 1000 + 1;
	  var test = hero.style.webkitTransform = "translateY(" + (-currScrollPos2 / 20 + 2) + 'px' + ")"; 
    } 
    
  }
);