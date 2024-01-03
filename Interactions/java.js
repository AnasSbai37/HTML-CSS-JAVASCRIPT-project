var i = 0;
var images = [];
var time = 2000;

images[0] = "../Images/img1.jpg";
images[1] = "../Images/img2.jpg";
images[2] = "../Images/img3.jpg";
images[3] = "../Images/img4.jpg";

function changeImg() {
  document.diap.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;
