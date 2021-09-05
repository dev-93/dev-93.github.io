const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const ragImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src=`/src/public/${ragImage}`;


const body = document.querySelector("body");
body.appendChild(bgImg);