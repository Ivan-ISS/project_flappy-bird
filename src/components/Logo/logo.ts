import './logo.scss';

class Logo {
    src: string;

    constructor(src: string) {
        this.src = src;
    }

    render() {
        const htmlLogo = `
            <div class="logo">
                <img class="logo__img" src="${this.src}" alt="logo"/>
            </div>
        `;

        return htmlLogo;
    }
}

export { Logo };
