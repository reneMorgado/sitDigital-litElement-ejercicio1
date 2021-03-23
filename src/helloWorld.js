import { LitElement, html } from 'lit-element';
import './myMessage'

class HelloWorld extends LitElement {
    static get properties() {
        return {
            message: { type: String },
            count: { type: Number},
            messageOutside: { type: String}
        };
    }
    constructor() {
        super()
        this.message = 'Hello Rene'
        this.count = 100
    }
    render() {
        return html`
            <my-message message="Static Message"></my-message>
            <my-message .message="${this.message}"></my-message>
        `;
    }
}
customElements.define('hello-world', HelloWorld);