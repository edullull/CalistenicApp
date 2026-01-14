
import React, { useState } from 'react';

const EXERCISES = [
  { 
    id: 1, 
    name: 'Flexiones', 
    muscle: 'Pecho / Tríceps', 
    level: 'Principiante', 
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
    description: 'Empuje horizontal. Mantén el cuerpo en línea recta y desciende controladamente.'
  },
  { 
    id: 2, 
    name: 'Dominadas', 
    muscle: 'Espalda / Bíceps', 
    level: 'Intermedio', 
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=600',
    description: 'Tracción vertical. Cuelga de la barra y elévate hasta que tu barbilla la supere.'
  },
  { 
    id: 3, 
    name: 'Sentadillas', 
    muscle: 'Piernas / Glúteos', 
    level: 'Principiante', 
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2158?auto=format&fit=crop&q=80&w=600',
    description: 'Flexión de rodillas y cadera. Baja el centro de gravedad manteniendo los talones apoyados.'
  },
  { 
    id: 4, 
    name: 'Zancadas', 
    muscle: 'Piernas / Glúteos', 
    level: 'Intermedio', 
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=600',
    description: 'Paso largo hacia adelante bajando la rodilla posterior hacia el suelo.'
  },
  { 
    id: 5, 
    name: 'Curl Bíceps Supino', 
    muscle: 'Bíceps', 
    level: 'Principiante', 
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600',
    description: 'Aislamiento de brazos con palmas hacia arriba usando mancuernas.'
  },
  { 
    id: 6, 
    name: 'Curl Martillo', 
    muscle: 'Bíceps / Braquial', 
    level: 'Principiante', 
    image: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=600',
    description: 'Flexión de codo con agarre neutro (pulgares hacia arriba).'
  },
  { 
    id: 7, 
    name: 'Curl Concentrado', 
    muscle: 'Bíceps (Pico)', 
    level: 'Intermedio', 
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
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">search</span>
          <input 
            type="text" 
            placeholder="Filtrar ejercicios..." 
            className="w-full pl-10 pr-4 py-3 bg-card-dark border border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
        {filtered.map(ex => (
          <div key={ex.id} className="bg-card-dark rounded-xl border border-slate-800 hover:border-primary/50 transition-all group overflow-hidden shadow-lg flex flex-col h-full">
            <div className="relative h-48 overflow-hidden bg-slate-900">
              <img 
                src={ex.image} 
                alt={ex.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <h4 className="font-bold text-lg mb-1">{ex.name}</h4>
              <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-2">{ex.muscle}</p>
              <p className="text-slate-400 text-xs mb-6 leading-relaxed flex-1">
                {ex.description}
              </p>
              
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase">{ex.level}</span>
                <button className="p-2 rounded-lg bg-slate-800 hover:bg-primary/20 hover:text-primary transition-all text-[10px] font-black uppercase border border-slate-700">
                  Añadir
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
