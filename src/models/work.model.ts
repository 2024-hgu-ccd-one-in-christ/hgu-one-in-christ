import { DesignerWorksInfo } from "./designer.model";

export interface Works {
  COMMUNICATION: Work[];
  SERVICE: Work[];
  UXUI: Work[];
  PRODUCT: Work[];
}

export interface Work {
  id: number;
  teamName: string | null;
  designer: DesignerWorksInfo[];
  title: string;
  description: string;
  gridImg: string;
  mainImg: string;
}

export interface DesignerWork {
  work: Work[];
  category: string;
  worksId: number;
}
