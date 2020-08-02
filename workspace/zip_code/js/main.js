class AddressInfo extends HTMLElement {

    static get observedAttributes() {
        return ['class'];
    }

    constructor() {
        super();
        this.root = this.attachShadow({
            mode: 'open'
        });

        this.prefecture = ``;
        this.city = ``;
        this.address = ``

        this.root.innerHTML = `
                <p><label> 郵便番号 <input id="zipcode"
                type="text" size="10" maxlength="8"></label>
                <button id = "btn"
                onclick = "fetchAddress()"> 検索 </button></p >
                <p><label> 都道府県 <input id="prefecture" type="text"
                size = "10"
                value = ${this.prefecture}> </label></p >
                <p><label> 市区町村 <input id = "city"
                type="text" size="10" value=${this.city}> </label></p>
                <p><label>住所 <input id="address"
                type="text" size="10" value=${this.address}></label></p>
        `
    }
    connectedCallback() {
        console.log('Custom list added to page.');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`${name}'s value has been changed from ${oldValue} to ${newValue}`);
    }

}

customElements.define('address-info', AddressInfo);


async function fetchAddress() {
    const element = document.querySelector(`.address-info`).shadowRoot;
    const param = element.querySelector(`#zipcode`).value;

    if (isNaN(parseInt(param))) {
        alert(`数字を入力してください`);
        return;
    }

    const BASE_URL = `https://zipcloud.ibsnet.co.jp/api/search`;
    const param_url = `?zipcode=${param}`;

    const targetUrl = BASE_URL + param_url;
    const res = await fetch(targetUrl);

    if (!res.ok) {
        return;
    }

    const json = await res.json();

    if (json.results === null) {
        alert('該当するデータが見つかりませんでした');
        return;
    }

    const prefecture = json.results[0].address1;
    const city = json.results[0].address2;
    const address = json.results[0].address3;
    const e = document.querySelector(`.address-info`).shadowRoot;
    e.querySelector(`#prefecture`).value = `${prefecture}`;
    e.querySelector(`#city`).value = `${city}`;
    e.querySelector(`#address`).value = `${address}`;
}