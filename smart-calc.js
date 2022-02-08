var smartCache = []
class smartCalc {
    constructor(runtime) {
        this.runtime = runtime
    }

    getInfo() {
        return {
            "id": "smartCalc",
            "name": "xOperators",
         
          
            "blocks": [
                {
                    "opcode": "add",
                    "blockType": "reporter",
                    "text": "[p1]+[p2]",
                    "arguments": {
                        "p1": {
                            "type": "number",
                            "defaultValue": "",
                        },
                        "p2": {
                            "type": "number",
                            "defaultValue": "",
                        },

                    },
                },
                
                    "opcode": "subtract",
                    "blockType": "reporter",
                    "text": "[p1]-[p2]",
                    "arguments": {
                        "p1": {
                            "type": "number",
                            "defaultValue": "",
                        },
                        "p2": {
                            "type": "number",
                            "defaultValue": "",
                        },

                    },
                },
                
                    "opcode": "multiply",
                    "blockType": "reporter",
                    "text": "[p1]*[p2]",
                    "arguments": {
                        "p1": {
                            "type": "number",
                            "defaultValue": "",
                        },
                        "p2": {
                            "type": "number",
                            "defaultValue": "",
                        },

                    },
                },
                    "opcode": "divide",
                    "blockType": "reporter",
                    "text": "[p1]/[p2]",
                    "arguments": {
                        "p1": {
                            "type": "number",
                            "defaultValue": "",
                        },
                        "p2": {
                            "type": "number",
                            "defaultValue": "",
                        },

                    },
                },
                
            ],

            "menus": {
                "effects": {
                    acceptReporters: true, 
                    items: [{text:"blur",value:"blur"}, {text:"brightness",value:"brightness"}, {text:"contrast",value:"contrast"}, {text:"greyscale",value:"greyscale"}, {text:"hue",value:"hue"}, {text:"invert",value:"invert"}, {text:"saturate",value:"saturate"}, {text:"sepia",value:"sepia"}],
                }
            }     
        };
    }

   

}

(function() {
    var extensionInstance = new smartCalc(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
