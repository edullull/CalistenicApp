
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './views/DashboardView';
import RoutinesView from './views/RoutinesView';
import CalendarView from './views/CalendarView';
import ProgressView from './views/ProgressView';
import ExercisesView from './views/ExercisesView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Asegurar que al cambiar de pestaña el scroll vuelva arriba, especialmente en móvil
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardView />;
      case 'routines': return <RoutinesView />;
      case 'calendar': return <CalendarView />;
      case 'progress': return <ProgressView />;
      case 'exercises': return <ExercisesView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 main-content p-4 md:p-8 lg:p-10 overflow-x-hidden">
        {/* Header Adaptativo */}
        <header className="flex items-center justify-between mb-8 sticky top-0 bg-background-dark/90 backdrop-blur-xl z-30 py-4 -mx-4 px-4 md:-mx-8 md:px-8">
          <div className="flex flex-col">
            <h2 className="text-xl md:text-3xl font-black tracking-tight uppercase italic">
              {activeTab === 'dashboard' ? 'Overview' : activeTab}
            </h2>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse"></span>
              <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Elite Athlete Mode
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="relative p-2 bg-slate-800/50 rounded-full border border-slate-700 hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-xl">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-primary rounded-full border-2 border-background-dark"></span>
            </button>
            <div className="h-10 w-10 rounded-xl overflow-hidden border-2 border-primary shadow-lg">
              <img src="https://picsum.photos/seed/athlete/200" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
