var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if(mySrc === "images/sky.jpg") {
        myImage.setAttribute ("src", "images/sunrise-sky.jpg")
    } else {
        myImage.setAttribute ("src", "images/sky.jpg");
    }
}

