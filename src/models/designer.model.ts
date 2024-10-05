import { DesignerWork } from "./work.model";

export interface Designer {
  id: number;
  nameKo: string;
  nameEng: string;
  studentId: number;
  img: string;
  email: string;
  description: string;
  works: DesignerWork[];
}

export type DesignerWorksInfo = Pick<Designer, "id" | "nameKo" | "studentId">;

export type DesingerDetailInfo = Omit<Designer, "studentId">;
