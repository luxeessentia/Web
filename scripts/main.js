// Simple carousel initializer
document.addEventListener("DOMContentLoaded", function () {
  const bagSlides = [
    { src: "public/images/orange-white-plush-front.jpg", alt: "Orange & White Plush Bag" }
    // You can add more featured product objects here if you want to expand
  ];
  const carouselBags = document.getElementById("carousel-bags");

  bagSlides.forEach(item => {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    carouselBags.appendChild(img);
  });
});

// Swap main product image when thumbnail clicked
function swapImage(newSrc) {
  document.getElementById("main-image").src = newSrc;
}
