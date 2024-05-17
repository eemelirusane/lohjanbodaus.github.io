$(".sidebar ul li").on('click', function () {
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClass('active');
});

$('.open-btn').on('click', function () {
    $('.sidebar').addClass('active');

});


$('.close-btn').on('click', function () {
    $('.sidebar').removeClass('active');

})
console.log("Moi Kaverit!!!")

//Kuva Slideshown js

//Vaihtaa kuinka kauan yksi kuva on näkyvilläconst SLIDE_DURATION = 5000; // 5 sekunttia
const SLIDE_INTERVAL = 5000; // 5 sekunttia

let slideIndex = 1;
let slideshowInterval;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Vaihtaa automaattisesti kuvaa
function startSlideshow() {
  slideshowInterval = setInterval(() => {
    plusSlides(1);
  }, SLIDE_INTERVAL);
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}

startSlideshow();

//Kuva Slideshown js loppuu