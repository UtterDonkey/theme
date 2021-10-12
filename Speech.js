const SpeechIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGRkZGIj48cGF0aCBkPSJNMTIgMTRjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNMMTUgNWMwLTEuNjYtMS4zNC0zLTMtM1M5IDMuMzQgOSA1djZjMCAxLjY2IDEuMzQgMyAzIDN6bTUuMy0zYzAgMy0yLjU0IDUuMS01LjMgNS4xUzYuNyAxNCA2LjcgMTFINWMwIDMuNDEgMi43MiA2LjIzIDYgNi43MlYyMWgydi0zLjI4YzMuMjgtLjQ4IDYtMy4zIDYtNi43MmgtMS43eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4K";
const SpeechMenu = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzc1NzU3NSI+CiAgICA8cGF0aCBkPSJNMTIgMTRjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNMMTUgNWMwLTEuNjYtMS4zNC0zLTMtM1M5IDMuMzQgOSA1djZjMCAxLjY2IDEuMzQgMyAzIDN6bTUuMy0zYzAgMy0yLjU0IDUuMS01LjMgNS4xUzYuNyAxNCA2LjcgMTFINWMwIDMuNDEgMi43MiA2LjIzIDYgNi43MlYyMWgydi0zLjI4YzMuMjgtLjQ4IDYtMy4zIDYtNi43MmgtMS43eiIvPgogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K";
var SR = false;
var voice = ' ';
function speech(lfor) {
  if (!SR) {
SR = true;
return new Promise(function(resolve, reject) {
   

 var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition; var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList; var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent; var colors = [ lfor]; var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | '); var recognition = new SpeechRecognition(); var speechRecognitionList = new SpeechGrammarList(); speechRecognitionList.addFromString(grammar, 1); recognition.grammars = speechRecognitionList; recognition.continuous = false; recognition.lang = 'en-GB'; recognition.interimResults = false; recognition.maxAlternatives = 1; recognition.start(); recognition.onresult = function(event) { var color = event.results[0][0].transcript; voice = color; resolve(color); SR = false;};recognition.onnomatch = function(event) { voice = '[error]'; resolve(color); SR = false; }; recognition.onerror = function(event) { voice = '[error]'; resolve(color); SR = false;};
});
}
}
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

            ],

            "menus": {
                
            }     
        };
    }

    record() {

        speech();
        

    }
hear({text}) {
       speech(text);
}


    getVoice() {
        let speech = voice;
        return speech;
    }

}

(function() {
    var extensionInstance = new SpeechRecognition(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
