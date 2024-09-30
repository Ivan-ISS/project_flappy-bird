// eslint-disable-next-line no-unused-vars
class Config {
    gravity = 600;

    canvas = {
        canvasSelector: '.cnv',
        width: 322,
        height: 482,
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
                x: 276,
                y: 112,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 164,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 26,
            },
        ],
    };
}
