
import React, { useState } from 'react';

const EXERCISES = [
  { 
    id: 1, 
    name: 'Flexiones', 
    muscle: 'Pecho / Tríceps', 
    image: 'https://images.unsplash.com/photo-1599058917232-d750c1859d7c?auto=format&fit=crop&q=80&w=600',
    description: 'Empuje horizontal básico. Mantén el cuerpo en línea recta y desciende controladamente.'
  },
  { 
    id: 2, 
    name: 'Dominadas', 
    muscle: 'Espalda / Bíceps', 
    image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&q=80&w=600',
    description: 'Tracción vertical. Cuelga de la barra y elévate hasta que tu barbilla la supere.'
  },
  { 
    id: 3, 
    name: 'Sentadillas', 
    muscle: 'Piernas / Glúteos', 
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2158?auto=format&fit=crop&q=80&w=600',
    description: 'Flexión de rodillas y cadera. Baja el centro de gravedad manteniendo los talones apoyados.'
  },
  { 
    id: 4, 
    name: 'Zancadas', 
    muscle: 'Piernas / Glúteos', 
    image: 'https://images.unsplash.com/photo-1536922246289-88c42f957773?auto=format&fit=crop&q=80&w=600',
    description: 'Paso largo hacia adelante bajando la rodilla posterior hacia el suelo.'
  },
  { 
    id: 5, 
    name: 'Curl Bíceps Supino', 
    muscle: 'Bíceps', 
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600',
    description: 'Aislamiento de brazos con palmas hacia arriba usando mancuernas.'
  },
  { 
    id: 6, 
    name: 'Curl Martillo', 
    muscle: 'Bíceps / Braquial', 
    image: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=600',
    description: 'Flexión de codo con agarre neutro (pulgares hacia arriba).'
  },
  { 
    id: 7, 
    name: 'Curl Concentrado', 
    muscle: 'Bíceps (Pico)', 
    image: 'https://images.unsplash.com/photo-1626506777909-444aa98fe8dd?auto=format&fit=crop&q=80&w=600',
    description: 'Flexión de brazo sentado apoyando el codo en el muslo.'
  }
];

const ExercisesView: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = EXERCISES.filter(ex => 
    ex.name.toLowerCase().includes(search.toLowerCase()) || 
    ex.muscle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
          <input 
            type="text" 
            placeholder="Buscar ejercicio..." 
            className="w-full pl-12 pr-4 py-4 bg-card-dark border border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm shadow-xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-12">
        {filtered.map(ex => (
          <div key={ex.id} className="bg-card-dark rounded-[2rem] border border-slate-800 hover:border-primary/50 transition-all group overflow-hidden shadow-xl flex flex-col h-full">
            <div className="relative h-56 overflow-hidden bg-slate-900">
              <img 
                src={ex.image} 
                alt={ex.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h4 className="font-bold text-xl mb-1 text-white">{ex.name}</h4>
              <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-3">{ex.muscle}</p>
              <p className="text-slate-400 text-xs mb-8 leading-relaxed line-clamp-2">
                {ex.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-800 flex items-center justify-between">
                <button className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-wider transition-colors">
                  DETALLES
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-[10px] font-black uppercase tracking-widest hover:bg-primary/80 transition-all shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-sm">add</span>
                  AÑADIR
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExercisesView;
