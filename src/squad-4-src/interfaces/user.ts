export interface User {
    id: string;
    name: string;
    role: "admin" | "leader" | "member";
    points?: number;
}