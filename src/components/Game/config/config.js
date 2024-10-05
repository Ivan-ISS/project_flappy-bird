// eslint-disable-next-line no-unused-vars
class Config {
    gravity = 600; // 9.8;

    canvas = {
        canvasSelector: '.cnv',
        width: 322,
        height: 482,
        fillColor: '#70c5ce',
    };

    spriteSheet = {
        width: 606,
        height: 428,
        src: './src/assets/images/png/spriteSheet.png',
    };

    audio = {
        srcMusic: './src/assets/audio/sfx_music.wav',
        srcPoint: './src/assets/audio/sfx_point.wav',
        srcHit: './src/assets/audio/sfx_hit.wav',
        srcSwooshing: './src/assets/audio/sfx_swooshing.wav',
        srcFlap: './src/assets/audio/sfx_flap.wav',
        srcDie: './src/assets/audio/sfx_die.wav',
    };

    bird = {
        x: 50,
        y: 100,
        width: 25,
        height: 20,

        rotationSpeed: 0.11 * 100,
        angleMin: -0.44,
        angleMax: 1.57,

        flapForce: 230, // 3.35,
        frameRate: 10,

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
            },
        ],
    };

    background = {
        x: 0,
        y: 217,
        width: 322,
        height: 265,

        frames: [
            {
                x: 0,
                y: 0,
                w: 275,
                h: 227,
            },
        ],
    };

    floor = {
        x: 0,
        y: 351,
        width: 322,
        height: 131,

        speedX: 100, // 187 - каждую секунду трубы появляются

        frames: [
            {
                x: 276,
                y: 0,
                w: 223,
                h: 111,
            },
        ],
    };

    pipe = {
        x: 322,
        y: 0,
        width: 53,
        height: 399,

        speedX: 100,

        gap: 85,
        minY: -300,
        maxY: -180,

        frames: [
            {
                x: 553,
                y: 0,
                w: 53,
                h: 399,
            },
            {
                x: 501.5,
                y: 0,
                w: 53,
                h: 399,
            },
        ],
    };

    readyMessage = {
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
            },
        ],
    };

    gameOverMessage = {
        x: 48,
        y: 55,
        width: 227,
        height: 43,

        frames: [
            {
                x: 174,
                y: 228,
                w: 227,
                h: 43,
            },
        ],
    };

    score = {
        x: 48,
        y: 100,
        width: 227,
        height: 114,

        currentScoreX: 220,
        currentScoreY: 150,
        bestScoreX: 220,
        bestScoreY: 193,

        frames: [
            {
                x: 174,
                y: 272,
                w: 227,
                h: 114,
            },
        ],
    };

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
            },
        ],
    };

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
            },
        ],
    };
}
