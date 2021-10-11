var SR = false;
function speech() {
  if (!SR) {
SR = true;
setCloud('type', '...'); var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition; var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList; var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent; var colors = [ 'katie', 'hey katie']; var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | '); var recognition = new SpeechRecognition(); var speechRecognitionList = new SpeechGrammarList(); speechRecognitionList.addFromString(grammar, 1); recognition.grammars = speechRecognitionList; recognition.continuous = false; recognition.lang = 'en-GB'; recognition.interimResults = false; recognition.maxAlternatives = 1; recognition.start(); console.log('Ready to receive a color command.'); recognition.onresult = function(event) { var color = event.results[0][0].transcript; setCloud('type', 'result'); setCloud('result', color); console.log('Result received: ' + color + '.'); SR = false;};recognition.onnomatch = function(event) { setCloud('type', 'error'); SR = false; }; recognition.onerror = function(event) { setCloud('type', 'error'); SR = false;}; setCloud('type', 'recording');
}
}
var synth = window.speechSynthesis;
var voices = [];

function populateVoiceList() {
  voices = synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
      if ( aname < bname ) return -1;
      else if ( aname == bname ) return 0;
      else return +1;
  });



}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak(text){

    if (text !== '') {
    var utterThis = new SpeechSynthesisUtterance(text);
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }
    var selectedOption = 'Microsoft Sonia Online (Natural) - English (United Kingdom)';
    for(i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
  }
}
