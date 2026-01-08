import * as S from "./styles";
import type { UserCardProps } from "./interface";
import { Link } from "react-router-dom";
import { LineMdLink } from "../../assets/link";

const UserCard = ({
  member,
  isLeader,
  onRemove,
  onMakeLeader,
}: UserCardProps) => {
  return (
    <S.CardComponent>
      <h3>{member.name}</h3>

      <S.ActionsComponent>
        <button className="btn-remove" onClick={onRemove}>
          Remover da squad
        </button>

        <button
          className={`btn-leader ${isLeader ? "active-leader" : ""}`}
          onClick={onMakeLeader}
          disabled={isLeader}
        >
          {isLeader ? "Líder da Squad" : "Tornar líder"}
        </button>
        <Link to={`/profile/${member.id}`}>
          <LineMdLink />
        </Link>
      </S.ActionsComponent>
    </S.CardComponent>
  );
};

export default UserCard;
