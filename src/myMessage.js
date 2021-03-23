import {LitElement, html} from 'lit-element'

class myMessage extends LitElement{
    static get properties() {
        return {
            message: { type: String }
        };
    }
    constructor() {
        super()
        this.message = ''
    }
    render() {
        return html`
            <h1>${this.message}</h1>
        `;
    }
}

customElements.define('my-message',myMessage)