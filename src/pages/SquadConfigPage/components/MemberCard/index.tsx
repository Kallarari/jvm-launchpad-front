import { ButtonComponent } from "../ButtonComponent";
import type { MemberCardProps } from "./interface";
import {
  MemberWrapper,
  MemberName,
  Actions,
  UserButton,
  StyledIcon,
} from "./styles";

export const MemberCard = ({
  name,
  userUrl,
  onRemove,
  onMakeLeader,
}: MemberCardProps) => {
  return (
    <MemberWrapper>
      <MemberName>{name}</MemberName>

      <Actions>
        <ButtonComponent label="Tornar líder" onClick={onMakeLeader} />

        <ButtonComponent label="Remover da squad" onClick={onRemove} />
        {/* colocar link da page do usuario dps, quando for criado */}
        <UserButton
          as="a"
          href={userUrl.startsWith("http") ? userUrl : `https://${userUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon icon="nrk:link" />
        </UserButton>
      </Actions>
    </MemberWrapper>
  );
};
