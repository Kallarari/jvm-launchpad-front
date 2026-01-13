import * as S from "./styles";
import type { Step } from "../Stepper/interfaces";

const steps: Step[] = [
  {
    id: 1,
    title: "Conhecer o projeto",
    description: "Ler o notion com as regras",
    completed: true,
  },
  {
    id: 2,
    title: "Cadastro",
    description: "Preencher dados aqui",
    completed: false,
  },
  {
    id: 3,
    title: "Teste técnico",
    description: "Teste técnico guiado",
    completed: false,
  },
];

export function Stepper() {
  return (
    <S.Container>
      {steps.map((step, index) => (
        <S.Step key={index} completed={step.completed}>
          <S.Circle completed={step.completed}>
            {step.completed ? "✓" : step.id}
          </S.Circle>
          <S.Content>
            <S.Title>{step.title}</S.Title>
            <S.Description>{step.description}</S.Description>
          </S.Content>
        </S.Step>
      ))}
    </S.Container>
  );
}
