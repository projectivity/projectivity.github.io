document.addEventListener("DOMContentLoaded", function(event) {
	var imageList = document.getElementsByTagName( 'img' );
	var i;
	for (i = 0; i < imageList.length; i++)
	{
		imageList[i].setAttribute( 'data-jslghtbx' );
		imageList[i].setAttribute( 'data-jslghtbx-group', 'post' );
	}
});
