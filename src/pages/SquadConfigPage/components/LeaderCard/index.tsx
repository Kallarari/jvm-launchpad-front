import { ButtonComponent } from "../ButtonComponent";
import type { LeaderCardProps } from "./interface";
import {
  LeaderWrapper,
  LeaderName,
  Actions,
  StyledIcon,
  UserButton,
} from "./styles";

export const LeaderCard = ({ name, userUrl, onRemove }: LeaderCardProps) => {
  return (
    <LeaderWrapper>
      <LeaderName>{name}</LeaderName>

      <Actions>
        <ButtonComponent label="Remover da squad" onClick={onRemove} />
        <UserButton
          as="a"
          href={userUrl.startsWith("http") ? userUrl : `https://${userUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon icon="nrk:link" />
        </UserButton>
      </Actions>
    </LeaderWrapper>
  );
};
