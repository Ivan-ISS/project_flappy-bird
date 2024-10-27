import { Layout } from './Layout/layout';

class App {
    layout: Layout;

    constructor() {
        this.layout = new Layout();
    }

    launchApp() {
        this.layout.render();
        /* this.layout.game.prepare().then((res) => {
            console.log('spriteSheet по итогу:', this.layout.game._spriteSheet);
            console.log('spriteSheet по возвращаемому результату:', res);

            this.layout.game.initGame();
            this.layout.game.start();
        }); */
    }
}

export { App };
