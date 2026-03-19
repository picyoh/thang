import {z} from "astro/zod";

// Command Interface
interface Command {
    execute(): void;
}

// Receiver : Terminal

export class Stdout {
    // TODO: modify to check command
    private content = '';

    appendText(text: string) {
        this.content += text;
        console.log("append text")
    }
}

// Command to append text

export class AppendCommand implements Command {
    private text: string;

    constructor(private term: HTMLFormElement, stdout: Stdout, text: string ){
        this.term = term;
        this.text = text;
    }

    execute() {
        const response = document.createElement("p");
        response.classList = "response";
        response.innerHTML = this.text;
        this.term.parentElement?.insertAdjacentElement("afterend",response);

    }
}

// Invoker

export class Stdin {
    private history: Command[] = [];

    executeCommand(command: Command) {
        command.execute()
        this.history.push(command);
    }
}