const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("");

let callback = (event) => {
    for(let i=0; i<buttons.length; i++) {
        if(event.key === keys[i]) {
             buttons[i].classList.add('keyboard__btn--active');
             setTimeout(() => buttons[i].classList.remove('keyboard__btn--active'),200);
             if(document.querySelector('#slideThree').checked){
                 playSound(buttons[i].getAttribute('data-note'));
             }
        }
    }
}
window.addEventListener("keydown", callback);