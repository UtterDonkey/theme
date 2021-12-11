

window.onkeydown = e => window.keyPressed = e.key;
class tw {
    constructor(runtime) {
        this.runtime = runtime
    }

    tw() {
        return {
            "id": "tw",
            "name": "tw",
          
          
            "blocks": [
                {
                    "opcode": "key",
                    "blockType": "reporter",
                    "text": "last key pressed",

                },
                
            ],
    
        };
    }

key(){
return keyPressed;
}
}

(function() {
    var extensionInstance = new tw(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
