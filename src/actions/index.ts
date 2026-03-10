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
        case "neofetch":
          break;
        case "pipewire":
          break;
        default:
          response = "Sorry wrong command";
      }
      return response;
    },
  }),
};
