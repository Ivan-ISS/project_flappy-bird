import * as styles from './header.module.scss';

class Header {
    render(children: string) {
        const htmlHeader = `
            <div class="${styles.header}">
                <div class="${styles.headerContainer} ${styles.containerCommon}">
                    ${children}
                </div>
            </div>
        `;

        return htmlHeader;
    }
}

export { Header };
