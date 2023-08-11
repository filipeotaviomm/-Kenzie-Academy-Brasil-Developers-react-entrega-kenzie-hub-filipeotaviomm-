import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().nonempty("O nome é obrigatório"),
    email: z
      .string()
      .nonempty("O e-mail é obrigatório")
      .email("Forneça um e-mail válido"),
    password: z
      .string()
      .nonempty("A senha é obrigatória")
      .min(8, "É necessário pelo menos oito caracteres")
      .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula")
      .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúsucula")
      .regex(/[0-9]+/, "É necessário pelo menos um número"),
    // .regex(
    //   /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/]/,
    //   "É necessário ter pelo menos um caracter especial"
    // ),
    confirmPassword: z.string().nonempty("É obrigatório confirmar a senha"),
    bio: z.string().nonempty("A bio é obrigatória"),
    contact: z.string().nonempty("O contato é obrigatório"),
    course_module: z.string().nonempty("É obrigatório selecionar o seu módulo"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
