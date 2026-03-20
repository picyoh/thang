import type Command from "./command";

// Handle command
export class CheckCommand implements Command {
  private input: string;

  constructor(input: string){
    this.input = input;
  }

  execute() : void{
    console.log(this.input)
  }
}