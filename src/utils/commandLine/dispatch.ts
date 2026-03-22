import type Command from "./index";
import {listFiles} from "./commands/list"

// Check command
export class Dispatch implements Command {
  private input: string;
  response: string;

  constructor(input: string){
    this.input = input;
    this.response = '';
  }

  execute() : string{
    // Decompose command
    const decomposed = this.input.split(' ');
    const commandName = decomposed[0];
    //const option = decomposed[1]
    //const argument = decomposed[2];

    switch(commandName){
      case "ls":
      this.response = listFiles(); 
      break;
      case "cat":
    }
    return this.response;
  }
}