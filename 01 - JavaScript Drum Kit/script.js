const keys = Array.from(document.getElementsByClassName('key'))

const playSound = (event) => {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`) //find the key div with the matching keycode
  const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`) //find the audio with the matching keycode

  if (!sound) return //do nothing if there isn't a matching sound

  animate(key) //animate the key
  sound.play() //play the sound

}

const animate = (key) => {
  key.classList.add('playing') //give the key the playing class
}

const endAnimation = (key) => {
  key.classList.remove('playing') //remove the playing class
}

keys.forEach((key) => addEventListener('transitionend', () => endAnimation(key))) //add transitionend listener to remove the playing class on each key

document.addEventListener('keydown', () => playSound(event)) //keydown listener on entire document
