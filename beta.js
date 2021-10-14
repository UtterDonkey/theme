var upload = ' ';
var binUpload = ' ';
class Beta {
    constructor(runtime) {
        this.runtime = runtime
    }

    getInfo() {
        return {
            "id": "Beta",
            "name": "Beta",
            color1: '#000000',
            color2: '#000000',
          

          
            "blocks": [
                {
                    "opcode": "do",
                    "blockType": "command",
                    "text": "do [string]",
                    "arguments": {
                        "string": {
                            "type": "string",
                            "defaultValue": "alert('hell0')"
                        },
                    },

                },
                {
                    "opcode": "upload",
                    "blockType": "reporter",
                    "text": "upload",


                },
                {
                    "opcode": "doUpload",
                    "blockType": "command",
                    "text": "upload",


                },
                {
                    "opcode": "binUpload",
                    "blockType": "reporter",
                    "text": "binary upload",


                },
                {
                    "opcode": "doBinUpload",
                    "blockType": "command",
                    "text": "binary upload",


                },


            ],

            "menus": {
                
            }     
        };
    }

do({string}) {
 return new Function(string)();
}
upload() {
return upload;
}
doUpload() {
upload = showOpenFilePicker().then(([handle]) => handle.getFile()).then(file => file.text());
}
doBinUpload() {
function getBase64(file) {
binUpload = 'Uploading...';
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        binUpload = reader.result;
    };
}
var file = showOpenFilePicker().then(([handle]) => handle.getFile()).then(file => getBase64(file));
}
binUpload() {
return binUpload;
}
}

(function() {
    var extensionInstance = new Beta(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
