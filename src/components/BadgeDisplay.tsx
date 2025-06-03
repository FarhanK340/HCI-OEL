
interface BadgeDisplayProps {
  badges: string[];
}

const BadgeDisplay = ({ badges }: BadgeDisplayProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((badge, index) => (
        <div 
          key={index}
          className="w-16 h-16 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-slow"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {badge}
        </div>
      ))}
      {/* Locked badges */}
      {Array.from({ length: Math.max(0, 6 - badges.length) }).map((_, index) => (
        <div 
          key={`locked-${index}`}
          className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl shadow-lg opacity-50"
        >
          🔒
        </div>
      ))}
    </div>
  );
};

export default BadgeDisplay;
