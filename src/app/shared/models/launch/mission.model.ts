import { Iorbit } from "./orbit.model";

export interface IMission {
  name: string;
  description: string;
  type: string;
  orbit:Iorbit
}
