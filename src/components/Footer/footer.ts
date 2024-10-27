import * as styles from './footer.module.scss';

class Footer {
    render(children: string) {
        const htmlFooter = `
            <div class="${styles.footer}">
                <div class="${styles.footerContainer} ${styles.containerCommon}">
                    ${children}
                </div>
            </div>
        `;

        return htmlFooter;
    }
}

export { Footer };
