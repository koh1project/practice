// const shadowRoot = document.getElementById('example').attachShadow({
//     mode: 'open'
// });


class HamburgerButton extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<button type="button" 
        id="nav-toggle-open" class="nav-toggle-open">&#9776;</button>
        <style>
            background: none;
            position: relative;
            top: 0;
            right: 0;
            line - height: 45 px;
            padding: 5 px 15 px 0 px 15 px;
            /* color: #999; */
            border: 0;
            font - size: 1.4 em;
            font - weight: bold;
            cursor: pointer;
            outline: none;
            z - index: 2;
        </style> `;
    }
}

customElements.define('hamburger-button', HamburgerButton);


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