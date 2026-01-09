import type { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import * as S from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export function Input({ name, label, ...rest }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message;

  return (
    <S.Container>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input id={name} {...register(name)} {...rest} />
      {error && <S.Error>{String(error)}</S.Error>}
    </S.Container>
  );
}