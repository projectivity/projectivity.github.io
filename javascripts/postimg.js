document.addEventListener("DOMContentLoaded", function(event) {
	var imageList = document.getElementsByTagName( ':not(a) > img:not([src*="playbutton"])' );
	var i;
	for (i = 0; i < imageList.length; i++)
	{
		imageList[i].setAttribute( 'data-jslghtbx-group', 'post' );
		imageList[i].className += " jslghtbx-thmb";
	}
});
