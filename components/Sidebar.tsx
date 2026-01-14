
import React from 'react';
import { NavItem } from '../types';

interface SidebarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { id: 'routines', label: 'Routines', icon: 'exercise' },
  { id: 'calendar', label: 'Calendar', icon: 'calendar_month' },
  { id: 'progress', label: 'Progress', icon: 'monitoring' },
  { id: 'exercises', label: 'exercises', icon: 'menu_book' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <aside className="w-64 border-r border-slate-800 flex flex-col bg-background-dark h-screen sticky top-0">
      <div className="p-8 flex items-center gap-3">
        <div className="bg-primary rounded-xl p-2 flex items-center justify-center shadow-lg shadow-primary/20">
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
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="capitalize">{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="p-6 mt-auto">
        <div className="bg-card-dark p-4 rounded-2xl border border-slate-800">
          <p className="text-[10px] font-black text-accent-lime uppercase mb-1">Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-lime animate-pulse"></div>
            <p className="text-xs font-bold text-white">Athlete Mode</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
