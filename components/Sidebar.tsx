
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
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 border-r border-slate-800 flex-col bg-background-dark h-screen sticky top-0">
        <div className="p-8 flex items-center gap-3">

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
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-8 mt-auto text-[10px] text-slate-700 font-bold uppercase tracking-[0.2em] text-center">
          ESTABLISHED 2026
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card-dark border-t border-slate-800 px-2 py-2 z-50 flex justify-around items-center shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
              activeTab === item.id ? 'text-primary' : 'text-slate-500'
            }`}
          >
            <span className={`material-symbols-outlined text-2xl ${activeTab === item.id ? 'fill-1' : ''}`}>
              {item.icon}
            </span>
            <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">
              {item.id === 'exercises' ? 'ex' : item.label.substring(0, 4)}
            </span>
            {activeTab === item.id && (
              <span className="w-1 h-1 rounded-full bg-primary mt-1"></span>
            )}
          </button>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
