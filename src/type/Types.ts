export interface Course {
  rgno: number;
  season: string;
  ay: string;
  no: string;
  lang: string;
  e: string;
  j: string;
  instructor: string;
  schedule: string[] | null;
  unit: string;
  isEnrolled: boolean;
}

export interface DevServerCourse {
  cno: string;
  term: string;
  title_j: string;
  title_e: string;
  regno: number;
  lang: string;
  summary_e: string;
  summary_j: string;
}
