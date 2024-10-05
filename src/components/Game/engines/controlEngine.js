class BaseControlEngine {
    eventHandlerMap = {};

    constructor(eventHandlerConfig) {
        this._eventHandlerConfig = eventHandlerConfig;
    }

    enableHandlers() {
        Object.entries(this.eventHandlerMap).forEach(([name, handler]) => {
            document.addEventListener(name, handler);
        });

        // Итератор выше по сути делает вот это:
        // document.addEventListener('click', this.eventHandlerMap.click);
        // document.addEventListener('keydown', this.eventHandlerMap.keydown);
    }

    disableHandlers() {
        Object.entries(this.eventHandlerMap).forEach(([name, handler]) => {
            document.removeEventListener(name, handler);
        });
    }
}

// eslint-disable-next-line no-unused-vars
class ControlEngine extends BaseControlEngine {
    deviceNameMap = {
        0: 'leftMouse',
        32: 'space',
        38: 'arrowUp',
    };

    eventHandlerMap = {
        click: (event) => {
            const buttonName = this.deviceNameMap[event.button];
            const handler = this._eventHandlerConfig[buttonName];
            if (handler) {
                handler();
            }
        },
        keydown: (event) => {
            const buttonName = this.deviceNameMap[event.keyCode];
            const handler = this._eventHandlerConfig[buttonName];
            if (handler) {
                handler();
            }
        },
    };
}
