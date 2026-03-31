import { clear } from "../Terminal/commands/clear";

export function addTerm(main: HTMLElement) {
  // Add term button
  const addButton = document.getElementById("addTerminal");
  addButton?.addEventListener("click", (e) => {
    // Get the first terminal
    const terminal = document.getElementById("Terminal-0");
    // Clone it
    const clonedTerm = terminal?.cloneNode(true) as HTMLElement;
    // Get terminal number
    const terminalNumber = document.querySelectorAll(".terminal").length;
    // Split terminal Id
    const splitedId = clonedTerm.id.split("-");
    // Create new Id
    const newId = `${splitedId[0]}-${terminalNumber}`;
    // Set new terminal Id
    clonedTerm.id = newId;
    // Get form in terminal
    const form = clonedTerm.querySelector("form");
    // Set new Id on form
    form!.id = `form-${newId}`;
    // Get input in terminal's form
    const input = form?.querySelector("input");
    // Set new form's id
    input!.id = `input-${newId}-0`;
    // Set new title
    const title = clonedTerm?.querySelector("h2");
    title!.textContent = newId;
    // Modify buttons ids
    const buttons = clonedTerm.querySelectorAll("button");
    buttons.forEach(button => {
      const mainId = button.id.split("-")[0];
      button.id = `${mainId}-${newId}`
    })
    // Clear new term
    clear(clonedTerm.querySelector("form")!)
    // Insert
    main?.insertAdjacentElement("beforeend", clonedTerm!);
  });
}
