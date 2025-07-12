import { Salle } from "@/interfaces/salle.interface";

// Generic
export type TODO = any;

// State
export interface RootState {
  userPreferencesModule: UserPreferencesState;
   sallesModule: SallesState; 
}
export interface UserPreferencesState {
  language: string;
}
export interface SallesState {
  salles: Salle[];
  language: string;
}

export type eventType = {
  id?: number;
  start?: string;
  end?: string;
  title?: string;
  discription?: string;
  class?: string;
};
