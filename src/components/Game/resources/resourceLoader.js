const RESOURCE_TYPE = {
    IMAGE: 'image',
    AUDIO: 'audio',
};

// eslint-disable-next-line no-unused-vars
class ResourseLoader {
    _typeLoadersMap = {
        [RESOURCE_TYPE.IMAGE]: async ({ src, width, height }) => {
            return new Promise((resolve, reject) => {
                const image = new Image(width, height);
                image.src = src;

                image.addEventListener('load', () => resolve(image));
                image.addEventListener('error', (error) => reject(error));
            });
        },
        [RESOURCE_TYPE.AUDIO]: async ({ src }) => {
            return new Promise((resolve, reject) => {
                const audio = new Audio();
                audio.src = src;

                audio.addEventListener('loadedmetadata', () => resolve(audio));
                audio.addEventListener('error', (error) => reject(error));
            });
        },
    };

    async load(resource) {
        const loader = this._typeLoadersMap[resource.type];
        // const res = await loader(resource); - этот результат за счет async вновь оборачивается в промис в состоянии разрешен (можно так вернуть - return res)
        return await loader(resource);
    }
}
