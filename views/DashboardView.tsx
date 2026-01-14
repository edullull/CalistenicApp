
import React from 'react';
import WeeklyActivity from '../components/WeeklyActivity';
import ProgressionPath from '../components/ProgressionPath';
import { VolumeCard, CompletionCard } from '../components/StatsCards';

const DashboardView: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-6 pb-8 animate-in fade-in duration-500">
      {/* Hero Workout Card */}
      <div className="col-span-12 lg:col-span-8 bg-card-dark rounded-xl overflow-hidden flex flex-col md:flex-row shadow-xl border border-slate-800/50">
        <div 
          className="w-full md:w-1/3 bg-cover bg-center h-48 md:h-auto min-h-[300px]"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800")' }}
        ></div>
        <div className="p-8 flex flex-1 flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 bg-primary/20 text-primary text-[10px] font-bold uppercase rounded">Level 4</span>
              <span className="px-2 py-0.5 bg-slate-700 text-slate-300 text-[10px] font-bold uppercase rounded">45-60 MIN</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">Push Day - Planche Prep</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-md">
              Focus: Scapular protraction, anterior deltoids, and triceps lockout strength. 
              A high-intensity session designed for elite progress.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Pectorals', 'Triceps', 'Core'].map(tag => (
                <span key={tag} className="text-xs bg-slate-800 px-3 py-1 rounded text-slate-400 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-3 group w-full md:w-fit">
            Start Training
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">play_arrow</span>
          </button>
        </div>
      </div>

      {/* Side Stats */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
        <VolumeCard />
        <CompletionCard />
      </div>

      {/* Weekly Activity */}
      <div className="col-span-12">
        <WeeklyActivity />
      </div>

      {/* Progression Path */}
      <div className="col-span-12">
        <ProgressionPath />
      </div>
    </div>
  );
};

export default DashboardView;
