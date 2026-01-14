
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
    <aside className="w-64 border-r border-slate-800 flex flex-col bg-background-dark h-screen sticky top-0">
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
      
      {/* Se ha eliminado cualquier otro elemento extra para que solo aparezca el menú solicitado */}
      <div className="p-8 mt-auto text-[10px] text-slate-700 font-bold uppercase tracking-[0.2em] text-center">
        ESTABLISHED 2026
      </div>
    </aside>
  );
};

export default Sidebar;
