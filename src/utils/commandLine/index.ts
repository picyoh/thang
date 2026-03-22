import { AppendResponse } from "./appendResponse";
import { CloneCli } from "./cloneCli";
import { Dispatch } from "./dispatch"

// Command Interface
export default interface Command {
  execute(): void;
}

// Receiver : Stdout
export class Stdout {
  Dispatch() {}
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
  const dispatch = new Dispatch(value);
  stdin.executeCommand(dispatch);
  const response = dispatch.response;
  // Append Result
  const append = new AppendResponse(form!, response);
  stdin.executeCommand(append);
  
  // Append next command line
  const clone = new CloneCli(form!);
  stdin.executeCommand(clone);

  console.log(stdin, stdout);
}
