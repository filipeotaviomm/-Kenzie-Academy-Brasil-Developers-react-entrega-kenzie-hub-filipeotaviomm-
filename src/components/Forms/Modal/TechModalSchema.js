import { z } from "zod";

export const TechModalSchema = z.object({
  title: z.string().nonempty("Esse campo é obrigatório"),
  status: z.string().nonempty("Esse campo é obrigatório"),
});
