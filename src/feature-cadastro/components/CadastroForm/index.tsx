import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { cadastroSchema } from '../../pages/cadastro/schema';
import type { CadastroFormData } from '../../pages/cadastro/schema';

import { Input } from '../Input';
import { Select } from '../Select';

import type { CadastroFormProps } from './interface';
import * as S from './styles';

export function CadastroForm({
  defaultValues,
  onSubmit,
}: CadastroFormProps) {
  const methods = useForm<CadastroFormData>({
    resolver: zodResolver(cadastroSchema),
    defaultValues,
  });

  const handleSubmit = (data: CadastroFormData) => {
    if (onSubmit) {
      onSubmit(data);
      return;
    }

    console.log('Dados enviados:', data);
  };

  return (
    <S.CadastroWrapper>
      <FormProvider {...methods}>
        
        <S.Form onSubmit={methods.handleSubmit(handleSubmit)}>

          <Input name="nome" label="Nome" />
          <Input name="email" label="Email" type="email" />
          <Input name="telefone" label="Telefone" />


          <Select
            name="perfil"
            label="Perfil comportamental"
            options={[
              { label: 'Analítico', value: 'analitico' },
              { label: 'Executor', value: 'executor' },
            ]}
          />

          <Input
            name="disponibilidade"
            label="Qual horário tem disponibilidade"
            type="time"
          />






          <Select
            name="nivel"
            label="Nível de programação"
            options={[
              { label: 'Júnior', value: 'junior' },
              { label: 'Pleno', value: 'pleno' },
              { label: 'Sênior', value: 'senior' },
            ]}
          />

          <Select
            name="disponibilidade"
            label="Disponibilidade"
            options={[
              { label: 'Manhã', value: 'manha' },
              { label: 'Tarde', value: 'tarde' },
              { label: 'Noite', value: 'noite' },
            ]}  
          />

          <Input name="senha" label="Senha" type="password" />

          <S.SubmitButton type="submit">
            Confirmar e enviar
          </S.SubmitButton>

        </S.Form>
      </FormProvider>
    </S.CadastroWrapper>
  );
}
