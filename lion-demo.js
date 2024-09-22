// As a side-effect this way of importing defines the custom elements, eg. <lion-button>, ready for use
import { html, LitElement } from "lit";
import { Required } from "@lion/ui/form-core.js";
import { loadDefaultFeedbackMessages } from "@lion/ui/validate-messages.js";
import "@lion/ui/define/lion-input.js";
import "@lion/ui/define/lion-button.js";
import "@lion/ui/define/lion-button-submit.js";
import "@lion/ui/define/lion-form.js";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    loadDefaultFeedbackMessages();
    const first_name = document.querySelector("#first_name");
    first_name.validators = [new Required()];
  },
  false
);

export class LionDemo extends LitElement {
  render() {
    return html`
      <lion-form>
        <form action="https://formspree.io/f/xvovqzqk" method="POST">
          <lion-input
            id="first_name_lit"
            name="first_name_lit"
            label="First Name"
            .validators="${[new Required()]}"
          ></lion-input>
          <lion-button-submit>Submit</lion-button-submit>
        </form>
      </lion-form>
    `;
  }
}
customElements.define("lion-demo", LionDemo);
