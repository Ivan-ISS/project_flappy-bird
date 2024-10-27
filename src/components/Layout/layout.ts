import './Layout.scss';
import { ROOT } from '../../constants/root';
import { Logo } from '../Logo/logo';
import { Header } from '../Header/header';
import { Main } from '../Main/main';
import { Footer } from '../Footer/footer';

class Layout {
    logo: Logo;
    header: Header;
    footer: Footer;
    main: Main;

    constructor() {
        this.logo = new Logo('src/assets/images/svg/logo.svg');
        this.header = new Header();
        this.footer = new Footer();
        this.main = new Main();
        // this.game = new Game();
    }

    render() {
        const htmlLogo = this.logo.render();
        const htmlHeader = this.header.render(htmlLogo);

        // const htmlGame = this.game.render();
        const htmlMain = this.main.render('htmlGame');

        const htmlFooter = this.footer.render('Created by Sabelnikov IS');

        const html = `<div class="layout">${htmlHeader + htmlMain + htmlFooter}</div>`;

        ROOT.innerHTML = html;
    }
}

export { Layout };
