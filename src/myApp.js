import { LitElement, html } from 'lit-element';
import './helloWorld'

class MyApp extends LitElement {
    render() {
        return html`
        <hello-world></hello-world>
        `;
    }
}
customElements.define('my-app', MyApp);