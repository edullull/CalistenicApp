
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
  { id: 'exercises', label: 'Exercises', icon: 'menu_book' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <aside className="w-64 border-r border-slate-200 dark:border-slate-800 flex flex-col bg-white dark:bg-background-dark h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary rounded-lg p-1.5 flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-2xl">bolt</span>
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-primary">CalistenicApp</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 font-semibold">Elite Training</p>
        </div>
      </div>
      
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all ${
              activeTab === item.id
                ? 'bg-primary/10 text-primary border-l-4 border-primary rounded-l-none'
                : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 opacity-70 hover:opacity-100'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors opacity-70 hover:opacity-100">
          <span className="material-symbols-outlined">settings</span>
          Settings
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
