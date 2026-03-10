import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { listFile } from "./commands/list";
//TODO: add commands
export const server = {
  checkCommand: defineAction({
    input: z.object({
      value: z.string(),
    }),
    handler: async (input) => {
      let response = "";
      switch (input.value) {
        case "ls":
          response = listFile();
          break;
        case "cd":
          break;
        case "tree":
          break;
        case "cat":
          break;
        case "neofetch":
          break;
        case "pipewire":
          break;
        case "clearHistory":
          break;

        case "sudo":
        case "chmod":
        case "mkdir":
          response = "You haven't right to do that! ;)";
          break;
        default:
          response = "Sorry wrong command";
      }
      return response;
    },
  }),
};
