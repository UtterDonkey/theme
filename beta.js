
class Beta {
    constructor(runtime) {
        this.runtime = runtime
    }

    getInfo() {
        return {
            "id": "Beta",
            "name": "Beta",
            color1: '#00000000',
            color2: '#00000000',
          

          
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
    var extensionInstance = new Beta(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
