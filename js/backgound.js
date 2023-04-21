const bgImages = document.querySelector("#bgImags");
const images = ["img_1.jpg", "img_2.jpeg", "img_3.jpeg", "img_4.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImages.appendChild(bgImage);
