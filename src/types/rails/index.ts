export type Option<T> = {
  value: T;
  commandText: string;
  description: string;
  choices?: T[];
};
