import * as S from "./styles";
import type { User } from "../../../../infrastructure/types";
import { Link } from "react-router-dom";
import { LineMdLink } from "../../assets/link";
import { LineiconsGithub } from "../../assets/github";
import { MingcuteWhatsappFill } from "../../assets/whatsapp";

interface Props {
  user: User;
  onAdd: () => void;
  disableAdd?: boolean;
}

const getCorrectPhoneLink = (user: User): string | undefined => {
  const rawPhoneNumber = user?.phone;
  if (!rawPhoneNumber) return undefined;
  let digits = rawPhoneNumber.replace(/\D/g, "");

  if (!digits) return undefined;

  if (/^00/.test(rawPhoneNumber)) {
    digits = digits.replace(/^00/, "");
  }
  return `https://wa.me/${digits}`;
};

const RecommendationCard = ({ user, onAdd, disableAdd }: Props) => {
  return (
    <S.RecommendationCardComponent $isDisabled={disableAdd}>
      <div className="header-card">
        <h3>{user.name}</h3>
        <div className="actions">
          <button onClick={onAdd} disabled={disableAdd}>
            Incluir na equipe
          </button>
          <Link to={`/profile/${user.id}`}>
            <LineMdLink />
          </Link>
        </div>
      </div>

      <S.StatsGridComponent>
        <div>
          <span>Turno preferencial</span>
          <p>{user.preferredShifts[0]}</p>
        </div>
        <div>
          <span>Nível</span>
          <p>{user.programmingLevel}</p>
        </div>
        <div>
          <span>Perfil</span>
          <p>{user.developerProfile}</p>
        </div>
        <div>
          <span>Disponibilidade</span>
          <p>{user.availableHoursPerDay} horas</p>
        </div>
        <div className="social-icons">
          <a href={user.githubLink}>
            <LineiconsGithub />
          </a>
          <a
            href={getCorrectPhoneLink(user) ?? "#"}
            target="_blank"
            rel="noreferrer"
          >
            <MingcuteWhatsappFill />
          </a>
        </div>
      </S.StatsGridComponent>
    </S.RecommendationCardComponent>
  );
};

export default RecommendationCard;
