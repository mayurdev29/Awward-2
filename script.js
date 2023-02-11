Splitting();
let cursor = document.querySelector('.cursor');
cursorText = document.querySelectorAll('.char')

function roundedText(radius) {
    for (i = 0; i < cursorText.length; i++) {
        let rotation = i * (360 / cursorText.length);
        gsap.set(cursorText[i], {
            transformOrigin: `0px ${radius}px`,
            x: 100,
            rotate: rotation
        })
        gsap.set(cursor, {
            transformOrigin: `center center`,
            rotation: 0,
            width: radius * 2,
            height: radius * 2
        })
    }
    let rotate = gsap.timeline({ repeat: -1 })
    rotate.to(cursor, {
        rotation: 360,
        duration: 5,
        ease: 'none'
    })
}


let radius = 90;





function cursorMove(e) {
    var mouseX = e.clientX,
        mouseY = e.clientY
    tl = gsap.timeline();
    tl.to(cursor, {
        duration: .01,
        x: mouseX - radius,
        y: mouseY - radius,
        ease: Expo.ease
    })
}
function init() {
    roundedText(radius);
    window.addEventListener("mousemove", cursorMove);
}

window.addEventListener("load", function () {
    init();
})