
import { cn } from "@/lib/utils";

interface MascotCharacterProps {
  size?: "small" | "medium" | "large";
  animation?: "wave" | "bounce" | "static";
  className?: string;
}

const MascotCharacter = ({ size = "medium", animation = "static", className }: MascotCharacterProps) => {
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24", 
    large: "w-32 h-32"
  };

  const animationClasses = {
    wave: "animate-wiggle",
    bounce: "animate-bounce-gentle",
    static: ""
  };

  return (
    <div className={cn(
      "relative flex items-center justify-center",
      sizeClasses[size],
      animationClasses[animation],
      className
    )}>
      <div className="relative">
        {/* Mascot body */}
        <div className="w-full h-full bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
          <span className="text-white text-2xl font-bold">🐻</span>
        </div>
        
        {/* Sparkles */}
        <div className="absolute -top-2 -right-2 text-yellow-400 text-lg animate-pulse-slow">✨</div>
        <div className="absolute -bottom-1 -left-2 text-pink-400 text-sm animate-pulse-slow" style={{animationDelay: '0.5s'}}>⭐</div>
      </div>
    </div>
  );
};

export default MascotCharacter;
