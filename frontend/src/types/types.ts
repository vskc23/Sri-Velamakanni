export interface CustomCardProps {
  link?: string;
  startDate: string;
  endDate: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  location?: string;
  imageUrl?: string;
  isProject?: boolean;
  isAchievement?: boolean;
  content?: string[]; 
}

export interface AchievementCardProps {
  achievements: string[]; 
}
