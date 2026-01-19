// Select/interfaces.ts
import type { SelectHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Option[];
  error?: FieldError;
}