import type { ScoreManagementProps } from "./interface";
import { AddPointsButton } from "../AddPointsButton";
import { ScoreManagementStyled } from "./style";
import { PointsButtonWrap } from "./style";
import { ScoreManagementWrap } from "./style";
// import { usersMock } from "../../../../squad-4-src/mocks/users.mock";

export const ScoreManagementView = ({
  MemberName,
  MemberPoints,
}: ScoreManagementProps) => {
  return (
    <>
      <ScoreManagementWrap>
        <ScoreManagementStyled>
          {MemberName && <div>{(MemberName = "Mariana")}</div>}
          {MemberPoints && <div>{(MemberPoints = "1000 Pontos")}</div>}
          <PointsButtonWrap>
            {<AddPointsButton label="+10" />}
            {<AddPointsButton label="+5" />}
            {<AddPointsButton label="+2" />}
          </PointsButtonWrap>
        </ScoreManagementStyled>

        <ScoreManagementStyled>
          {MemberName && <div>{(MemberName = "Rafael")}</div>}
          {MemberPoints && <div>{(MemberPoints = "1000 Pontos")}</div>}
          <PointsButtonWrap>
            {<AddPointsButton label="+10" />}
            {<AddPointsButton label="+5" />}
            {<AddPointsButton label="+2" />}
          </PointsButtonWrap>
        </ScoreManagementStyled>

        <ScoreManagementStyled>
          {MemberName && <div>{(MemberName = "Vantttine")}</div>}
          {MemberPoints && <div>{(MemberPoints = "1000 Pontos")}</div>}
          <PointsButtonWrap>
            {<AddPointsButton label="+10" />}
            {<AddPointsButton label="+5" />}
            {<AddPointsButton label="+2" />}
          </PointsButtonWrap>
        </ScoreManagementStyled>
      </ScoreManagementWrap>
    </>
  );
};
