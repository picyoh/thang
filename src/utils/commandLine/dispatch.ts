import type Command from "./index";
import { listFiles } from "./commands/ls";

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
    const commandName = decomposed[0];
    //const option = decomposed[1]
    //const argument = decomposed[2];

    switch (commandName) {
      case "ls":
        this.response = listFiles();
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
