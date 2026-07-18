export type ContactStatusType =
  | "success"
  | "error";

export interface ContactStatusState {
  type: ContactStatusType;
  message: string;
}