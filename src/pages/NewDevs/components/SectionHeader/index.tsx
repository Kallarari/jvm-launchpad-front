import { NavbarWrapper, PageTitle, ActionButton } from "./styles";
import type { SectionHeaderProps } from "./interface";

export function SectionHeader ({rightLabel, leftIcon, titlePrimary, onLeftClick, onRightClick}:SectionHeaderProps) {
  return (
    <NavbarWrapper>
      {leftIcon && (
        <ActionButton onClick={onLeftClick}>
          {leftIcon}
        </ActionButton>
      )}
      <PageTitle>{titlePrimary}</PageTitle>
      {rightLabel && (
        <ActionButton onClick={onRightClick}>
          {rightLabel}
        </ActionButton>
      )}

    </NavbarWrapper>
  )
}