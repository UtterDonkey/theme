// MIT license
const GamepadIcon = "data:image/png;base64,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"
class SingleGamepad {
    constructor(index) {
        this.id = null
        this.index = index
        this.currentMSecs = null
    }
    
    matches(gamepad) {
        return gamepad && this.index != null && gamepad.id == this.id && 
            gamepad.buttons.length == this.currentButtons.length && gamepad.axes.length == this.currentAxes.length
    }
    
    getGamepad(i) {
        var gamepads = navigator.getGamepads()
        if (gamepads == null || gamepads.length <= i || ! gamepads[i]) 
            return null
        return gamepads[i]
    }
    
    update(currentMSecs) {
        if (this.currentMSecs == currentMSecs)
            return
        
        var gamepad = this.getGamepad(this.index)
        
        if (gamepad == null) {
            this.id = null
            this.currentButtons = []
            this.previousButtons = []
            this.currentAxes = []
            this.previousAxes = []
            return
        }
        
        this.currentMSecs = currentMSecs
        
        if (!this.matches(gamepad)) {
            this.id = gamepad.id
        
            this.previousButtons = []
            for (var i=0;i<gamepad.buttons.length;i++) {
                this.previousButtons.push(false)
            }
            
            this.previousAxes = []
            for (var i=0;i<gamepad.axes.length;i++) {
                this.previousAxes.push(0)
            }
        }
        else {
            this.previousButtons = this.currentButtons
            this.previousAxes = this.previousAxes
        }
        
        this.currentButtons = []
        for (var i=0;i<gamepad.buttons.length;i++) {
            this.currentButtons.push(gamepad.buttons[i].pressed)
        }
        
        this.currentAxes = []
        for (var i=0;i<gamepad.axes.length;i++) {
            this.currentAxes.push(gamepad.axes[i])
        }
        console.log(this.currentButtons)
    }
    
    pressedReleased(currentMSecs,i,pr) {
        this.update(currentMSecs)
        
        if (i < this.currentButtons.length) {
            return this.currentButtons[i] != this.previousButtons[i] && this.currentButtons[i] == pr
        }
        
        return false
    }
    
    changedAxis(currentMSecs,i) {
        this.update(currentMSecs)
        
        if (i < this.currentAxes.length)
            return this.currentAxes[i] != this.previousAxes[i]
        
        return false
    }
    
    getButton(currentMSecs,i) {
        this.update(currentMSecs)
        console.log(""+currentMSecs+" "+i+this.currentButtons)
        if (i < this.currentButtons.length) {
            return this.currentButtons[i]
        }
        else {
            return false
        }
    }
    
    getAxis(currentMSecs,i) {
        this.update(currentMSecs)
        if (i < this.currentAxes.length)
            return this.currentAxes[i]
        else
            return false
    }
    
    rumble(s,w,t) {
        var gamepad = this.gamepads[i].getGamepad()
        if (gamepad != null && gamepad.vibrationActuator) {
            gamepad.vibrationActuator.playEffect("dual-rumble", {
                duration: 1000*t,
                strongMagnitude: Math.max(0,Math.min(s,1)),
                weakMagnitude: Math.max(0,Math.min(w,1))
            });
        }
    }
}

class ScratchGamepad {
    constructor(runtime) {
        this.id = null
        this.runtime = runtime
        this.gamepads = []
        for (var i=0;i<4;i++)
            this.gamepads.push(new SingleGamepad(i))
    }
    
    getInfo() {
        return {
            "id": "Gamepad",
            "name": "Gamepad",
            "menuIconURI": GamepadIcon,
            "blockIconURI": GamepadIcon,
            "blocks": [{
                        "opcode": "buttonPressedReleased",
                        "blockType": "hat",
                        "text": "button [b] [pr] of pad [i]",
                        "arguments": {
                            "b": {
                                "type": "number",
                                "defaultValue": "1"
                            },
                            "pr": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "pressReleaseMenu"
                            },
                            "i": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "padMenu"
                            },
                        },
                    },
                    {
                        "opcode": "buttonDown",
                        "blockType": "Boolean",
                        "text": "button [b] of pad [i] is down",
                        "arguments": {
                            "b": {
                                "type": "number",
                                "defaultValue": "1"
                            },
                            "i": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "padMenu"
                            },
                        },                    
                    },
                    {
                        "opcode": "axisMoved",
                        "blockType": "hat",
                        "text": "axis [b] of pad [i] moved",
                        "arguments": {
                            "b": {
                                "type": "number",
                                "defaultValue": "1"
                            },
                            "i": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "padMenu"
                            },
                        },
                    },
                    {
                        "opcode": "axisValue",
                        "blockType": "reporter",
                        "text": "axis [b] of pad [i] value",
                        "arguments": {
                            "b": {
                                "type": "number",
                                "defaultValue": "1"
                            },
                            "i": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "padMenu"
                            },
                        },                    
                    },
                    {
                        "opcode": "rumble",
                        "blockType": "command",
                        "text": "rumble strong [s] and weak [w] for [t] sec. on pad [i]",
                        "arguments": {
                            "s": {
                                "type": "number",
                                "defaultValue": "0.25"
                            },
                            "w": {
                                "type": "number",
                                "defaultValue": "0.5"
                            },
                            "t": {
                                "type": "number",
                                "defaultValue": "0.25"
                            },
                            "i": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "padMenu"
                            },
                        },                    
                    },
            ],
            "menus": {
                "pressReleaseMenu": [{text:"press",value:1}, {text:"release",value:0}],
                "padMenu": {
                            acceptReporters: true, 
                            items: [{text:"1",value:1}, {text:"2",value:2}, {text:"3",value:3}, {text:"4",value:4}],
                }
            }            
        };
    }
    
    buttonPressedReleased({b,pr,i}) {
        return this.gamepads[i-1].pressedReleased(this.runtime.currentMSecs,b-1,pr)
    }

    axisMoved({b,i}) {
        return this.gamepads[i-1].changedAxis(this.runtime.currentMSecs,b-1)
    }
    
    axisValue({b,i}) {
        return this.gamepads[i-1].getAxis(this.runtime.currentMSecs,b-1)
    }
    
    buttonDown({b,i}) {
        return this.gamepads[i-1].getButton(this.runtime.currentMSecs,b-1)
    }
    
    rumble({s,w,t,i}) {
        this.gamepads[i-1].rumble(s,w,t)
    }
}

(function() {
    var extensionInstance = new ScratchGamepad(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
