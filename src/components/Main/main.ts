import './main.scss';

class Main {
    render(children: string) {
        const htmlMain = `
            <div class="main">
                <section class="main__game game">
                    <div class="game__container container-common">
                        ${children}
                    </div>
                </section>
            </div>
        `;

        return htmlMain;
    }
}

export { Main };
