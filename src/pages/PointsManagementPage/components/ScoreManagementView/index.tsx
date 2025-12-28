import type { ScoreManagementProps } from "./interface";
import { AddPointsButton } from "../AddPointsButton";
import { ScoreManagementStyled } from "./style";
import { PointsButtonWrap } from "./style";
import { ScoreManagementWrap } from "./style";
import { MemberNameStyled } from "./style";
import { MemberPointsStyled } from "./style";
import { usersMock } from "../../../../squad-4-src/mocks/users.mock";

export const ScoreManagementView = ({
  MemberName,
  MemberPoints,
}: ScoreManagementProps) => {
  return (
    <>
      <ScoreManagementWrap>
        {usersMock
          .filter((user) => user.role === "member" || user.role === "leader")
          .map((user) => (
            <ScoreManagementStyled key={user.id}>
              {MemberName && (
                <MemberNameStyled>{user.name.split(" ")[0]}</MemberNameStyled>
              )}
              {MemberPoints && (
                <MemberPointsStyled key={user.points}>
                  {user.points}
                </MemberPointsStyled>
              )}
              <PointsButtonWrap>
                {<AddPointsButton label="+10" />}
                {<AddPointsButton label="+5" />}
                {<AddPointsButton label="+2" />}
              </PointsButtonWrap>
            </ScoreManagementStyled>
          ))}
      </ScoreManagementWrap>
    </>
  );
};
