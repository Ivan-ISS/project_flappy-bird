const RESOURCE_TYPE = {
    IMAGE: 'image',
}

class ResourseLoader {
    _typeLoadersMap = {
        [RESOURCE_TYPE.IMAGE]: ({ src, width, height }) => {
            const image = new Image(width, height)
            image.src = src
            return image
        },
        [RESOURCE_TYPE.AUDIO]: ({ srcPoint, srcHit, srcSwooshing, srcFlap, srcDie }) => {
            const pointSound = new Audio()
            pointSound.src = srcPoint

            const hitSound = new Audio()
            hitSound.src = srcHit

            const swooshingSound = new Audio()
            swooshingSound.src = srcSwooshing
            
            const flapSound = new Audio()
            flapSound.src = srcFlap

            
            const dieSound = new Audio()
            dieSound.src = srcDie

            return { pointSound: pointSound, hitSound: hitSound, swooshingSound: swooshingSound, flapSound: flapSound, dieSound: dieSound, }
        },
    }

    load(resource) {
        const loader = this._typeLoadersMap[resource.type] // тут положили в loader функцию выше после ":"
        return loader(resource) // а здесь вызываем эту функцию с аргументом resource и он возвращает image по окончанию функции
    }
}