import * as help from "../../../datas/terminal/echo.md"

export function echo(options: Array<string>, args: string) {
  // Remove all quotes
  let response = args.replaceAll('"', "").replaceAll("'", "");
  // Without options
  if (options[0] === undefined || options[0] === "-E") {
    return response;
  } else if (options[0] === "-e") {
    // Backspace
    response = response.replaceAll(" \\b", "");
    // Escape
    response = response.replaceAll("\\e", " ");
    // Form feed
    // ?
    // New line
    response = response.replaceAll("\\n", "<br>");
    // Carriage return
    // ?
    // Horizontal tab
    response = response.replaceAll("\\t", "&#09;");
    // Vertical tab
    // ?
    //response = response.replaceAll("\\v", "&#11;");
    return response;
  } else if (options[0] === "\c") {
    // no output
    return "";
  } else if(options[0] === "--help"){
    // Display help (echo.md)
    console.log(help)
    return "--help";
  } else {
    // Wrong options
    return "This option doesn't exist on echo";
  }
}
