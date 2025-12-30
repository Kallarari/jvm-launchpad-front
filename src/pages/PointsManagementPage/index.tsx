import { useEffect, useState } from "react";
import { getSquadsMock } from "../../squad-4-src/mocks/squads.mock";
import { ButtonComponent } from "../SquadConfigPage/components/ButtonComponent";
import { MemberCard } from "./components/MemberCard";
import { SearchBar } from "./components/SearchBar";
import { SquadCard } from "./components/SquadCard";
import { SquadDevToggle } from "./components/SquadDevToggle";
import styles from "./styles.module.css";
import type { Squad } from "../../squad-4-src/interfaces/squad";
import type { ToggleValue } from "./components/SquadDevToggle/interface";

export const PointsManagementPage = () => {
  const [toggleValue, setToggleValue] = useState<ToggleValue>("squad");
  const [squads, setSquads] = useState<Squad[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getSquadsMock().then(setSquads);
  }, []);

  const handleAddSquadPoints = (squadId: string, points: number) => {
    setSquads((prevSquads) =>
      prevSquads.map((squad) =>
        squad.id === squadId
          ? { ...squad, squadPoints: squad.squadPoints + points }
          : squad
      )
    );
  };

  const handleAddMemberPoints = (memberId: string, points: number) => {
    setSquads((prevSquads) =>
      prevSquads.map((squad) => ({
        ...squad,
        members: squad.members.map((member) =>
          member.id === memberId
            ? { ...member, points: (member.points ?? 0) + points }
            : member
        ),
      }))
    );
  };

  const filteredSquads = squads.filter(
    (squad) =>
      squad.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      squad.members.some((member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const filteredMembers = squads
    .flatMap((squad) =>
      squad.members.map((member) => ({ ...member, squadName: squad.name }))
    )
    .filter(
      (member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.squadName.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className={styles.main}>
      <div className={styles.pageHeader}>
        <ButtonComponent icon="ep:back" heightSize="md" />
        <h1 className={styles.pageHeader__title}>Configuração de pontuação</h1>
        <SquadDevToggle value={toggleValue} onChange={setToggleValue} />
      </div>
      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {toggleValue === "squad" &&
        filteredSquads.map((squad) => (
          <SquadCard
            key={squad.id}
            name={squad.name}
            score={squad.squadPoints}
            onAdd1={() => handleAddSquadPoints(squad.id, 1)}
            onAdd2={() => handleAddSquadPoints(squad.id, 2)}
          />
        ))}

      {toggleValue === "dev" &&
        filteredMembers.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            score={member.points ?? 0}
            role={member.role}
            squadName={member.squadName}
            onAdd10={() => handleAddMemberPoints(member.id, 10)}
            onAdd5={() => handleAddMemberPoints(member.id, 5)}
            onAdd2={() => handleAddMemberPoints(member.id, 2)}
          />
        ))}
    </div>
  );
};
