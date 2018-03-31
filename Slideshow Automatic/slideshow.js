var sliderPhotos = document.getElementById("Photos");

var imageArray = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"];

var imageIndex = 0;
function autoSlide()
{
	Photos.setAttribute("src", imageArray[ imageIndex]);
	imageIndex++;
	if(imageIndex >= imageArray.length){
	imageIndex=0;
	}
}

var intervalHandle = setInterval(autoSlide,2000);
Photos.onclick = function()
{
	clearInterval(intervalHandle);
}
