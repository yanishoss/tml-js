export interface Row {
  sets: number;
  reps: number;
  rpe: number|null;
  weight: number;
  unit: string;
}

export interface Exercise {
  name: string;
  rows: Row[];
  comment: string|null;
}

export interface Workout {
  comment: string|null;
  exercises: Exercise[];
}

export interface ParserConfig {
  defaultUnit: string;
  validUnits: string[];
  rpeRange: [number, number];
}