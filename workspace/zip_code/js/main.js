class AddressInfo extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({
            mode: 'open'
        });

        this.prefecture = ``;
        this.city = ``;
        this.address = ``

        shadow.innerHTML = `
                <p><label> 郵便番号 <input id="zipcode"
                    type="text" size="10" maxlength="8"></label>
                <button id="btn">検索</button></p>
                <p><label> 都道府県 <input id="prefecture" type="text"
                size = "10"
                value = ${this.prefecture}> </label></p >
                <p><label> 市区町村 <input id = "city"
                type="text" size="10" value=${this.city}> </label></p>
                <p><label>住所 <input id="address"
                type="text" size="10" value=${this.address}></label></p>
        `
    }


}

customElements.define('address-info', AddressInfo);