
import React from 'react';
import { ActivityDay } from '../types';

const DAYS: ActivityDay[] = [
  { day: 'MON', label: 'Push', status: 'done' },
  { day: 'TUE', label: 'Pull', status: 'done' },
  { day: 'WED', label: 'Rest', status: 'rest' },
  { day: 'THU', label: 'Push', status: 'today' },
  { day: 'FRI', label: 'Legs', status: 'planned' },
  { day: 'SAT', label: 'Skills', status: 'planned' },
  { day: 'SUN', label: 'Rest', status: 'rest' },
];

const WeeklyActivity: React.FC = () => {
  return (
    <div className="bg-card-dark p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold">Weekly Activity</h3>
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-accent-lime"></span>
            <span className="text-[10px] text-slate-400 uppercase font-bold">Done</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full border border-primary"></span>
            <span className="text-[10px] text-slate-400 uppercase font-bold">Planned</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-4">
        {DAYS.map((day) => (
          <div key={day.day} className={`flex flex-col items-center gap-2 ${day.status === 'rest' ? 'opacity-30' : ''}`}>
            <span className={`text-xs font-bold ${day.status === 'today' ? 'text-primary' : 'text-slate-500'}`}>
              {day.day}
            </span>
            <div className={`w-full h-24 rounded-lg flex flex-col items-center justify-center transition-all ${
              day.status === 'done' ? 'bg-accent-lime' : 
              day.status === 'today' ? 'bg-primary/10 border-2 border-primary' :
              day.status === 'rest' ? 'bg-slate-800 border border-dashed border-slate-600' :
              'border border-slate-700'
            }`}>
              {day.status === 'done' && <span className="material-symbols-outlined text-white">check_circle</span>}
              {day.status === 'today' && (
                <>
                  <span className="text-[10px] font-bold text-primary mb-1 uppercase">Today</span>
                  <span className="material-symbols-outlined text-primary">star</span>
                </>
              )}
            </div>
            <span className="text-[10px] text-slate-400">{day.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyActivity;
