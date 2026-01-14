
import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const sparklineData = [
  { value: 10 }, { value: 25 }, { value: 15 }, { value: 30 }, 
  { value: 20 }, { value: 45 }, { value: 35 }
];

export const VolumeCard: React.FC = () => {
  return (
    <div className="bg-card-dark p-6 rounded-xl flex items-center justify-between shadow-lg">
      <div>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Total Volume</p>
        <h4 className="text-3xl font-bold">14,250 <span className="text-sm font-normal text-slate-400">kg</span></h4>
        <p className="text-accent-lime text-xs mt-1 flex items-center gap-1 font-medium">
          <span className="material-symbols-outlined text-sm">trending_up</span> +12% from last week
        </p>
      </div>
      <div className="h-12 w-24 rounded overflow-hidden relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sparklineData}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#135d6c" 
              strokeWidth={2} 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const CompletionCard: React.FC = () => {
  const percentage = 85;
  const strokeDasharray = 150.7;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

  return (
    <div className="bg-card-dark p-6 rounded-xl flex items-center justify-between shadow-lg">
      <div>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Completed</p>
        <h4 className="text-3xl font-bold">24 <span className="text-sm font-normal text-slate-400">Workouts</span></h4>
        <p className="text-primary text-xs mt-1 font-medium">Monthly goal: {percentage}% reached</p>
      </div>
      <div className="relative h-14 w-14">
        <svg className="w-full h-full transform -rotate-90">
          <circle 
            className="text-slate-800" 
            cx="28" 
            cy="28" 
            fill="transparent" 
            r="24" 
            stroke="currentColor" 
            strokeWidth="4" 
          />
          <circle 
            className="text-accent-lime" 
            cx="28" 
            cy="28" 
            fill="transparent" 
            r="24" 
            stroke="currentColor" 
            strokeDasharray={strokeDasharray} 
            strokeDashoffset={strokeDashoffset} 
            strokeWidth="4" 
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">{percentage}%</span>
      </div>
    </div>
  );
};
