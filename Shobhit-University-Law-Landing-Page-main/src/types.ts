/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TickerItem {
  id: string;
  text: string;
  highlight?: string;
  iconType: "admissions" | "accredited" | "placement" | "stipend" | "certification";
}

export interface SpecificationItem {
  id: string;
  category: string;
  title: string;
  description: string;
  outcome: string;
  colorTheme: "red" | "pink" | "blue";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface AcademyStat {
  label: string;
  value: string;
  metric: string;
}

export interface CurriculumSemester {
  semester: string;
  title: string;
  coreSubjects: string[];
  certifications: string[];
}

export interface SpecializationDetail {
  id: string;
  name: string;
  duration: string;
  overview: string;
  keySkills: string[];
  careerProspects: string[];
}
