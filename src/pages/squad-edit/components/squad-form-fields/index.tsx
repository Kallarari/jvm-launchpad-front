import * as S from "./styles";
import { useSquadEdit } from "../../context";

type Props = {
  errors?: Record<string, string>;
};

const SquadFormFields = ({ errors }: Props) => {
  const { squad, updateSquadDetails } = useSquadEdit();

  return (
    <S.FormFieldsComponent>
      <div className="input-group">
        <div className="input-name">
          <label>Nome da Squad</label>
          <input
            type="text"
            value={squad?.name}
            onChange={(e) => updateSquadDetails({ name: e.target.value })}
          />
          {errors?.name && <div className="error">{errors.name}</div>}
        </div>
      </div>
      <div className="row">
        <div className="input-group">
          <label>Horário da daily</label>
          <input
            type="time"
            value={squad?.dailyTime}
            onChange={(e) => updateSquadDetails({ dailyTime: e.target.value })}
          />
          {errors?.dailyTime && <div className="error">{errors.dailyTime}</div>}
        </div>
        <div className="input-group">
          <label>Turno preferencial</label>
          <select
            value={squad?.preferredShift}
            onChange={(e) => {
              const shift = e.target.value as "morning" | "afternoon" | "night";
              updateSquadDetails({ preferredShift: shift });
            }}
          >
            <option value="morning">Manhã</option>
            <option value="afternoon">Tarde</option>
            <option value="night">Noite</option>
          </select>
          {errors?.preferredShift && (
            <div className="error">{errors.preferredShift}</div>
          )}
        </div>
      </div>
    </S.FormFieldsComponent>
  );
};

export default SquadFormFields;
