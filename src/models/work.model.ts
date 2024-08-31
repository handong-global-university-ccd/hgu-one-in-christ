import { Designer } from "./designer.model";

export interface Work {
  id: number;
  teamName: string | null;
  designer: Designer[];
  title: string;
  gridImg: string;
  mainImg: string;
}
