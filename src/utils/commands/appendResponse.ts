import type Command from "./command";

// Append response
export class AppendResponse implements Command {
  private response: string;

  constructor(
    private cli: HTMLFormElement,
    response: string,
  ) {
    this.cli = cli;
    this.response = response;
  }

  execute(): void {
    const container = document.createElement("p");
    container.classList = "response";
    container.innerHTML = this.response;
    this.cli.parentElement?.insertAdjacentElement("afterend", container);
  }
}