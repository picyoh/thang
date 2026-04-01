import type Command from "./index";

// Append response
export class AppendResponse implements Command {
  private response: string;

  constructor(
    private form: HTMLElement,
    response: string,
  ) {
    this.form = form;
    this.response = response;
  }

  execute(): void {
    const container = document.createElement("pre");
    container.classList = "response";
    container.textContent = this.response;
    this.form.appendChild(container);
  }
}