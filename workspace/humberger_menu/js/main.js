class NavList extends HTMLElement {
    constructor() {
        super();
        // this.innerHTML = `<h1>Hello, World!</h1>`;
        const ul = document.createElement(`ul`);
        ul.setAttribute(`class`, `nav-list nav-list-hidden`);
        ul.setAttribute(`id`, `nav-list`);
        const list = ['HOME', 'INFORMATION', 'PRODUCTS', 'ABOUT', 'INQUIRY'];
        const mapLi = (val) => {
            const li = document.createElement(`li`);
            const a = document.createElement(`a`);
            a.setAttribute(`href`, ``);
            a.innerHTML = a.innerHTML + val;
            li.appendChild(a);
            return li;
        }

        const listLi = list.map(mapLi);
        for (const item of listLi) {
            ul.appendChild(item);
        }
        this.appendChild(ul);
    }
}



class HamburgerButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({
            mode: `open`
        });
        shadow.innerHTML = `
        <style>
        button {
            background: none;
            position: absolute;
            top: 0;
            left: 0;
            line-height: 45px;
            background-color:transparent;
            padding: 5px 15px 0px 15px;
            border: 0;
            font-size: 1.4em;
            font-weight: bold;
            cursor: pointer;
            outline: none;
            z-index: 2;
        }
        </style>
        <button type = "button"
        class = "shadow-nav-toggle-open"> &#9776;</button>
        `;

        shadow.addEventListener(`click`, () => onClickMenuButton());
    }
}

class CloseButton extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({
            mode: `open`
        });
        shadow.innerHTML = `
        <style>
        button {
            background: none;
            position: absolute;
            top: 0px;
            left: 0px;
            padding: 7px 15px 0px 15px;
            border: 0;
            font-size: 3em;
            line-height: 65px;
            font-weight: bold;
            cursor: pointer;
            outline: none;
            z-index: 1;
        }
        </style>
        <button type = "button"
        class = "shadow-nav-toggle-close" > &#735;</button>
        `;
        shadow.addEventListener(`click`, () => onClickMenuButton());
    }
}

customElements.define('hamburger-button', HamburgerButton);
customElements.define('close-button', CloseButton);
customElements.define('nav-list', NavList);

const closeButton = document.querySelector(`#shadow-nav-toggle-close`);
const hamburgerButton = document.querySelector(`#shadow-nav-toggle-open`);
const nav = document.querySelector('#nav-list');

closeButton.classList.toggle(`hidden`);

const onClickMenuButton = () => {
    nav.classList.toggle(`nav-list-hidden`);
    hamburgerButton.classList.toggle(`hidden`);
    closeButton.classList.toggle(`hidden`);
}