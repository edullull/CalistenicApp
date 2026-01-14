
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const data = [
  { name: 'Week 1', reps: 5, weight: 70 },
  { name: 'Week 2', reps: 7, weight: 71 },
  { name: 'Week 3', reps: 6, weight: 70 },
  { name: 'Week 4', reps: 9, weight: 72 },
  { name: 'Week 5', reps: 11, weight: 73 },
  { name: 'Week 6', reps: 10, weight: 72 },
  { name: 'Week 7', reps: 14, weight: 74 },
];

const ProgressView: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Pull-ups Max Reps Chart */}
        <div className="bg-card-dark p-6 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg">Muscle-Up Progress (Max Reps)</h3>
            <span className="text-accent-lime text-xs font-bold">+180% this month</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorReps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#135d6c" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#135d6c" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1c1e22" />
                <XAxis dataKey="name" stroke="#475569" fontSize={10} />
                <YAxis stroke="#475569" fontSize={10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1c1e22', border: '1px solid #135d6c' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="reps" stroke="#135d6c" fillOpacity={1} fill="url(#colorReps)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Volume Distribution */}
        <div className="bg-card-dark p-6 rounded-xl border border-slate-800">
          <h3 className="font-bold text-lg mb-6">Weekly Volume Distribution</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1c1e22" />
                <XAxis dataKey="name" stroke="#475569" fontSize={10} />
                <YAxis stroke="#475569" fontSize={10} />
                <Tooltip 
                  cursor={{ fill: '#ffffff10' }}
                  contentStyle={{ backgroundColor: '#1c1e22', border: '1px solid #135d6c' }}
                />
                <Bar dataKey="weight" fill="#5FB221" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Muscle Group Statistics */}
      <div className="bg-card-dark p-6 rounded-xl border border-slate-800">
        <h3 className="font-bold text-lg mb-6">Muscle Group Intensity</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Chest', value: 85, color: 'bg-primary' },
            { label: 'Back', value: 92, color: 'bg-accent-lime' },
            { label: 'Shoulders', value: 78, color: 'bg-primary' },
            { label: 'Core', value: 65, color: 'bg-slate-600' }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase">
                <span>{stat.label}</span>
                <span>{stat.value}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className={`${stat.color} h-full`} style={{ width: `${stat.value}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressView;
