import * as styles from './logo.module.scss';

class Logo {
    src: string;

    constructor(src: string) {
        this.src = src;
    }

    render() {
        const htmlLogo = `
            <div class="${styles.logo}">
                <img class="${styles.logoImg}" src="${this.src}" alt="logo"/>
            </div>
        `;

        return htmlLogo;
    }
}

export { Logo };
