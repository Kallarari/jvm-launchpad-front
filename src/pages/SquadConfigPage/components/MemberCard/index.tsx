import { ButtonComponent } from "../ButtonComponent";
import type { MemberCardProps } from "./interface";
import {
  MemberWrapper,
  MemberName,
  Actions,
  GithubButton,
  StyledIcon,
} from "./styles";

export const MemberCard = ({
  name,
  githubUrl,
  onRemove,
  onMakeLeader,
}: MemberCardProps) => {
  return (
    <MemberWrapper>
      <MemberName>{name}</MemberName>

      <Actions>
        <ButtonComponent label="Tornar líder" onClick={onMakeLeader} />

        <ButtonComponent label="Remover da squad" onClick={onRemove} />
        {/* colocar link da page do usuario dps */}
        <GithubButton
          as="a"
          href={
            githubUrl.startsWith("http") ? githubUrl : `https://${githubUrl}`
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon icon="nrk:link" />
        </GithubButton>
      </Actions>
    </MemberWrapper>
  );
};
