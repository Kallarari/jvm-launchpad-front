import { createContext, useContext, useState, useEffect } from "react";
import type { Squad, User, SquadMember } from "../../infrastructure/types";
import { getSquadById, getRecommendedUsers } from "./mock";
import { useParams } from "react-router-dom";

interface SquadContextType {
  squad: Squad | null;
  recommendations: User[];
  loading: boolean;
  updateSquadDetails: (details: Partial<Squad>) => void;
  addMember: (user: User) => void;
  removeMember: (userId: string) => void;
  setLeader: (userId: string) => void;
}

const SquadEditContext = createContext<SquadContextType | undefined>(undefined);
const MAX_MEMBERS = 3;

export const SquadEditProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { id } = useParams();
  const [squad, setSquad] = useState<Squad | null>(null);
  const [recommendations, setRecommendations] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        if (!id) return;

        const data = await getSquadById(id);
        setSquad(data);

        const recs = await getRecommendedUsers({
          shift: data.preferredShift,
          level: "intermediate",
        });

        setRecommendations(recs);
      } catch (error) {
        console.error("Erro ao carregar squad", error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, [id]);

  const updateSquadDetails = (details: Partial<Squad>) => {
    setSquad((current) => {
      if (!current) return null;
      return { ...current, ...details };
    });
  };

  const addMember = (user: User) => {
    if (!squad) return;

    if (squad.members.length >= MAX_MEMBERS) {
      return;
    }

    if (squad.members.some((m) => m.id === String(user.id))) return;

    const newMember: SquadMember = {
      id: String(user.id),
      name: user.name,
      points: user.points,
      isLeader: false,
    };
    setSquad({ ...squad, members: [...squad.members, newMember] });
  };

  const removeMember = (userId: string) => {
    if (!squad) return;
    const updatedMembers = squad.members.filter((m) => m.id !== userId);
    const isRemovingLeader = squad.leaderId === userId;

    setSquad({
      ...squad,
      members: updatedMembers,
      leaderId: isRemovingLeader ? "" : squad.leaderId,
    });
  };

  const setLeader = (userId: string) => {
    if (!squad) return;
    const updatedMembers = squad.members.map((m) => ({
      ...m,
      isLeader: m.id === userId,
    }));
    setSquad({ ...squad, members: updatedMembers, leaderId: userId });
  };

  return (
    <SquadEditContext.Provider
      value={{
        squad,
        recommendations,
        loading,
        updateSquadDetails,
        addMember,
        setLeader,
        removeMember,
      }}
    >
      {children}
    </SquadEditContext.Provider>
  );
};

export const useSquadEdit = () => {
  const context = useContext(SquadEditContext);
  if (!context)
    throw new Error("useSquadEdit deve ser usado dentro do Provider");
  return context;
};
