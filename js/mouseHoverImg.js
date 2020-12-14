var workEl = document.querySelector(".img-wrap"),
    workImgEl = document.querySelectorAll("img"),
    degree = 10;

    console.log(workImgEl);

function onMouseMove(e){
    var x = e.clientX - workEl.getBoundingClientRect().left + window.pageXOffset,
        y = e.clientY - workEl.getBoundingClientRect().top + window.pageYOffset,
        rotX = getRange(y, 0, e.currentTarget.getBoundingClientRect().height, degree * -1, degree),
        rotY = getRange(x, 0, e.currentTarget.getBoundingClientRect().width, degree * -1, degree);
    gsap.killTweensOf(workImgEl);
    gsap.to(workImgEl, {rotationX: rotX, rotationY: rotY, duration: 0.2});
}

function onMouseLeave(e) {
    gsap.killTweensOf(workImgEl);
    gsap.to(workImgEl, {rotationX: 0, rotationY: 0, duration: 0.4, ease: "sine.out"});
}

function getRange(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function addEvent() {
    // for(var i = 0; i < workEl.length; i++){
    //     workEl[i].addEventListener("mousemove", onMouseMove);
    //     workEl[i].addEventListener("mouseleave", onMouseLeave);
    // }
    workEl.addEventListener("mousemove", onMouseMove);
    workEl.addEventListener("mouseleave", onMouseLeave);
}
function init() {
    addEvent();
}
init();

