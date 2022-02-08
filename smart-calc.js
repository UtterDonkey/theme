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
                {
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
                    {
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
                    {
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

   add({p1, p2}){
let d1 = p1 > p2 ? p2 : p1;
let d2 = p1 < p2 ? p2 : p1;
d1 = parseFloat(d1);
d2 = parseFloat(d2);
let operation = `${d1}+${d2}`
if(smartCache.indexOf(operation) > -1){
return smartCache[smartCache.indexOf(operation) + 1];
}else{
let result = d1+d2;
smartCache.push(operation);
smartCache.push(result);
return result;
}
}
subtract({p1, p2}){
let d1 = p1;
let d2 = p2;
d1 = parseFloat(d1);
d2 = parseFloat(d2);
let operation = `${d1}-${d2}`
if(smartCache.indexOf(operation) > -1){
return smartCache[smartCache.indexOf(operation) + 1];
}else{
let result = d1-d2;
smartCache.push(operation);
smartCache.push(result);
return result;
}
}
multiply({p1, p2}){
let d1 = p1 > p2 ? p2 : p1;
let d2 = p1 < p2 ? p2 : p1;
d1 = parseFloat(d1);
d2 = parseFloat(d2);
let operation = `${d1}*${d2}`
if(smartCache.indexOf(operation) > -1){
return smartCache[smartCache.indexOf(operation) + 1];
}else{
let result = d1*d2;
smartCache.push(operation);
smartCache.push(result);
return result;
}
}
divide({p1, p2}){
let d1 = p1;
let d2 = p2;
d1 = parseFloat(d1);
d2 = parseFloat(d2);
let operation = `${d1}/${d2}`
if(smartCache.indexOf(operation) > -1){
return smartCache[smartCache.indexOf(operation) + 1];
}else{
let result = d1/d2;
smartCache.push(operation);
smartCache.push(result);
return result;
}
}

}

(function() {
    var extensionInstance = new smartCalc(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
