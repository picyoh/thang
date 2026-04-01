import type Command from "./index";
import { echo } from "../commands/echo";
import { list } from "../commands/ls";
import { fastfetch } from "../commands/fastfetch";

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
    const options = decomposed.filter((element) => element.startsWith("-"));
    const args = decomposed
      .filter((element) => element !== commandName && !element.startsWith("-"))
      .join(" ");

      // TODO: remove log
      console.log(commandName)

    switch (commandName) {
      case "echo":
        this.response = echo(options, args);
        break;
      case "ls":
        this.response = list();
        break;
      case "fastfetch":
        this.response = fastfetch();
        break;
      default:
        console.error(`There's an error with : '${commandName}'`)
        this.response = "This command doesn't exist here.";
    }
    return this.response;
  }
}
