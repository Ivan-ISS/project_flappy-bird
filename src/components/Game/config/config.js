// eslint-disable-next-line no-unused-vars
class Config {
    gravity = 600;

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

    bird = {
        x: 50,
        y: 100,
        width: 34,
        height: 26,

        flapSpeed: 400,
        animationSpeed: 7,

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

        animationSpeed: 100,

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

        animationSpeed: 100,
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
}
