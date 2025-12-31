import { useMemo, useState } from "react";
import { ButtonComponent } from "../SquadConfigPage/components/ButtonComponent";
import { MemberCard } from "./components/MemberCard";
import { SearchBar } from "./components/SearchBar";
import { SquadCard } from "./components/SquadCard";
import { SquadDevToggle } from "./components/SquadDevToggle";
import styles from "./styles.module.css";
import type { ToggleValue } from "./components/SquadDevToggle/interface";
import { usePagination } from "../../squad-4-src/hooks/usePagination";
import { Pagination } from "../../squad-4-src/components/Pagination";
import { filterSquads, filterMembers } from "../../squad-4-src/utils/filter";
import {
  addMemberPoints,
  addSquadPoints,
} from "../../squad-4-src/utils/points";
import { paginate, getTotalPages } from "../../squad-4-src/utils/pagination";
import { ITEMS_PER_PAGE } from "../../squad-4-src/constants/pagination";
import { useSquads } from "../../squad-4-src/hooks/useSquads";

export const PointsManagementPage = () => {
  const { squads, setSquads} = useSquads();

  const [toggleValue, setToggleValue] = useState<ToggleValue>("squad");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSquads = useMemo(
    () => filterSquads(squads, searchTerm),
    [squads, searchTerm]
  );

  const filteredMembers = useMemo(
    () => filterMembers(squads, searchTerm),
    [squads, searchTerm]
  );

  const totalItems =
    toggleValue === "squad" ? filteredSquads.length : filteredMembers.length;

  const totalPages = getTotalPages(totalItems, ITEMS_PER_PAGE);

  const { currentPage, goTo } = usePagination(totalPages);

  const paginatedSquads = paginate(filteredSquads, currentPage, ITEMS_PER_PAGE);
  const paginatedMembers = paginate(
    filteredMembers,
    currentPage,
    ITEMS_PER_PAGE
  );

  const handleChangeToggle = (value: ToggleValue) => {
    setToggleValue(value);
    goTo(1);
  };

  const handleAddSquadPoints = (squadId: string, points: number) => {
    setSquads((prev) => addSquadPoints(prev, squadId, points));
  };

  const handleAddMemberPoints = (memberId: string, points: number) => {
    setSquads((prev) => addMemberPoints(prev, memberId, points));
  };

  return (
    <div className={styles.main}>
      <div className={styles.pageHeader}>
        <ButtonComponent icon="ep:back" heightSize="md" />
        <h1 className={styles.pageHeader__title}>Configuração de pontuação</h1>
        <SquadDevToggle value={toggleValue} onChange={handleChangeToggle} />
      </div>

      <SearchBar
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          goTo(1);
        }}
      />

      <div className={styles.content}>
        {toggleValue === "squad" &&
          paginatedSquads.map((squad) => (
            <SquadCard
              key={squad.id}
              name={squad.name}
              score={squad.squadPoints}
              onAdd1={() => handleAddSquadPoints(squad.id, 1)}
              onAdd2={() => handleAddSquadPoints(squad.id, 2)}
            />
          ))}

        {toggleValue === "dev" &&
          paginatedMembers.map((member) => (
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

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={goTo}
        />
      )}
    </div>
  );
};
