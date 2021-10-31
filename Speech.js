const SpeechIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGRkZGIj48cGF0aCBkPSJNMTIgMTRjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNMMTUgNWMwLTEuNjYtMS4zNC0zLTMtM1M5IDMuMzQgOSA1djZjMCAxLjY2IDEuMzQgMyAzIDN6bTUuMy0zYzAgMy0yLjU0IDUuMS01LjMgNS4xUzYuNyAxNCA2LjcgMTFINWMwIDMuNDEgMi43MiA2LjIzIDYgNi43MlYyMWgydi0zLjI4YzMuMjgtLjQ4IDYtMy4zIDYtNi43MmgtMS43eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4K";
const SpeechMenu = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzc1NzU3NSI+CiAgICA8cGF0aCBkPSJNMTIgMTRjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNMMTUgNWMwLTEuNjYtMS4zNC0zLTMtM1M5IDMuMzQgOSA1djZjMCAxLjY2IDEuMzQgMyAzIDN6bTUuMy0zYzAgMy0yLjU0IDUuMS01LjMgNS4xUzYuNyAxNCA2LjcgMTFINWMwIDMuNDEgMi43MiA2LjIzIDYgNi43MlYyMWgydi0zLjI4YzMuMjgtLjQ4IDYtMy4zIDYtNi43MmgtMS43eiIvPgogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K";
var record = false;
var ready = false;
var word = ' ';
var listenFor = ' ';
var SR = false;
var voice = ' ';
var recognition = ' ';
var LH = ' ';
var dictate = ' ';
var dictating = false;
var hatHeard = ' ';

function speech(lfor) {
  if (!SR) {
SR = true;
return new Promise(function(resolve, reject) {
   if ( record) {ready = true;}
var using = record;
 var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition; var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList; var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent; var colors = [ lfor]; var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | '); recognition = new SpeechRecognition(); var speechRecognitionList = new SpeechGrammarList(); speechRecognitionList.addFromString(grammar, 1); recognition.grammars = speechRecognitionList; recognition.continuous = false; recognition.lang = 'en-GB'; recognition.interimResults = false; recognition.maxAlternatives = 1; recognition.start(); recognition.onresult = function(event) { var color = event.results[0][0].transcript; if ( using ) {voice = color; record = false; ready = false;} listenFor = color; if (dictating) {dictate = dictate + color;} resolve(color);  SR = false; speech(word);  word = ' ';};recognition.onnomatch = function(event) {  resolve('[error]'); SR = false; if ( using ) {voice = '[Not Recognised]'; record = false; ready = false;}  speech(word); word = ' '; resolve(voice)}; recognition.onerror = function(event) {  resolve('[error]'); if ( using ) {voice = '[error]' + event.error; record = false; ready = false} SR = false; ; speech(word); word = ' '; resolve(voice);};
});
} else {
  return new Promise(function(resolve, reject) {
  if(!listenFor == ' ') {
LH = listenFor;
  }
resolve(LH);
    });
}
}


speech();
class SpeechRecognition {
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
                    "opcode": "hear",
                    "blockType": "command",
                    "text": "listen for [text]",
                     "arguments": {
                        "text": {
                            "type": "string",
                            "defaultValue": "hey alexa"
                            
                        },
                    },

                },
                
                {
                    "opcode": "getVoice",
                    "blockType": "reporter",
                    "text": "speech",
                },
                                            {
                    "opcode": "recording",
                    "blockType": "Boolean",
                    "text": "recording?",

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
return new Promise(resolve => {
setTimeout(() => {
function checkFlag() {
    if(ready) {
       window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
    } else {
      resolve();
    }
}
function checkBegin() {
    if(!ready) {
       window.setTimeout(checkBegin, 100); /* this checks the flag every 100 milliseconds*/
    } else {
      checkFlag()
    }
}
checkBegin();
record = true;
recognition.stop(); SR = false; speech(word);
});
        });


        

    }
hear({text}) {

return new Promise(resolve => {
  setTimeout(() => {
function checkFlag() {
    if(ready) {
       window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
    } else {
      resolve();
    }
}
function checkBegin() {
    if(!ready) {
       window.setTimeout(checkBegin, 100); /* this checks the flag every 100 milliseconds*/
    } else {
      checkFlag()
    }
}
checkBegin();
record = true;
  word = text;
recognition.stop(); SR = false; speech(word);
  });
        });

}


    getVoice() {
        let speech = voice;
        return speech;
    }
  recording() {
   let recording = ready;
    return recording;
  }
listen({string}) {
let heard = listenFor;
LH = listenFor;
listenFor = ' ';  
  if (heard.toLowerCase().includes(string.toLowerCase())) {hatHeard = heard;};
 return heard.toLowerCase().includes(string.toLowerCase());

}

dictation() {
return dictate;
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
    var extensionInstance = new SpeechRecognition(window.vm.extensionManager.runtime)
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

populateVoiceList();
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
