import type { CadastroFormData } from '../../pages/cadastro/schema';

export interface CadastroFormProps {
  defaultValues?: Partial<CadastroFormData>;
  onSubmit?: (data: CadastroFormData) => void;
}
