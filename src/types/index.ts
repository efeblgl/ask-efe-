export type Role = "user" | "bot";

export interface ChatMessage {
  id: string;
  role: Role;
  text: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  code: string;
  large?: boolean;
  label: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export interface Service {
  id: string;
  index: string;
  title: string;
  text: string;
}
