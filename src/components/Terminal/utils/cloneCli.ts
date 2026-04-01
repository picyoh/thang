import type Command from "./index";

// Clone cli
export class CloneCli implements Command {
  constructor(private form: HTMLElement) {
    this.form = form;
  }

  execute(): void {
    // Get cli
    const labels = this.form.querySelectorAll("label");
    const child = labels[labels.length - 1];
    // Clone cli
    const clone = child!.cloneNode(true) as HTMLElement;
    // Get cli number
    const newNumber = this.form.querySelectorAll("input").length;
    // Create new id
    const splitId = this.form.querySelector("input")!.id.slice(0, -1);
    const newId = splitId + newNumber;
    // Get cloned input
    const clonedInput = clone.querySelector("input");
    // Set cloned input id and value
    clonedInput!.id = newId;
    clonedInput!.value = "";
    // Insert clone
    this.form?.appendChild(clone);
    // Remove disabled
    // Add focus
    clonedInput?.focus();
  }
}