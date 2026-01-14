
export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface ActivityDay {
  day: string;
  label: string;
  status: 'done' | 'planned' | 'rest' | 'today';
}

export interface ProgressionStep {
  id: number;
  name: string;
  isCompleted: boolean;
  isCurrent: boolean;
  isLocked: boolean;
}

export interface WorkoutStats {
  totalVolume: number;
  volumeChange: number;
  completedWorkouts: number;
  goalPercentage: number;
}
