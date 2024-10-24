//import './main.css';

class Main {
    render(children) {
        let htmlMain = `
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
