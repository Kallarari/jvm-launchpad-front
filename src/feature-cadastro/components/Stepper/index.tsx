import * as S from "./styles";
import type { Step } from "./interfaces";

interface StepperProps {
  steps: Step[];
}

export function Stepper({ steps }: StepperProps) {
  return (
    <S.Container>
      {steps.map((step) => (
        <S.Step key={step.id} completed={step.completed}>
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
