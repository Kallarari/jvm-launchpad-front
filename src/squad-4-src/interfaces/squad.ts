import type { User } from "./user";

export interface Squad {
    id: string;
    name: string;
    dailyTime: string;
    preferredShift: "Manhã" | "Tarde" | "Noite";
    members: User[];
    squadPoints: number;
}