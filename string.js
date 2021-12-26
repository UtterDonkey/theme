


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
                    "opcode": "occurrence",
                    "blockType": "reporter",
                    "text": "split index: [occurrence] deliminator: [value] string: [string]",
                    "arguments": {
                        "occurrence": {
                            "type": "string",
                            "defaultValue": "2",
                        },
                        "value": {
                            "type": "string",
                            "defaultValue": "hi",
                        },
                        "string": {
                            "type": "string",
                            "defaultValue": "hi there. That plane is flying high",
                        },
                    },
                },
                


            ],

            "menus": {}     
        };
    }

occurrence({occurrence, value, string}){
return string.split(value)[parseInt(occurrence) - 1]
}
}
(function() {
    var extensionInstance = new StringManipulation(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
