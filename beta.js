
class SpeechRecognition {
    constructor(runtime) {
        this.runtime = runtime
    }

    getInfo() {
        return {
            "id": "Beta",
            "name": "Beta",
          

          
            "blocks": [
                {
                    "opcode": "do",
                    "blockType": "c",
                    "text": "do",
                  

                },


            ],

            "menus": {
                
            }     
        };
    }

do() {
 return true; 
}
}

(function() {
    var extensionInstance = new SpeechRecognition(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
