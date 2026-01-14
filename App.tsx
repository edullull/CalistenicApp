
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './views/DashboardView';
import RoutinesView from './views/RoutinesView';
import CalendarView from './views/CalendarView';
import ProgressView from './views/ProgressView';
import ExercisesView from './views/ExercisesView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

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
      
      <main className="flex-1 pb-24 md:pb-8 p-4 md:p-8 overflow-x-hidden">
        {/* Top Bar Responsive */}
        <header className="flex items-center justify-between mb-6 md:mb-8 sticky top-0 bg-background-dark/80 backdrop-blur-md z-30 py-3">
          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight capitalize">
              {activeTab === 'dashboard' ? 'Hi, Alex' : activeTab}
            </h2>
            <p className="text-slate-500 text-[10px] md:text-sm">
              {activeTab === 'dashboard' ? '4 sessions left' : `Manage ${activeTab}`}
            </p>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative">
              <span className="material-symbols-outlined p-2 bg-slate-100 dark:bg-card-dark rounded-full cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-xl md:text-2xl">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent-lime rounded-full border-2 border-white dark:border-background-dark"></span>
            </div>
            <div 
              className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-cover bg-center border-2 border-primary cursor-pointer shadow-lg"
              style={{ backgroundImage: 'url("https://picsum.photos/seed/alex/200")' }}
            ></div>
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
