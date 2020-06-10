window.addEventListener("scroll", onViewportChange);
window.addEventListener("resize", onViewportChange);

document.addEventListener("DOMContentLoaded", () => {

});

function onViewportChange() {
    var windowHeight = window.innerHeight;
    var parallaxObjects = document.getElementsByClassName('parallax');
    var bound;
    for(i = 0; i < parallaxObjects.length; i++) {
        bound = parallaxObjects[i].getBoundingClientRect();
        parallaxObjects[i].style.objectPosition = "center " + 100 * bound.top / (windowHeight + bound.height) + "%";
    }
}