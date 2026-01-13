import { z } from 'zod';

export const cadastroSchema = z.object({
  nome: z.string().min(3, 'Nome obrigatório'),
  email: z.string().email('Email inválido'),
  telefone: z.string().min(10, 'Telefone inválido'),
  perfil: z.string().nonempty(),
  nivel: z.string().nonempty(),
  senha: z.string().min(6),
});

export type CadastroFormData = z.infer<typeof cadastroSchema>;
