import { z } from "zod";

export const formCadastroSchema = z.object({
  perfilDiscord: z
    .string()
    .min(3, "Perfil do Discord é obrigatório"),

  nickname: z
    .string()
    .min(4, "Nickname é obrigatório"),

  gitHub: z
    .string()
    .url("Informe uma URL válida do GitHub"),
  linkedin: z
    .string()
    .url("Informe uma URL válida do LinkedIn"),

  linkPr: z
    .string()
    .url("Informe uma URL válida do PR"),
});

export type CadastroTecnicoFormData = z.infer<
  typeof formCadastroSchema
>;
