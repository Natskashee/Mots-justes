var i = 0;

var images = ['https://images8.alphacoders.com/108/1081458.jpg', 'https://www.sortiraparis.com/images/80/66131/425559-my-hero-academia-en-avant-premiere-au-grand-rex.jpg', 'https://wallpapercave.com/wp/wp7170263.jpg', 'https://www.whatspaper.com/wp-content/uploads/2021/02/desktop-naruto-wallpaper-whatspaper.jpg'];
var time  = 3000;

function changeImg(){

    document.slide.src = images[i];
     
    if (i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload=changeImg; 