var SR = false;
function speech() {
  if (!SR) {
SR = true;
setCloud('type', '...'); var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition; var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList; var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent; var colors = [ 'katie', 'hey katie']; var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | '); var recognition = new SpeechRecognition(); var speechRecognitionList = new SpeechGrammarList(); speechRecognitionList.addFromString(grammar, 1); recognition.grammars = speechRecognitionList; recognition.continuous = false; recognition.lang = 'en-GB'; recognition.interimResults = false; recognition.maxAlternatives = 1; recognition.start(); console.log('Ready to receive a color command.'); recognition.onresult = function(event) { var color = event.results[0][0].transcript; setCloud('type', 'result'); setCloud('result', color); console.log('Result received: ' + color + '.'); SR = false;};recognition.onnomatch = function(event) { setCloud('type', 'error'); SR = false; }; recognition.onerror = function(event) { setCloud('type', 'error'); SR = false;}; setCloud('type', 'recording');
}
}
