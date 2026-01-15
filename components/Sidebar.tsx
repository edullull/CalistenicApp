
import React from 'react';
import { NavItem } from '../types';

interface SidebarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { id: 'routines', label: 'Routines', icon: 'fitness_center' },
  { id: 'calendar', label: 'Calendar', icon: 'calendar_month' },
  { id: 'progress', label: 'Progress', icon: 'monitoring' },
  { id: 'exercises', label: 'exercises', icon: 'exercise' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 border-r border-slate-800 flex-col bg-background-dark h-screen sticky top-0 z-40">
        <div className="p-8 flex items-center gap-3">
          <div className="bg-primary rounded-xl p-2 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-2xl">bolt</span>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tighter text-white">EliteApp</h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-black">Performance</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === item.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 translate-x-1'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/50'
              }`}
            >
              <span className={`material-symbols-outlined ${activeTab === item.id ? 'active-icon' : ''}`}>
                {item.icon}
              </span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-8 mt-auto text-[10px] text-slate-700 font-bold uppercase tracking-[0.2em] text-center">
          ATHLETE VERSION 2.0
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card-dark/95 backdrop-blur-lg border-t border-slate-800 px-1 py-3 z-50 flex justify-around items-center shadow-[0_-4px_24px_rgba(0,0,0,0.6)]">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex flex-col items-center justify-center w-16 transition-all duration-300 ${
              activeTab === item.id ? 'text-primary scale-110' : 'text-slate-500 opacity-70'
            }`}
          >
            <span className={`material-symbols-outlined text-2xl ${activeTab === item.id ? 'active-icon' : ''}`}>
              {item.icon}
            </span>
            <span className="text-[9px] font-bold mt-1 uppercase tracking-tighter truncate w-full text-center px-1">
              {item.label === 'exercises' ? 'ex' : item.label.substring(0, 4)}
            </span>
            {activeTab === item.id && (
              <span className="w-1 h-1 rounded-full bg-primary mt-1 animate-pulse"></span>
            )}
          </button>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
