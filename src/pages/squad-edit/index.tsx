import { useState, useMemo } from "react";
import { useSquadEdit } from "./context";

import { useNavigate } from "react-router-dom";

import * as S from "./styles.module";
import { squadDetailsSchema } from "./validation";

import Header from "./components/header";
import SquadFormFields from "./components/squad-form-fields";
import UserCard from "./components/user-card";
import RecommendationCard from "./components/recomendation-card";
import { Footer } from "./components/footer";

const SquadEditPage = () => {
  const {
    squad,
    recommendations,
    loading,
    setLeader,
    removeMember,
    addMember,
  } = useSquadEdit();

  const navigate = useNavigate();

  const isSquadFull = (squad?.members.length ?? 0) >= 3;

  const [searchTerm, setSearchTerm] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const filteredRecommendations = useMemo(() => {
    return recommendations.filter((user) => {
      const isAlreadyMember = squad?.members.some(
        (member) => member.id === String(user.id)
      );

      const matchesSearch = user.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return !isAlreadyMember && matchesSearch;
    });
  }, [recommendations, squad?.members, searchTerm]);

  if (loading) {
    return (
      <>
        <S.PageContainer>
          <Header />
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            Carregando...
          </div>
        </S.PageContainer>
      </>
    );
  }

  const handleSubmit = () => {
    const parse = squadDetailsSchema.safeParse(squad ?? {});
    if (!parse.success) {
      const fieldErrors = parse.error.flatten().fieldErrors;
      const mapped: Record<string, string> = {};
      Object.entries(fieldErrors).forEach(([key, val]) => {
        if (val && val.length) mapped[key] = val[0];
      });
      setFormErrors(mapped);
      return;
    }
    setFormErrors({});
    navigate(-1);
  };

  return (
    <>
      <S.PageContainer>
        <Header />
        <S.TitleSectionComponent>
          <div className="back" onClick={() => navigate(-1)}>
            ←
          </div>
          <div className="title">Criar Squad</div>
          <button className="confirmed" onClick={handleSubmit}>
            Confirmar
          </button>
        </S.TitleSectionComponent>

        <S.FormSectionComponent>
          <SquadFormFields errors={formErrors} />
          <h3>Membros</h3>
          <S.MembersListComponent>
            {squad?.members.map((member) => (
              <UserCard
                key={member.id}
                member={member}
                onRemove={() => removeMember(member.id)}
                onMakeLeader={() => setLeader(member.id)}
                isLeader={member.id === squad.leaderId}
              />
            ))}
          </S.MembersListComponent>
        </S.FormSectionComponent>

        <S.RecommendationSectionComponent>
          <h2>Melhores correspondências</h2>

          <S.SearchInputComponent>
            <input
              type="text"
              placeholder="Pesquisar por nome..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </S.SearchInputComponent>

          <S.ListUserComponent>
            {filteredRecommendations.map((user) => (
              <RecommendationCard
                key={user.id}
                user={user}
                onAdd={() => addMember(user)}
                disableAdd={isSquadFull}
              />
            ))}
          </S.ListUserComponent>
        </S.RecommendationSectionComponent>
        <Footer />
      </S.PageContainer>
    </>
  );
};

export default SquadEditPage;
