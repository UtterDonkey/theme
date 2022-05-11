const CanvasIcon = "data:image/png;base64,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"
var blur = 0
var brightness = 0
var contrast = 0
var greyscale = 0
var hue = 0
var invert = 0
var saturate = 0
var sepia = 0


function updateCanvas(){
document.getElementsByClassName('stage_stage-wrapper_eRRuk box_box_2jjDp')[0].getElementsByTagName('*')[2].style.filter = 'blur(' + blur/10 + 'px) ' + 'brightness(' + (brightness+50)/50 + ') ' + 'contrast(' + (contrast+100)/100 + ') ' + 'grayscale(' + greyscale/100 + ') ' + 'hue-rotate(' + hue*1.8 + 'deg) ' + 'invert(' + invert/100 + ') ' + 'saturate(' + ((saturate > 0 ? saturate*5 : saturate)+100)/100 + ') ' + 'sepia(' + sepia/100 + ') '
}
function setCanvas(effect, value){
eval(effect + ' = ' + value)
updateCanvas();
}
class CanvasTheme {
    constructor(runtime) {
        this.runtime = runtime
    }

    getInfo() {
        return {
            "id": "CanvasStyles",
            "name": "Canvas",
          
             "menuIconURI": CanvasIcon,
             "blockIconURI": CanvasIcon,
          
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
                    "opcode": "changeCanvasStyle",
                    "blockType": "command",
                    "text": "change stage effect [effect] by [value]",
                    "arguments": {
                        "effect": {
                            "type": "string",
                            "defaultValue": "hue",
                            "menu": "effects",
                        },
                        "value": {
                            "type": "string",
                            "defaultValue": "25",
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

            "menus": {
                "effects": {
                    acceptReporters: true, 
                    items: [{text:"blur",value:"blur"}, {text:"brightness",value:"brightness"}, {text:"contrast",value:"contrast"}, {text:"greyscale",value:"greyscale"}, {text:"hue",value:"hue"}, {text:"invert",value:"invert"}, {text:"saturate",value:"saturate"}, {text:"sepia",value:"sepia"}],
                }
            }     
        };
    }

    canvasStyle({effect, value}) {

        setCanvas(effect, value)
        
    }
    changeCanvasStyle({effect, value}) {
        
        setCanvas(effect, parseFloat(eval(effect))+parseFloat(value))
        
    }
    effect({effect}) {
        return eval(effect)
    }
    clear(){
blur = 0
brightness = 0
contrast = 0
greyscale = 0
hue = 0
invert = 0
saturate = 0
sepia = 0
updateCanvas()
    }

}

(function() {
    var extensionInstance = new CanvasTheme(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
