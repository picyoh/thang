import { AppendResponse } from "./appendResponse";
import { CloneCli } from "./cloneCli";
import { CheckCommand } from "./checkCommand"

// Command Interface
export default interface Command {
  execute(): void;
}

// Receiver : Stdout
export class Stdout {
  // TODO: check how it works
  checkCommand() {}
  appendResponse() {}
  cloneform() {}
}

// Invoker
export class Stdin {
  private history: string[] = [];

  appendHistory(commandName : string){
    this.history.push(commandName);
  }

  executeCommand(command: Command) {
    command.execute();
  }
}

// forment
export function handleCli(form: HTMLElement, stdin: Stdin, stdout: Stdout,value: string) {
  // Store command in history
  stdin.appendHistory(value)

  // Execute command
  const check = new CheckCommand(value);
  stdin.executeCommand(check);
  //TODO: Change value to response
  // Append Result
  const append = new AppendResponse(form!, value);
  stdin.executeCommand(append);
  
  // Append next command line
  const clone = new CloneCli(form!);
  stdin.executeCommand(clone);

  console.log(stdin, stdout);
}
