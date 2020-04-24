let svg = document.getElementById("mySvg")
let animate = document.createElementNS("http://www.w3.org/2000/svg","animate");
animate.setAttribute("repeatCount", "indefinite");
animate.setAttribute("dur", "56s")
animate.setAttribute("attributeName", "viewBox")
svg.appendChild(animate)
animate.beginElement()

const resizeSvg = () => {
    animate.setAttribute("values", `0 100 ${window.innerWidth} 750; 700 100 ${window.innerWidth} 750; 0 100 ${window.innerWidth} 750;`)
}

resizeSvg()

window.onresize = function(){
    resizeSvg()
}

let colors = ['red !important','yellow !important','green !important'];

let allPaths = document.querySelectorAll('#US');

allPaths.forEach(function (path) {
    path.style.fill = colors[Math.floor(Math.random() * colors.length)];
});

// document.getElementById('mySvg').addEventListener('load',function(){
//     var svgDoc = document.getElementById('mySvg').contentDocument
//   })



