import './header.scss';

class Header {
    render(children: string) {
        const htmlHeader = `
            <div class="header">
                <div class="header__container container-common">
                    ${children}
                </div>
            </div>
        `;

        return htmlHeader;
    }
}

export { Header };
