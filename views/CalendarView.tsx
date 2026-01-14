
import React from 'react';

const CalendarView: React.FC = () => {
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const workoutDays = [2, 4, 5, 7, 9, 12, 14, 15, 18, 19, 21, 24, 26, 28];

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-6">
      <div className="bg-card-dark p-8 rounded-xl border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold uppercase tracking-widest">October 2024</h3>
          <div className="flex gap-2">
            <button className="p-2 rounded bg-slate-800 hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="p-2 rounded bg-slate-800 hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="text-center text-xs font-bold text-slate-500 uppercase pb-2">{day}</div>
          ))}
          {daysInMonth.map(day => {
            const hasWorkout = workoutDays.includes(day);
            return (
              <div 
                key={day} 
                className={`h-24 md:h-32 p-2 rounded-lg border transition-all flex flex-col justify-between ${
                  hasWorkout ? 'bg-primary/5 border-primary/20' : 'bg-slate-800/20 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span className={`text-sm font-bold ${hasWorkout ? 'text-primary' : 'text-slate-500'}`}>{day}</span>
                {hasWorkout && (
                  <div className="bg-primary p-1 rounded text-[8px] md:text-[10px] text-white font-bold text-center truncate uppercase">
                    Push Day
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card-dark p-6 rounded-xl border border-slate-800">
          <h4 className="font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">event_upcoming</span>
            Upcoming Next Week
          </h4>
          <div className="space-y-3">
            {[
              { day: 'Mon', workout: 'Planche Strength', time: '18:00' },
              { day: 'Wed', workout: 'Back Lever Skills', time: '17:30' },
              { day: 'Fri', workout: 'Handstand Press', time: '09:00' }
            ].map((ev, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-800/40 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xs">{ev.day}</span>
                  <div>
                    <p className="font-bold text-sm">{ev.workout}</p>
                    <p className="text-xs text-slate-500">{ev.time}</p>
                  </div>
                </div>
                <button className="text-primary material-symbols-outlined">edit</button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-card-dark p-6 rounded-xl border border-slate-800 flex flex-col justify-center items-center text-center">
            <span className="material-symbols-outlined text-4xl text-accent-lime mb-2">stars</span>
            <h4 className="font-bold">Consistency Strike</h4>
            <p className="text-3xl font-black text-white mt-1">12 DAYS</p>
            <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest font-bold">Keep it up, athlete!</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
