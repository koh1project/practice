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
            position: relative;
            top: 0;
            right: 0;
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
            position: relative;
            top: 0px;
            right: 0px;
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

        shadow.addEventListener(`click`, (e) => alert("Inner target: " + e.target.tagName));

    }
}



customElements.define('hamburger-button', HamburgerButton);
customElements.define('close-button', CloseButton);





$(document).ready(function() {

    $(".nav-toggle-close").hide();
    $(".nav-list").hide();
    $(".nav-toggle-open").click(function() {
        $(".nav-list").slideToggle("slow", function() {
            $(".nav-toggle-open").hide();
            $(".nav-toggle-close").show();
        });
    });

    $(".nav-toggle-close").click(function() {
        $(".nav-list").slideToggle("slow", function() {
            $(".nav-toggle-close").hide();
            $(".nav-toggle-open").show();
        });
    });

});