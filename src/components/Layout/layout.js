// eslint-disable-next-line no-unused-vars
class Layout {
    constructor() {
        this.logo = new Logo('src/assets/images/svg/logo.svg');
        this.header = new Header();
        this.footer = new Footer();
        this.main = new Main();
        this.game = new Game();
    }

    render() {
        const htmlLogo = this.logo.render();
        const htmlHeader = this.header.render(htmlLogo);

        const htmlGame = this.game.render();
        const htmlMain = this.main.render(htmlGame);

        const htmlFooter = this.footer.render('Created by Sabelnikov IS');

        const html = `<div class="layout">${htmlHeader + htmlMain + htmlFooter}</div>`;

        ROOT.innerHTML = html;
    }
}
