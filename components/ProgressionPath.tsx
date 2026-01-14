
import React, { useState } from 'react';
import { ProgressionStep } from '../types';

const PUSH_STEPS: ProgressionStep[] = [
  { id: 1, name: 'Standard Push-up', isCompleted: true, isCurrent: false, isLocked: false },
  { id: 2, name: 'Diamond Push-up', isCompleted: true, isCurrent: false, isLocked: false },
  { id: 3, name: 'Archer Push-up', isCompleted: false, isCurrent: true, isLocked: false },
  { id: 4, name: 'Pseudo Planche', isCompleted: false, isCurrent: false, isLocked: true },
  { id: 5, name: 'One-Arm Push-up', isCompleted: false, isCurrent: false, isLocked: true },
];

const ProgressionPath: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Push');

  return (
    <div className="bg-card-dark p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-bold">Progression Path: Push-up Evolution</h3>
          <p className="text-slate-500 text-sm">Biomechanical difficulty scaling</p>
        </div>
        <div className="flex bg-slate-800 p-1 rounded-lg">
          {['Push', 'Pull', 'Statics'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs font-bold rounded transition-all ${
                activeCategory === cat ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="relative py-12 px-4">
        {/* Connection Lines */}
        <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-800 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-4 w-2/3 h-0.5 bg-primary -translate-y-1/2"></div>
        
        <div className="relative flex justify-between">
          {PUSH_STEPS.map((step) => (
            <div key={step.id} className={`flex flex-col items-center relative group cursor-pointer ${step.isLocked ? 'opacity-40' : ''}`}>
              <div className={`rounded-full flex items-center justify-center border-4 border-card-dark z-10 transition-all ${
                step.isCurrent 
                  ? 'w-14 h-14 -mt-2 bg-primary border-accent-lime shadow-[0_0_15px_rgba(95,178,33,0.3)]' 
                  : step.isCompleted 
                  ? 'w-10 h-10 bg-primary' 
                  : 'w-10 h-10 bg-slate-800'
              }`}>
                {step.isCompleted && <span className="material-symbols-outlined text-sm text-white">check</span>}
                {step.isCurrent && <span className="material-symbols-outlined text-white">trending_up</span>}
                {step.isLocked && <span className="material-symbols-outlined text-sm text-slate-400">lock</span>}
              </div>
              
              <div className="absolute -bottom-12 w-24 text-center">
                <span className={`text-[10px] font-bold uppercase block leading-tight ${step.isCurrent ? 'text-white' : 'text-slate-400'}`}>
                  {step.name.split(' ').map((word, i) => <React.Fragment key={i}>{word}<br/></React.Fragment>)}
                </span>
                {step.isCurrent && (
                  <span className="mt-2 inline-block px-2 py-0.5 bg-accent-lime text-[10px] font-bold text-background-dark rounded uppercase whitespace-nowrap">
                    Current Goal
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressionPath;
