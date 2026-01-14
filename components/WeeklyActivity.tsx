
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
    <div className="bg-card-dark p-5 md:p-6 rounded-2xl shadow-xl border border-slate-800/50">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
        <h3 className="text-base md:text-lg font-black uppercase tracking-widest">Weekly Activity</h3>
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-lime"></span>
            <span className="text-[9px] md:text-[10px] text-slate-400 uppercase font-black tracking-wider">Done</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full border-2 border-primary"></span>
            <span className="text-[9px] md:text-[10px] text-slate-400 uppercase font-black tracking-wider">Planned</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 md:gap-4">
        {DAYS.map((day) => (
          <div key={day.day} className={`flex flex-col items-center gap-1.5 md:gap-2 ${day.status === 'rest' ? 'opacity-30' : ''}`}>
            <span className={`text-[8px] md:text-xs font-black ${day.status === 'today' ? 'text-primary' : 'text-slate-500'}`}>
              {day.day}
            </span>
            <div className={`w-full h-16 md:h-24 rounded-xl flex flex-col items-center justify-center transition-all ${
              day.status === 'done' ? 'bg-accent-lime' : 
              day.status === 'today' ? 'bg-primary/10 border-2 border-primary' :
              day.status === 'rest' ? 'bg-slate-800 border border-dashed border-slate-600' :
              'border border-slate-700'
            }`}>
              {day.status === 'done' && <span className="material-symbols-outlined text-white text-base md:text-2xl">check_circle</span>}
              {day.status === 'today' && (
                <>
                  <span className="text-[6px] md:text-[10px] font-black text-primary mb-1 uppercase hidden md:block">Today</span>
                  <span className="material-symbols-outlined text-primary text-base md:text-2xl animate-pulse">star</span>
                </>
              )}
            </div>
            <span className="text-[7px] md:text-[10px] text-slate-500 font-medium uppercase tracking-tighter truncate max-w-full">{day.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyActivity;
