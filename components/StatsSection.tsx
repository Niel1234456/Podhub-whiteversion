
import React from 'react';

const stats = [
  {
    label: 'Uplift Conversions',
    value: '288%',
    prefix: 'UP TO'
  },
  {
    label: 'Jump in product discovery',
    value: '20X',
    prefix: 'UP TO'
  },
  {
    label: 'Increase user engagement',
    value: '392%',
    prefix: 'UP TO'
  }
];

const StatsSection: React.FC = () => {
  return (
    <div className="mt-20 pt-16 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
      {stats.map((stat, index) => (
        <div key={index} className="space-y-4 group">
          <div className="text-xs font-bold text-white/40 tracking-widest">{stat.prefix}</div>
          <div className="text-5xl md:text-6xl font-extrabold tracking-tight group-hover:text-yellow-400 transition-colors">
            {stat.value}
          </div>
          <div className="text-lg text-white/40 max-w-[200px]">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
