export function clear(form: HTMLElement) {
  const firstCli = form.firstElementChild;
  const firstInput = firstCli!.querySelector("input");
  console.log(firstInput!.id)
  firstInput!.value = "";
  firstInput!.readOnly = false;
  firstInput!.focus();
  while (form.childNodes.length > 2) {
    form.removeChild(form.lastChild!);
  }
}
