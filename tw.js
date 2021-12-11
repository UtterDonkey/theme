window.keyPressed = '';
window.onkeydown = e => window.keyPressed = e.key;
class tw {
    constructor(runtime) {
        this.runtime = runtime
    }

    getInfo() {
        return {
            "id": "tw",
            "name": "tw",
            "color1": "#FF4C4C",
            "color2": "#FF4C4C",
            "color3": "#FF4C4C",
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
