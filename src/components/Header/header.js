//import './header.css';

class Header {
    render(children) {
        let htmlHeader = `
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
