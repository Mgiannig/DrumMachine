//This app takes the keyvalue as input.

function playSound(e) {
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) return; //Stops the function if there's no key associated with our keyboard input
    audio.currentTime = 0; //this replays the sound if we hit the key over and over
    audio.play();
    
    key.classList.add('playing');

}

function removeTransition(e) {
    
    if(e.propertyName !== 'transform'){
        return; //skip if it's not a transform
    }
    this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound); 
