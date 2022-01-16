

const SpeechIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGRkZGIj48cGF0aCBkPSJNMTIgMTRjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNMMTUgNWMwLTEuNjYtMS4zNC0zLTMtM1M5IDMuMzQgOSA1djZjMCAxLjY2IDEuMzQgMyAzIDN6bTUuMy0zYzAgMy0yLjU0IDUuMS01LjMgNS4xUzYuNyAxNCA2LjcgMTFINWMwIDMuNDEgMi43MiA2LjIzIDYgNi43MlYyMWgydi0zLjI4YzMuMjgtLjQ4IDYtMy4zIDYtNi43MmgtMS43eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4K";
const SpeechMenu = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzc1NzU3NSI+CiAgICA8cGF0aCBkPSJNMTIgMTRjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNMMTUgNWMwLTEuNjYtMS4zNC0zLTMtM1M5IDMuMzQgOSA1djZjMCAxLjY2IDEuMzQgMyAzIDN6bTUuMy0zYzAgMy0yLjU0IDUuMS01LjMgNS4xUzYuNyAxNCA2LjcgMTFINWMwIDMuNDEgMi43MiA2LjIzIDYgNi43MlYyMWgydi0zLjI4YzMuMjgtLjQ4IDYtMy4zIDYtNi43MmgtMS43eiIvPgogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K";
var record = false;
var ready = false;
var listenFor = ' ';
var voice = ' ';
var recognition = ' ';
var LH = ' ';
var dictate = ' ';
var LIVEdictate = ' ';
var dictating = false;
var hatHeard = ' ';
var confidence;
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var recognitionLoaded = true
var noSpeechcontinues = 0
var speechError = false

var recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-GB';
recognition.interimResults = true;
recognition.maxAlternatives = 5;



  recognition.start();

var color

recognition.onresult = function(event) {
  noSpeechcontinues = 0
  speechError = false
  if (record) {
window.res = event
  }
   confidence = event.results[0][0].confidence;
    color = event.results[0][0].transcript;
    if (dictating) {
        LIVEdictate = dictate + ' ' + color;
    }
    if (record) {
        voice = color;

    }



}


recognition.onend = function() {


    if (record) {
if(noSpeechcontinues > 1 || !speechError){
if(!speechError){
        voice = color;
}
        record = false;
        ready = false;
}
    }

    listenFor = color;
    if (dictating) {
        dictate = dictate + ' ' + color;
    }
  recognition.stop();
if(recognitionLoaded){
try{

  recognition.start();
}catch(e){}
}
}

recognition.onnomatch = function(event) {

    if (record) {
        voice = '[Not Recognised]';
        record = false;
        ready = false;

    }


}

recognition.onerror = function(event) {

    if (record) {

if(event.error == 'no-speech'){

if(noSpeechcontinues + 1 > 1){

        voice = '[error]' + event.error;
        record = false;
        ready = false
noSpeechcontinues = 0
}else{

speechError = true
noSpeechcontinues++
record = true
ready = true
}
}else{

voice = '[error]' + event.error;
}
    }
}
window.addEventListener('onunload', function(){recognitionLoaded = false; recognition.stop(); recognition.abort(); return undefined;})

window.onbeforeunload = function() {
recognition.stop(); 
    return undefined;


}
class SpeechRecognitionC {
    constructor(runtime) {
        this.runtime = runtime
    }

    getInfo() {
        return {
            "id": "Speech",
            "name": "Speech To Text",
          
             "menuIconURI": SpeechMenu,
             "blockIconURI": SpeechIcon,
          
            "blocks": [
                {
                    "opcode": "record",
                    "blockType": "command",
                    "text": "listen",
                  

                },

                
                {
                    "opcode": "getVoice",
                    "blockType": "reporter",
                    "text": "speech",
                },

                                            {
                    "opcode": "listen",
                    "blockType": "hat",
                    "text": "when I hear [string]",
                     "arguments": {
                        "string": {
                            "type": "string",
                            "defaultValue": "let's go"
                            
                        },
                    },
                                            },

                                            {
                    "opcode": "heardHat",
                    "blockType": "reporter",
                    "text": "heard",
                  

                },

                {
                    "opcode": "dictation",
                    "blockType": "reporter",
                    "text": "dictation",
                },
                {
                    "opcode": "startDictate",
                    "blockType": "command",
                    "text": "start dictate",
                  

                },
                              {
                    "opcode": "stopDictate",
                    "blockType": "command",
                    "text": "stop dictate",
                  

                },

            ],

            "menus": {
                
            }     
        };
    }

    record() {
noSpeechcontinues = 0
speechError = false
return new Promise(resolve => {
  setTimeout(() => {
function checkFlag() {
    if(ready) {
       window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
    } else {

      resolve();
    }
}

 record = true; ready = true; 

checkFlag();


  });
        });
}


    getVoice() {
        let speech = voice;
        return speech;
    }

listen({string}) {
let heard = listenFor;
LH = listenFor;
listenFor = ' ';  
  if (heard.toLowerCase().includes(string.toLowerCase())) {hatHeard = heard;};
 return heard.toLowerCase().includes(string.toLowerCase());

}

dictation() {
return LIVEdictate;
}
startDictate() {
dictate = ' ';
dictating = true;
}
  stopDictate() {
dictating = false;
  }
  heardHat() {
   return hatHeard; 
  }

}
(function() {
    var extensionInstance = new SpeechRecognitionC(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()


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

populateVoiceList()
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak(text, callback){

    if (text !== '') {
    var utterThis = new SpeechSynthesisUtterance(text);
    utterThis.onend = function (event) {
        setCloud('synthesis over?', true);
    }
    utterThis.onerror = function (event) {
        setCloud('synthesis over?', true);
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
