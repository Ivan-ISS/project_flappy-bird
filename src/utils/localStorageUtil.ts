class LocalSrorageUtil {
    private keyName: string;

    constructor(keyName: string) {
        this.keyName = keyName;
    }

    saveData(data: number | string) {
        try {
            const serializedState = JSON.stringify(data);
            localStorage.setItem(this.keyName, serializedState);
        } catch (error) {
            console.log(error);
        }
    }

    loadData() {
        try {
            const serializedState = localStorage.getItem(this.keyName);
            if (serializedState !== null) {
                return JSON.parse(serializedState);
            }
            return undefined;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }

    removeData() {
        localStorage.removeItem(this.keyName);
    }
}

export { LocalSrorageUtil };
