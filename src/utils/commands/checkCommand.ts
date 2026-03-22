import type Command from "./index";

// Check command
export class CheckCommand implements Command {
  private input: string;

  constructor(input: string){
    this.input = input;
  }

  execute() : void{
    // TODO: Check command
    //console.log(this.input);
  }
}