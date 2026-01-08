import styled from "styled-components";
import { theme } from "../../../../infrastructure/theme/index";

export const FormFieldsComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
  width: 100%;
  margin-bottom: ${theme.spacing["2xl"]};

  .input-group {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.sm};
    width: 100%;

    label {
      font-size: ${theme.fontSizes.sm};
      color: #757488;
      font-weight: 500;
    }

    input,
    select {
      box-sizing: border-box;
      background: #fff;
      border: 1px solid #393649;
      border-radius: ${theme.borderRadius.md};
      padding: ${theme.spacing.sm} ${theme.spacing.md};
      min-height: ${theme.spacing.xl};
      color: #2c2a38;
      font-size: ${theme.fontSizes.md};
      outline: none;
      transition: border-color 0.2s;

      &:focus {
        border-color: #e63946;
      }

      &::placeholder {
        color: #585760;
      }
    }

    .input-name {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing.sm};
      width: 50%;
      align-self: center;

      @media (max-width: ${theme.breakpoints.md}) {
        width: 100%;
      }
    }

    input[type="time"]::-webkit-calendar-picker-indicator {
      cursor: pointer;
    }
  }

  .row {
    display: flex;
    gap: ${theme.spacing["3xl"]};
    width: 100%;

    @media (max-width: ${theme.breakpoints.md}) {
      flex-direction: column;
      gap: ${theme.spacing.lg};
    }
  }
`;
