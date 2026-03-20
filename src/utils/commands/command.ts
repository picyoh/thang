import { z } from "astro/zod";

// Command Interface
export default interface Command {
  execute(): void;
}

// Receiver : Stdout
export class Stdout {
  // TODO: modify to check command
  appendResponse() {}
  cloneCli() {}
  handleCommand() {}
}

// Invoker
export class Stdin {
  private history: Command[] = [];

  executeCommand(command: Command) {
    command.execute();
    this.history.push(command);
  }
}
