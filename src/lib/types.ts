import type { LucideIcon } from "lucide-react";

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Course {
  id: number;
  title: string;
  category: 'AI & ML' | 'Web Development' | 'Data Science';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  format: 'Online' | 'In-person';
  description: string;
  image: string;
  dataAiHint: string;
}
