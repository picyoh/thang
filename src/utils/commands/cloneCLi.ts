import type Command from "./command";

// Clone cli
export class CloneCLi implements Command {
  constructor(private cli: ParentNode) {
    this.cli = cli;
  }

  execute(): void {
    const clone = this.cli.cloneNode(true) as HTMLElement;
    const clonedForm = clone.firstElementChild;
    const newId = (parseInt(clonedForm!.id) + 1).toString();
    clonedForm!.id = newId;
    const clonedInput = clonedForm?.querySelector("input");
    clonedInput!.id = `form-${newId}`;
    clonedInput!.value = "";
    const parent = this.cli.parentElement;
    parent?.insertAdjacentElement("beforeend", clone);
    clonedInput?.focus();
  }
}