import z from "zod";

export const squadDetailsSchema = z.object({
  name: z
    .string()
    .min(2, "O nome da squad é obrigatório")
    .regex(
      /^[a-zA-Z0-9\s]+$/,
      "O nome da squad só pode conter letras, números e espaços"
    ),
  dailyTime: z
    .string()
    .regex(/^([0-1]\d|2[0-3]):([0-5]\d)$/, "Horário inválido"),
  preferredShift: z.enum(["morning", "afternoon", "night"]).default("night"),
});

export type SquadDetails = z.infer<typeof squadDetailsSchema>;
