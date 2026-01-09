// Select/index.tsx
import { useFormContext } from "react-hook-form";
import * as S from "./styles";
import type { SelectProps } from "./interfaces";

export function Select({ name, label, options, error, ...rest }: SelectProps) {
  const { register } = useFormContext();

  return (
    <S.Container>
      <label htmlFor={name}>{label}</label>

      <S.Select id={name} {...register(name)} {...rest}>
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.Select>

      {error && <S.Error>{String(error.message)}</S.Error>}
    </S.Container>
  );
}