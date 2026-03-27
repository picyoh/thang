export function addTerm(main: HTMLElement) {
  // Add term button
  const addButton = document.getElementById("addTerminal");
  addButton?.addEventListener("click", (e) => {
    const terminal = document.getElementById("Terminal");
    const clonedTerm = terminal?.cloneNode(true) as HTMLElement;
    main?.insertAdjacentElement("beforeend", clonedTerm!);
  });
}
