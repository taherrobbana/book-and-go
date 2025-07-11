// Generic
export type TODO = any;

// State
export interface RootState {
  userPreferencesModule: UserPreferencesState;
}
export interface UserPreferencesState {
  language: string;
}
