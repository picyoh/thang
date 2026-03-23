import type Command from "./index";
import { echo } from "./commands/echo";
import { list } from "./commands/ls";
import { help } from "./commands/help";

// Check command
export class Dispatch implements Command {
  private input: string;
  response: string;

  constructor(input: string) {
    this.input = input;
    this.response = "";
  }

  execute(): string {
    // Decompose command
    const decomposed = this.input.split(" ");
    console.log(decomposed);
    const commandName = decomposed[0];
    const options = decomposed.filter((element) => element.startsWith("-"));
    const args = decomposed
      .filter((element) => element !== commandName && !element.startsWith("-"))
      .join(" ");

    switch (commandName) {
      case "echo":
        this.response = echo(options, args);
        break;
      case "ls":
        this.response = list();
        break;
      case "help":
        this.response = help();
        break;
      case "cat":
        break;
      case "mkdir":
      case "mv":
      case "cp":
      case "rm":
      case "ln":
      case "touch":
      case "chmod":
        // TODO: check right message on linux
        this.response = "You don't have rights.";
        break;
      default:
        this.response = "This command doesn't exist here.";
    }
    return this.response;
  }
}
