
import React, { useState } from 'react';

interface RoutineDay {
  name: string;
  exercises: string[];
}

interface Routine {
  id: number;
  title: string;
  image: string;
  description: string;
  days: RoutineDay[];
}

const ROUTINES: Routine[] = [
  { 
    id: 1, 
    title: 'Tren Superior', 
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800',
    description: 'Enfoque total en el torso: Pecho, Espalda y Brazos.',
    days: [
      {
        name: 'Día 1: Empuje y Tracción Base',
        exercises: ['Flexiones (4x12)', 'Dominadas (4x8)', 'Curl Martillo (3x12)', 'Plancha Abdominal (3x1min)']
      },
      {
        name: 'Día 2: Fuerza y Definición',
        exercises: ['Dominadas (4x10)', 'Flexiones Diamante (4x15)', 'Curl Concentrado (3x12)', 'Dips en Banco (3x15)']
      }
    ]
  },
  { 
    id: 2, 
    title: 'Piernas', 
    image: 'https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&q=80&w=800',
    description: 'Desarrollo de potencia y estabilidad en el tren inferior.',
    days: [
      {
        name: 'Día 1: Potencia de Cuádriceps',
        exercises: ['Sentadillas (4x15)', 'Zancadas Alternas (3x20)', 'Elevación de Talones (4x20)']
      },
      {
        name: 'Día 2: Estabilidad y Glúteo',
        exercises: ['Sentadillas Sumo (4x12)', 'Zancadas en el sitio (3x15 por pierna)', 'Puente de Glúteo (4x20)']
      }
    ]
  },
];

const RoutinesView: React.FC = () => {
  const [activeRoutine, setActiveRoutine] = useState<Routine | null>(null);

  if (activeRoutine) {
    return (
      <div className="animate-in slide-in-from-right-8 duration-500">
        <button 
          onClick={() => setActiveRoutine(null)}
          className="flex items-center gap-2 text-primary font-bold mb-8 group"
        >
          <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
          VOLVER A SELECCIÓN
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6 border border-slate-800 shadow-2xl">
                <img src={activeRoutine.image} className="w-full h-full object-cover" alt={activeRoutine.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-3xl font-black">{activeRoutine.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed px-2">
                {activeRoutine.description} Plan de entrenamiento optimizado para dos días por semana.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {activeRoutine.days.map((day, idx) => (
              <div key={idx} className="bg-card-dark rounded-3xl p-8 border border-slate-800 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center font-black text-xl">
                    {idx + 1}
                  </span>
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight">{day.name}</h4>
                </div>
                <div className="space-y-3">
                  {day.exercises.map((ex, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-2xl border border-slate-800/50 hover:border-primary/50 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="font-medium text-slate-200">{ex}</span>
                      </div>
                      <span className="material-symbols-outlined text-slate-600 group-hover:text-primary transition-colors">check_circle</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <button className="w-full py-5 bg-accent-lime text-background-dark font-black rounded-3xl uppercase tracking-widest shadow-lg shadow-accent-lime/10 hover:scale-[1.02] transition-all mt-4">
              CONFIRMAR ENTRENAMIENTO
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-12">
        <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter">Tus Rutinas</h3>
        <p className="text-slate-500 font-medium">Selecciona el área que deseas trabajar esta semana.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">
        {ROUTINES.map(routine => (
          <div 
            key={routine.id} 
            onClick={() => setActiveRoutine(routine)}
            className="group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer border-4 border-slate-900 hover:border-primary transition-all duration-500 shadow-2xl"
          >
            <img 
              src={routine.image} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
              alt={routine.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
            
            <div className="absolute inset-0 p-10 flex flex-col justify-end items-start">
              <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                <h4 className="text-5xl font-black mb-2 leading-none uppercase italic">{routine.title}</h4>
                <div className="w-20 h-1.5 bg-primary rounded-full"></div>
              </div>
              <p className="text-slate-200 font-medium max-w-xs mb-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                {routine.description}
              </p>
              <div className="flex items-center gap-3 px-6 py-3 bg-white text-background-dark rounded-full font-black text-xs uppercase tracking-widest group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                VER PLAN SEMANAL
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
