
import React from 'react';
import WeeklyActivity from '../components/WeeklyActivity';
import ProgressionPath from '../components/ProgressionPath';
import { VolumeCard, CompletionCard } from '../components/StatsCards';

const DashboardView: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6 pb-8 animate-in fade-in duration-500">
      {/* Hero Workout Card */}
      <div className="col-span-12 lg:col-span-8 bg-card-dark rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-slate-800/50 group">
        <div 
          className="w-full md:w-1/3 bg-cover bg-center h-56 md:h-auto min-h-[250px] md:min-h-[350px] transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800")' }}
        >
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
        </div>
        <div className="p-6 md:p-8 flex flex-1 flex-col justify-between -mt-12 md:mt-0 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 bg-primary/20 text-primary text-[10px] font-black uppercase rounded-lg border border-primary/20">Level 4</span>
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] font-black uppercase rounded-lg border border-slate-700">45-60 MIN</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-black mb-3 text-white uppercase italic tracking-tight">Push Day - Planche Prep</h3>
            <p className="text-slate-400 text-xs md:text-sm mb-6 max-w-md leading-relaxed">
              Focus: Scapular protraction, anterior deltoids, and triceps lockout strength. 
              A high-intensity session designed for elite progress.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Pectorals', 'Triceps', 'Core'].map(tag => (
                <span key={tag} className="text-[10px] bg-slate-800/50 px-3 py-1.5 rounded-full text-slate-400 font-black uppercase tracking-wider border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white font-black py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-3 group w-full md:w-fit shadow-lg shadow-primary/20 uppercase tracking-widest text-xs">
            Start Training
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">play_arrow</span>
          </button>
        </div>
      </div>

      {/* Side Stats */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 md:gap-6">
        <VolumeCard />
        <CompletionCard />
      </div>

      {/* Weekly Activity */}
      <div className="col-span-12">
        <WeeklyActivity />
      </div>

      {/* Progression Path */}
      <div className="col-span-12 overflow-x-auto">
        <ProgressionPath />
      </div>
    </div>
  );
};

export default DashboardView;
