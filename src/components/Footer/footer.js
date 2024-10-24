//import './footer.css';

class Footer {
    render(children) {
        let htmlFooter = `
            <div class="footer">
                <div class="footer__container container-common">
                    ${children}
                </div>
            </div>
        `;

        return htmlFooter;
    }
}

export { Footer };
