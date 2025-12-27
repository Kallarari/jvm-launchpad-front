import { useState } from "react";
import type { Squad } from "../../../../squad-4-src/interfaces/squad";
import type { User } from "../../../../squad-4-src/interfaces/user";
import { ButtonComponent } from "../ButtonComponent";
import { EditSquadCard } from "../EditSquadCard";
import { LeaderCard } from "../LeaderCard";
import { MemberCard } from "../MemberCard";
import { SquadInfo } from "../SquadInfo";
import { CreateSquad, ModalTopWrapper, ModalWrapper, Overlay } from "./styles";
import type { SquadEditionModalProps } from "./interface";

export const SquadEditionModal = ({
  squad,
  onClose,
  onSave,
}: SquadEditionModalProps) => {
  const [members, setMembers] = useState<User[]>(squad.members);

  const handleRemove = (id: string) => {
    setMembers((prev) => prev.filter((member) => member.id !== id));
  };

  const handleMakeLeader = (id: string) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === id
          ? { ...member, role: "leader" }
          : member.role === "leader"
          ? { ...member, role: "member" }
          : member
      )
    );
  };

  const handleConfirm = () => {
    const updatedSquad: Squad = { ...squad, members };
    onSave(updatedSquad);
    onClose();
  };

  const leader = members.find((member) => member.role === "leader");
  const squadMembers = members.filter((member) => member.role === "member");

  return (
    <Overlay>
      <ModalWrapper>
        <ModalTopWrapper>
          <ButtonComponent icon="ep:back" size="md" onClick={onClose} />
          <CreateSquad>{squad.name}</CreateSquad>
          <ButtonComponent
            label="Confirmar"
            size="md"
            onClick={handleConfirm}
          />
        </ModalTopWrapper>

        <SquadInfo squad={{ ...squad, members }} />

        {leader && (
          <LeaderCard
            name={leader.name}
            githubUrl="www.google.com"
            onRemove={() => handleRemove(leader.id)}
          />
        )}

        {squadMembers.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            githubUrl="www.google.com"
            onRemove={() => handleRemove(member.id)}
            onMakeLeader={() => handleMakeLeader(member.id)}
          />
        ))}

        <EditSquadCard />
      </ModalWrapper>
    </Overlay>
  );
};
