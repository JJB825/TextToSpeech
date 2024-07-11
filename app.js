// SpeechSynthesisUtterance is a method that provides speech
const speech = new SpeechSynthesisUtterance();
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const select = document.getElementById('voice');

let voices = [];
window.speechSynthesis.onvoiceschanged = function () {
  // this statement will get all the voices available
  voices = window.speechSynthesis.getVoices();
  // default voice will be the first voice is list available
  speech.voice = voice[0];
  // the below statement provides the voices list as option in select area
  voices.forEach(function (voice, i) {
    select.options[i] = new Option(voice.name, i);
  });
};

// to change voice based upon the selected field
select.addEventListener('change', function () {
  speech.voice = voices[select.value];
});

btn.addEventListener('click', function () {
  // .text stores what text shall the speaker speak
  speech.text = text.value;
  // .speak method starts speaker speaking
  window.speechSynthesis.speak(speech);
});
