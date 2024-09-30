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

        frames: [
            {
                x: 276,
                y: 0,
                w: 223,
                h: 111,
            },
        ],
    };
}
