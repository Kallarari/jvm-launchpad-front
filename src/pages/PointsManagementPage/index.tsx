import { ScoreManagementView } from "./components/ScoreManagementView";

/* Pode por seu componente ali em return para que vc consiga olhar na pagina como ele fica e edita-lo. 
   Nao pode commitar o seu componente aqui, use so para editar e dps apague desse arquivo
*/

export const PointsManagementPage = () => {
  return (
    <>
      <ScoreManagementView
        MemberName="MemberName"
        MemberPoints="MemberPoints"
      />
    </>
  );
};
