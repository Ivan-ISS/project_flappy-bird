class InputHandler {
    eventHandlerMap = {}

    constructor(eventHandlerConfig) {
        this._eventHandlerConfig = eventHandlerConfig
        //console.log(eventHandlerConfig)
    }

    subscribe() {
        document.addEventListener('click', this.eventHandlerMap.click)
        document.addEventListener('keydown', this.eventHandlerMap.keydown)
    }
}

class DeviceInputHandler extends InputHandler {
    deviceNameMap = {
        'mouse': 'left',
        'keydown': 'middle',
    }

    eventHandlerMap = {
        click: (event) => {
            const buttonName = this.deviceNameMap[event.pointerType]
            //console.log(event)
            const handler = this._eventHandlerConfig[buttonName]
            if (handler) {
                handler()
            }
        },
        keydown: (event) => {
            const buttonName = this.deviceNameMap[event.type]
            const handler = this._eventHandlerConfig[buttonName]
            if (handler) {
                handler()
            }
        },
    }
}