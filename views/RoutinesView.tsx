
import React, { useState } from 'react';

interface RoutinePlan {
  day1: string[];
  day2: string[];
}

interface Routine {
  id: number;
  title: string;
  image: string;
  description: string;
  plan: RoutinePlan;
}

const ROUTINES: Routine[] = [
  { 
    id: 1, 
    title: 'Rutina Tren Superior', 
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800',
    description: 'Enfoque integral en el desarrollo de fuerza y masa muscular en pecho, espalda y brazos.',
    plan: {
      day1: ['Flexiones (4 series)', 'Dominadas (4 series)', 'Curl Martillo (3 series)'],
      day2: ['Dominadas (4 series)', 'Flexiones Diamante (4 series)', 'Curl Concentrado (3 series)']
    }
  },
  { 
    id: 2, 
    title: 'Rutina de Piernas', 
    image: 'https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&q=80&w=800',
    description: 'Potencia y resistencia para el tren inferior, trabajando cuádriceps, glúteos e isquios.',
    plan: {
      day1: ['Sentadillas (4 series)', 'Zancadas (3 series)', 'Elevación de talones (3 series)'],
      day2: ['Zancadas (4 series)', 'Sentadillas con salto (3 series)', 'Puente de glúteo (3 series)']
    }
  },
];

const RoutinesView: React.FC = () => {
  const [selectedRoutine, setSelectedRoutine] = useState<Routine | null>(null);

  if (selectedRoutine) {
    return (
      <div className="animate-in fade-in slide-in-from-right-4 duration-500">
        <button 
          onClick={() => setSelectedRoutine(null)}
          className="flex items-center gap-2 text-primary font-bold mb-6 hover:underline"
        >
          <span className="material-symbols-outlined"></span>
          Volver a rutinas
        </button>

        <div className="bg-card-dark rounded-2xl p-8 border border-slate-800 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
            <img 
              src={selectedRoutine.image} 
              className="w-32 h-32 rounded-2xl object-cover border-2 border-primary" 
              alt={selectedRoutine.title}
            />
            <div>
              <h3 className="text-3xl font-bold mb-2">{selectedRoutine.title}</h3>
              <p className="text-slate-400 max-w-xl">{selectedRoutine.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <h4 className="text-accent-lime font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">calendar_today</span>
                Día 1: Fuerza Base
              </h4>
              <ul className="space-y-4">
                {selectedRoutine.plan.day1.map((ex, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200 bg-slate-800/40 p-3 rounded-lg border border-slate-700/50">
                    <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold">{i+1}</span>
                    {ex}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <h4 className="text-primary font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">event_repeat</span>
                Día 2: Especialización
              </h4>
              <ul className="space-y-4">
                {selectedRoutine.plan.day2.map((ex, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200 bg-slate-800/40 p-3 rounded-lg border border-slate-700/50">
                    <span className="w-6 h-6 rounded-full bg-accent-lime flex items-center justify-center text-[10px] font-bold text-background-dark">{i+1}</span>
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button className="mt-10 w-full py-4 bg-primary text-white font-bold rounded-xl uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-[1.01] transition-all">
            Iniciar Seguimiento Semanal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-2">Planes de Entrenamiento</h3>
        <p className="text-slate-500">Selecciona tu enfoque semanal para ver el desglose de ejercicios.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {ROUTINES.map(routine => (
          <div 
            key={routine.id} 
            onClick={() => setSelectedRoutine(routine)}
            className="group relative bg-card-dark rounded-3xl overflow-hidden border border-slate-800 hover:border-primary transition-all cursor-pointer shadow-xl h-[400px]"
          >
            <img 
              src={routine.image} 
              alt={routine.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-40" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h4 className="text-4xl font-black mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">{routine.title}</h4>
              <p className="text-slate-300 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {routine.description}
              </p>
              <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                Ver plan de 2 días
                <span className="material-symbols-outlined text-sm">trending_flat</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoutinesView;
