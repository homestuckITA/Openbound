function toggleSpoilers() {
  button = document.getElementsByName('showSpoilers')[0];
  spoilers = button.parentNode.parentNode.getElementsByClassName('spoilers')[0];
  if(spoilers.classList.toggle('hidden')){
    button.firstChild.data = "Mostra Istruzioni"
  } else {
    button.firstChild.data = "Nascondi Istruzioni"
  }
  return false;
}
