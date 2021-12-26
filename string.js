


class StringManipulation {
    constructor(runtime) {
        this.runtime = runtime
    }

    getInfo() {
        return {
            "id": "StringManipulation",
            "name": "String Manipulation",
          
          
            "blocks": [
                {
                    "opcode": "canvasStyle",
                    "blockType": "command",
                    "text": "set stage effect [effect] to [value]",
                    "arguments": {
                        "effect": {
                            "type": "string",
                            "defaultValue": "blur",
                            "menu": "effects",
                        },
                        "value": {
                            "type": "string",
                            "defaultValue": "1",
                        },
                    },
                },
                {
                    "opcode": "effect",
                    "blockType": "reporter",
                    "text": "effect [effect]",
                    "arguments": {
                        "effect": {
                            "type": "string",
                            "defaultValue": "blur",
                          "menu": "effects"
                        },
                },
                },
                {
                    "opcode": "clear",
                    "blockType": "command",
                    "text": "clear stage effects",
                   

                },


            ],

            "menus": {}     
        };
    }

    canvasStyle({effect, value}) {

        setCanvas(effect, value)
        
    }

    effect({effect}) {
        return eval(effect)
    }
    clear(){
blur = 0
brightness = 1
contrast = 1
greyscale = 0
hue = 0
invert = 0
saturate = 1
sepia = 0
updateCanvas()
    }

}

(function() {
    var extensionInstance = new StringManipulation(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
