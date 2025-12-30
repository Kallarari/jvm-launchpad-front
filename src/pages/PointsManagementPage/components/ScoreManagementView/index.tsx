import { useEffect, useState } from "react";

import type { ScoreManagementProps } from "./interface";
import type { Squad } from "../../../../squad-4-src/interfaces/squad";

import { AddPointsButton } from "../AddPointsButton";
import { getSquadsMock } from "../../../../squad-4-src/mocks/squads.mock";
import { usersMock } from "../../../../squad-4-src/mocks/users.mock";

import {
  ScoreManagementStyled,
  PointsButtonWrap,
  ScoreManagementWrap,
  MemberNameStyled,
  MemberPointsStyled,
  LeaderText,
} from "./style";

export const ScoreManagementView = ({
  MemberName,
  MemberPoints,
}: ScoreManagementProps) => {
  const [squads, setSquads] = useState<Squad[]>([]);

  useEffect(() => {
    getSquadsMock().then(setSquads);
  }, []);

  return (
    <ScoreManagementWrap>
      {usersMock
        .filter((user) => user.role === "member" || user.role === "leader")
        .map((user) => {
          const squad = squads.find((squad) =>
            squad.members.some((member) => member.id === user.id)
          );

          return (
            <ScoreManagementStyled key={user.id}>
              {MemberName && (
                <MemberNameStyled>
                  {user.name.split(" ")[0]}{" "}
                  {user.role === "leader" && squad && (
                    <LeaderText>líder squad {squad.id}</LeaderText>
                  )}
                </MemberNameStyled>
              )}

              {MemberPoints && (
                <MemberPointsStyled>{user.points}</MemberPointsStyled>
              )}

              <PointsButtonWrap>
                <AddPointsButton label="+10" />
                <AddPointsButton label="+5" />
                <AddPointsButton label="+2" />
              </PointsButtonWrap>
            </ScoreManagementStyled>
          );
        })}
    </ScoreManagementWrap>
  );
};
