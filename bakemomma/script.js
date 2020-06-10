
window.addEventListener("resize", onWindowResize);
window.addEventListener("scroll", onViewportChange);

document.addEventListener("DOMContentLoaded", () => {
    onWindowResize();
});

var windowHeight;

function onWindowResize() {
    windowHeight = window.innerHeight;
    onViewportChange();
}

function onViewportChange() {
    var parallaxObjects = document.getElementsByClassName('parallax');
    var bound;
    for(i = 0; i < parallaxObjects.length; i++) {
        bound = parallaxObjects[i].getBoundingClientRect();
        parallaxObjects[i].style.objectPosition = "center " + 100 * bound.top / (windowHeight + bound.height) + "%";
    }
}