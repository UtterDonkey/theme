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
            color1: '#888888',
            color2: '#888888',
          

          
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
                {
                    "opcode": "turbo",
                    "blockType": "command",
                    "text": "set turbo mode to [turbo]",
                    "arguments": {
                        "turbo": {
                            "type": "string",
                            "defaultValue": "false",
                            "menu": "on/off"
                        },
                    },

                },
                {
                    "opcode": "setCSS",
                    "blockType": "command",
                    "text": "set property [property] of [element] to [style]",
                    "arguments": {
                        "element": {
                            "type": "string",
                            "defaultValue": ".menu-bar_main-menu_3wjWH",
                            "menu": "elements"
                        },
                        "property": {
                            "type": "string",
                            "defaultValue": "background-color"
                           
                        },
                        "style": {
                            "type": "string",
                            "defaultValue": "red"
                           
                        },
                    },

                },
                {
                    "opcode": "css",
                    "blockType": "command",
                    "text": "append CSS [string]",
                    "arguments": {
                        "string": {
                            "type": "string",
                            "defaultValue": ".menu-bar_main-menu_3wjWH {background-color: red;}"
                        },
                    },

                },

                {
                    "opcode": "hex",
                    "func": "resend",
                    "blockType": "reporter",
                    "text": "color [send]",
                    "arguments": {
                        "send": {
                            "type": "color",
                            "defaultValue": "#000000"
                        },

                    },

                },
                {
                    "opcode": "angle",
                   "func": "resend",
                    "blockType": "reporter",
                    "text": "angle [send]",
                    "arguments": {
                        "send": {
                            "type": "angle",
                            "defaultValue": "90"
                        },

                    },

                },
                {
                    "opcode": "matrix",
                   "func": "resend",
                    "blockType": "reporter",
                    "text": "matrix [send]",
                    "arguments": {
                        "send": {
                            "type": "matrix",
                            "defaultValue": "0101010101100010101000100"
                        },

                    },

                },
                {
                    "opcode": "note",
                   "func": "resend",
                    "blockType": "reporter",
                    "text": "note [send]",
                    "arguments": {
                        "send": {
                            "type": "note",
                            "defaultValue": "60"
                        },

                    },

                },
                {
                    "opcode": "image",
                   "func": "resend",
                    "blockType": "reporter",
                    "text": "image [send]",
                    "arguments": {
                        "send": {
                            "type": "image",
                            "defaultValue": "60"
                        },

                    },

                },
            ],

            "menus": {
                                "on/off": {
                    acceptReporters:false, 
                    items: [{text:"on",value:true}, {text:"off",value:false}],
                },
                                "elements": {
                    acceptReporters:true, 
                    items: [{
    text: "menu bar",
    value: ".menu-bar_main-menu_3wjWH"
}, {
    text: "menu bar - accounts",
    value: ".menu-bar_account-info-group_MeJZP .menu-bar_menu-bar-item_oLDa-"
}, {
text: "menu bar - help",
value: "[class^=menu-bar_help-icon]"
}, {
    text: "code background",
    value: ".blocklySvg"
}, {
text: "popover body",
value: ".Popover-body"
}, {
text: "popover tip shape",
value: ".Popover-tipShape"
}, {
text: "tabs",
value: "[class*=gui_tab_]"
}, {
text: "tabs - selected",
value: "[class*=gui_tab_][class*=gui_is-selected]"
}, {
    text: "block palette",
    value: ".blocklyFlyout"
}, {
    text: "block palette - background",
    value: ".blocklyFlyoutBackground"
}, {
    text: "block palette - catagory selector",
    value: ".scratchCategoryMenu, .blocklyToolboxDiv, [class^=selector_wrapper]"
}, {
    text: "block palette - catagory selector - selected",
    value: ".scratchCategoryMenuItem.categorySelected"
}, {
    text: "code scrollbar",
    value: ".blocklyScrollbarHandle"
}, {
    text: "zoom control",
    value: ".blocklyZoom image"
}, {
    text: "context menu",
    value: ".blocklyWidgetDiv .goog-menu"
}, {
    text: "context menu - item",
    value: ".blocklyWidgetDiv .goog-menuitem"
}, {
    text: "context menu - item - highlighted",
    value: ".blocklyWidgetDiv .goog-menuitem-highlight"
}, {
    text: "context menu - item - disabled",
    value: ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content"
}, {
    text: "sprite/stage selector",
    value: "[class^=sprite-selector_], [class^=stage-selector_]"
}, {
text: "sprite selector item",
value: "[class*=sprite-selector-item]"
}, {
text: "asset panel",
value: "[class^=asset-panel_]"
}, {
text: "sprite info",
value: "[class^=sprite-info]"
}, {
text: "new buttons",
value: "[class^=selector_new-buttons]::before"
}, {
text: "extension button",
value: "[class^=gui_extension-button-container]"
}, {
    text: "paint editor - canvas background",
    value: ".paint-editor_controls-container_1Rqwy"
}, {
    text: "paint editor - paper canvas",
    value: ".paper-canvas_paper-canvas_1y588"
}, {
text: "color picker - header",
value: "[class^=color-picker_row-header] "
}, {
text: "color picker - divider",
value: "[class^=color-picker_divider]"
}, {
text: "color picker - swatch",
value: "[class^=color-picker_swatch]",
}, {
text: "color picker - slider handle",
value: "[class^=slider_handle]"
}, {
text: "sound editor - button",
value: "[class^=sound-editor_round-button]"
}, {
text: "button",
value: "[class*=button_button], [class^=sound-editor_button]"
}, {
text: "stage",
value: "[class^=stage_stage-wrapper-overlay]"
}, {
text: "stage - content",
value: "[class*=stage_stage-overlay-content]"
}, {
text: "stage - header",
value: "[class^=stage-header_stage-header-wrapper-overlay]"
}, {
text: "react tabs",
value: "[class^=react-tabs]:focus::after"
}, {
text: "backpack header",
value: "[class^=backpack_backpack-header]"
}, {
    text: "tutorial background",
    value: ".card_step-body_2bFkf, .card_left-card_1KpEh, .card_right-card_3IrbD"
}, {
text: "background",
value: "[class^=gui_body-wrapper] "
}
 ],
                }
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
turbo({turbo}) {
vm.setTurboMode(turbo);
}
css({string}) {
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = string;
document.head.appendChild(styleSheet);
}
setCSS({property, element, style}) {
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = element + '{' + property + ':' + style + ';}';
document.head.appendChild(styleSheet);

}
resend({send}) {
return send;
}
}

(function() {
    var extensionInstance = new Beta(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
