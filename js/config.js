class Config {
    gravity = 700;

    canvas = {
        classHTML: '.game',
        width: 322,
        height: 482,
    }

    spriteSheet = {
        width: 606,
        height: 428,
        src: './images/spriteSheet.png'
    }

    audio = {
        srcPoint: './audio/sfx_point.wav',
        srcHit: './audio/sfx_hit.wav',
        srcSwooshing: './audio/sfx_swooshing.wav',
        srcFlap: './audio/sfx_flap.wav',
        srcDie: './audio/sfx_die.wav',
    }

    score = {
        x: 220,
        y: 150,
        bestX: 220,
        bestY: 193,
    }

    medal = {
        x: 74,
        y: 141,
        width: 44,
        height: 44,

        frames: [
            {
                x: 360,
                y: 158,
                w: 44,
                h: 44,
            },
            {
                x: 312,
                y: 112,
                w: 44,
                h: 44,
            },
            {
                x: 312,
                y: 158,
                w: 44,
                h: 44,
            }
        ]
    }

    bird = {
        x: 50,
        y: 117,
        width: 25,
        height: 20,

        flapSpeed: 215,
        rotationStartFallSpeed: 120, // значение скорости падения после которого птичка начинает поварачиваться вниз
        rotationSpeed: 7,
        multiplicationFactor: 150, // домножающий коэффициент (для оптимальной скорости махания крыльями птички)

        frames: [
            {
                x: 277,
                y: 112,
                w: 34,
                h: 26,
            },
            {
                x: 277,
                y: 139,
                w: 34,
                h: 26,
            },
            {
                x: 277,
                y: 164,
                w: 34,
                h: 26,
            },
            {
                x: 277,
                y: 139,
                w: 34,
                h: 26,
            }
        ]
    }

    initialDisplay = {
        x: 76,
        y: 55,
        width: 172,
        height: 159,

        frames: [
            {
                x: 0,
                y: 228,
                w: 172,
                h: 159,
            }
        ]
    }

    endDisplay = {
        x: 48,
        y: 55,
        width: 227,
        height: 159,

        frames: [
            {
                x: 174,
                y: 228,
                w: 227,
                h: 159,
            }
        ]
    }

    startBtn = {
        x: 122,
        y: 226,
        width: 80,
        height: 26,

        frames: [
            {
                x: 247,
                y: 401,
                w: 80,
                h: 26,
            }
        ]
    }

    background = {
        x: 0,
        y: 218,
        width: 322,
        height: 264,

        frames: [
            {
                x: 0,
                y: 0,
                w: 276,
                h: 226,
            }
        ]
    }

    floor = {
        x: 0,
        y: 351,
        width: 322,
        height: 131,

        moveSpeed: 7.1,
        multiplicationFactor: 18.5, // домножающий коэффициент (для оптимальной скорости движения сущности)

        frames: [
            {
                x: 276,
                y: 0,
                w: 223,
                h: 111,
            }
        ]
    }

    pipes = {
        x: 323,
        y: 0,
        width: 53,
        height: 399,

        moveSpeed: 9.5,
        multiplicationFactor: 18.5, // домножающий коэффициент (для оптимальной скорости движения сущности)
        numScoreToIncreaseSpeed: 5, // кол-во очков после которого происходит увеличение скорости движения карты (после каждых пяти очков)
        stepIncreaseMoveSpeed: 0.005,

        frames: [
            {
                x: 553,
                y: 268,
                w: 53,
                h: 399,
            },
            {
                x: 501.5,
                y: 0,
                w: 53,
                h: 399,
            },
            {
                x: 553,
                y: 268,
                w: 53,
                h: 399,
            },
            {
                x: 501.5,
                y: 0,
                w: 53,
                h: 399,
            }
        ]
    }
}