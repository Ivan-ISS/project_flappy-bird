import * as styles from './main.module.scss';

class Main {
    render(children: string) {
        const htmlMain = `
            <div class="${styles.main}">
                <section class="game">
                    <div class="${styles.gameContainer} ${'containerCommon'}">
                        ${children}
                    </div>
                </section>
            </div>
        `;

        return htmlMain;
    }
}

export { Main };
