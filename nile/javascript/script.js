//************************************************************* Button Top *****************************************************//
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//************************************************************* End Button Top *****************************************************//


//************************************************************ Image Gallery ************************************************//

// IMAGE SLIDES & CIRCLES ARRAYS, & COUNTER
var imageSlides = document.getElementsByClassName('imageSlides');
var circles = document.getElementsByClassName('circle');
var leftArrow = document.getElementById('leftArrow');
var rightArrow = document.getElementById('rightArrow');
var counter = 0;

// HIDE ALL IMAGES FUNCTION
function hideImages() {
    for (var i = 0; i < imageSlides.length; i++) {
        imageSlides[i].classList.remove('visible');
    }
}

// REMOVE ALL DOTS FUNCTION
function removeDots() {
    for (var i = 0; i < imageSlides.length; i++) {
        circles[i].classList.remove('dot');
    }
}

// SINGLE IMAGE LOOP/CIRCLES FUNCTION
function imageLoop() {
    var currentImage = imageSlides[counter];
    var currentDot = circles[counter];
    currentImage.classList.add('visible');
    removeDots();
    currentDot.classList.add('dot');
    counter++;
}

// LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
function arrowClick(e) {
    var target = e.target;
    if (target == leftArrow) {
        clearInterval(imageSlideshowInterval);
        hideImages();
        removeDots();
        if (counter == 1) {
            counter = (imageSlides.length - 1);
            imageLoop();
            imageSlideshowInterval = setInterval(slideshow, 10000);
        } else {
            counter--;
            counter--;
            imageLoop();
            imageSlideshowInterval = setInterval(slideshow, 10000);
        }
    } else if (target == rightArrow) {
        clearInterval(imageSlideshowInterval);
        hideImages();
        removeDots();
        if (counter == imageSlides.length) {
            counter = 0;
            imageLoop();
            imageSlideshowInterval = setInterval(slideshow, 10000);
        } else {
            imageLoop();
            imageSlideshowInterval = setInterval(slideshow, 10000);
        }
    }
}

leftArrow.addEventListener('click', arrowClick);
rightArrow.addEventListener('click', arrowClick);


// IMAGE SLIDE FUNCTION
function slideshow() {
    if (counter < imageSlides.length) {
        imageLoop();
    } else {
        counter = 0;
        hideImages();
        imageLoop();
    }
}

// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
setTimeout(slideshow, 1000);
var imageSlideshowInterval = setInterval(slideshow, 10000);

//************************************************************ End Image Gallery ************************************************//


//************************************************************* Parallax ********************************************************//
const body = document.body;
const content = document.querySelector('.js-content');
const blocks = document.querySelectorAll('.block');

const updateOffset = () => {
    requestAnimationFrame(updateOffset);
    body.style.setProperty('--y', content.scrollTop);
    updateProps();
}

const updateProps = () => {
    let i = -1;
    for (let block of blocks) {
        i += 1;
        let top = blocks[i].getBoundingClientRect().top;
        if (top < window.innerHeight * 1.3 && top > window.innerHeight * -1.3) {
            body.style.setProperty(`--yBlock-${i+1}`, top);
        } else {
            body.style.setProperty(`--yBlock-${i+1}`, 0);
        }
    }
}

updateProps();
updateOffset();
//************************************************************* End Parallax *****************************************************//