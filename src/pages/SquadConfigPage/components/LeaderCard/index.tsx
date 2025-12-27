import { ButtonComponent } from "../ButtonComponent";
import type { LeaderCardProps } from "./interface";
import {
  LeaderWrapper,
  LeaderName,
  Actions,
  GithubButton,
  StyledIcon,
} from "./styles";

export const LeaderCard = ({ name, githubUrl, onRemove }: LeaderCardProps) => {
  return (
    <LeaderWrapper>
      <LeaderName>{name}</LeaderName>

      <Actions>
        <ButtonComponent label="Remover da squad" onClick={onRemove} />
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
    </LeaderWrapper>
  );
};
