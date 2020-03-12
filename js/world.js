let svg = document.getElementById("mySvg")
let animate = document.createElementNS("http://www.w3.org/2000/svg","animate");
animate.setAttribute("repeatCount", "indefinite");
animate.setAttribute("dur", "60s")
animate.setAttribute("attributeName", "viewBox")
svg.appendChild(animate)
animate.beginElement()
const resizeSvg = () => {
    if(window.innerWidth > 900) {
    animate.setAttribute("values", "0 100 1200 800; 800 100 1200 800; 0 100 1200 800;")
    } else {
    animate.setAttribute("values", "0 200 900 600; 800 180 1200 600; 0 180 1200 600;")
    }
}

resizeSvg()

window.onresize = function(){
    resizeSvg()
}

document.getElementById('mySvg').addEventListener('load',function(){
    var svgDoc = document.getElementById('mySvg').contentDocument
    console.log(svgDoc)
  })



