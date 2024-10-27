import './footer.scss';

class Footer {
    render(children: string) {
        const htmlFooter = `
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
