var smartCache = []
class smartCalc {
    constructor(runtime) {
        this.runtime = runtime
    }

    getInfo() {
        return {
            "id": "smartCalc",
            "name": "xOperators",
            "color1": "#59c059",
            "color2": "#389438",
            "color3": "#389438",
          
            "blocks": [
                {
                    "opcode": "add",
                    "blockType": "reporter",
                    "text": "[p1]+[p2]",
                    "arguments": {
                        "p1": {
                            "type": "number",
                        },
                        "p2": {
                            "type": "number",
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
                        },
                        "p2": {
                            "type": "number",
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
                        },
                        "p2": {
                            "type": "number",
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
                        },
                        "p2": {
                            "type": "number",
                        },

                    },
                },
                                    {
                    "opcode": "doMath",
                    "blockType": "reporter",
                    "text": "[math] of [x]",
                    "arguments": {
                        "math": {
                            "type": "string",
                            "menu": "maths"
                        },
                        "x": {
                            "type": "number",
                        },

                    },
                },
            ],

            "menus": {
                "maths": {
                    acceptReporters: false, 
                    items: [{text:"abs",value:"abs"}, {text:"floor",value:"floor"}, {text:"ceiling",value:"ceil"}, {text:"sqrt",value:"sqrt"}, {text:"sin",value:"sin"}, {text:"cos",value:"cos"}, {text:"tan",value:"tan"}, {text:"asin",value:"asin"}, {text:"acos",value:"acos"}, {text:"atan",value:"atan"}],
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
doMath({math, x}){
x = parseFloat(x);
let operation = `${math}&${x}`
if(smartCache.indexOf(operation) > -1){
return smartCache[smartCache.indexOf(operation) + 1];
}else{
let result = eval(`Math.${math}(${x})`);
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
