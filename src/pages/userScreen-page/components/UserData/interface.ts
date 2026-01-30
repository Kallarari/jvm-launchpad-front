export interface UserInfo {
  email: string;
  contato: string;
  perfilComportamental: string;
  ativoDesde: string;
}

export interface PersonalDataProps {
  data: UserInfo;
  className?: string;
}