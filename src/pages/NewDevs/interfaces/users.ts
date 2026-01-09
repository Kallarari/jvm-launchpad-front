export interface Dev {
  id: number;
  name: string;
  status?:"Concluiu Processo";
  preferredShift: string;
  level: string;
  profile: string;
  availability: string;
  github?:string;
  whatsapp?: string;
}