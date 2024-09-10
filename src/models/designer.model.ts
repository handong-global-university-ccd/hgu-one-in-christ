import { DesignerWork } from "./work.model";

export interface Designer {
  id: number;
  nameKo: string;
  nameEng: string;
  studentId: number;
  img: string;
  description: string;
  works: DesignerWork[];
}

export type DesignerWorksInfo = Pick<Designer, "nameKo" | "studentId">;
