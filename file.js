const images = ["one.png","two.png","three.jpeg"]
const element = document.querySelector('body')
let x=  Math.floor(Math.random()*3)
console.log(images[x])
element.style.backgroundImage = `url(images/${images[x]})`;


