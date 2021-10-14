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

                {
                    "opcode": "download",
                    "blockType": "command",
                    "text": "download [text] as [filename]",
                    "arguments": {
                        "text": {
                            "type": "string",
                            "defaultValue": "Hello World!"
                        },
                        "filename": {
                            "type": "string",
                            "defaultValue": "file.txt"
                        },
                    },

                },
                {
                    "opcode": "downloadBin",
                    "blockType": "command",
                    "text": "download binary [text] as [filename]",
                    "arguments": {
                        "text": {
                            "type": "string",
                            "defaultValue": "data:text/plain;base64,SGVsbG8gV29ybGQh"
                        },
                        "filename": {
                            "type": "string",
                            "defaultValue": "file.txt"
                        },
                    },

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
download({text, filename}) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
downloadBin({text, filename}) {

    const linkSource = `${text}`;
    const downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);
    downloadLink.href = linkSource;
    downloadLink.target = '_self';
    downloadLink.download = filename;
    downloadLink.click();

}
}

(function() {
    var extensionInstance = new Beta(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
