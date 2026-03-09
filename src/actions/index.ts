import { defineAction } from "astro:actions";
import { z } from "astro/zod";
//TODO: add commands
export const server = {
  checkCommand: defineAction({
    input: z.object({
      value: z.string(),
    }),
    handler: async (input) => {
        return `ok`;
    },
  }),
};
