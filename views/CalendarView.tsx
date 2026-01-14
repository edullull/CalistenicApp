
import React from 'react';

const CalendarView: React.FC = () => {
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const workoutDays = [2, 4, 5, 7, 9, 12, 14, 15, 18, 19, 21, 24, 26, 28];

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-6 pb-10">
      <div className="bg-card-dark p-4 md:p-8 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest">October 2024</h3>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-sm md:text-base">chevron_left</span>
            </button>
            <button className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-sm md:text-base">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 md:gap-2 mb-4 min-w-[300px]">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(day => (
            <div key={day} className="text-center text-[10px] md:text-xs font-black text-slate-500 uppercase pb-2">{day}</div>
          ))}
          {daysInMonth.map(day => {
            const hasWorkout = workoutDays.includes(day);
            return (
              <div 
                key={day} 
                className={`h-16 md:h-32 p-1 md:p-2 rounded-lg border transition-all flex flex-col justify-between ${
                  hasWorkout ? 'bg-primary/5 border-primary/20' : 'bg-slate-800/20 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span className={`text-[10px] md:text-sm font-bold ${hasWorkout ? 'text-primary' : 'text-slate-500'}`}>{day}</span>
                {hasWorkout && (
                  <div className="bg-primary p-0.5 md:p-1 rounded text-[6px] md:text-[10px] text-white font-black text-center truncate uppercase">
                    <span className="hidden md:inline">Push Day</span>
                    <span className="md:hidden">P</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-card-dark p-5 md:p-6 rounded-2xl border border-slate-800">
          <h4 className="font-bold mb-4 flex items-center gap-2 text-sm md:text-base">
            <span className="material-symbols-outlined text-primary">event_upcoming</span>
            Upcoming Next Week
          </h4>
          <div className="space-y-3">
            {[
              { day: 'Mon', workout: 'Planche Strength', time: '18:00' },
              { day: 'Wed', workout: 'Back Lever Skills', time: '17:30' },
            ].map((ev, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-800/40 rounded-xl border border-slate-700/30">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-[10px] md:text-xs">{ev.day}</span>
                  <div>
                    <p className="font-bold text-xs md:text-sm">{ev.workout}</p>
                    <p className="text-[10px] md:text-xs text-slate-500">{ev.time}</p>
                  </div>
                </div>
                <button className="text-primary material-symbols-outlined text-lg">edit</button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-card-dark p-6 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center shadow-inner">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-accent-lime mb-2 animate-bounce">stars</span>
            <h4 className="font-bold text-sm md:text-base">Consistency Strike</h4>
            <p className="text-2xl md:text-4xl font-black text-white mt-1">12 DAYS</p>
            <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest font-black">Keep it up!</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
