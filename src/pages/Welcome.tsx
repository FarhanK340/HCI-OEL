
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MascotCharacter from "@/components/MascotCharacter";

const Welcome = () => {
  const navigate = useNavigate();
  const [childName, setChildName] = useState("");
  const [showNameInput, setShowNameInput] = useState(false);

  const handleStartLearning = () => {
    if (!showNameInput) {
      setShowNameInput(true);
    } else if (childName.trim()) {
      localStorage.setItem("childName", childName);
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <MascotCharacter size="large" animation="wave" />
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text mb-4 animate-bounce-gentle">
          Math Magic! ✨
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
          Join our magical journey to learn math with fun games, 
          colorful adventures, and amazing rewards! 🌟
        </p>
        
        {!showNameInput ? (
          <Button 
            onClick={handleStartLearning}
            className="kid-button from-primary to-primary/80 text-2xl px-12 py-6 mb-8"
          >
            🚀 Start Learning!
          </Button>
        ) : (
          <div className="space-y-6 math-card max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-700">What's your name, superstar? 🌟</h2>
            <Input
              type="text"
              placeholder="Enter your name here..."
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              className="text-xl p-4 rounded-2xl border-3 border-primary/20 focus:border-primary text-center font-semibold"
              onKeyPress={(e) => e.key === 'Enter' && handleStartLearning()}
            />
            <Button 
              onClick={handleStartLearning}
              disabled={!childName.trim()}
              className="kid-button from-accent to-accent/80 text-xl w-full"
            >
              🎉 Let's Go!
            </Button>
          </div>
        )}
        
        <div className="mt-12 flex justify-center space-x-8">
          <div className="text-4xl animate-bounce-gentle">🎯</div>
          <div className="text-4xl animate-bounce-gentle" style={{animationDelay: '0.2s'}}>🏆</div>
          <div className="text-4xl animate-bounce-gentle" style={{animationDelay: '0.4s'}}>⭐</div>
          <div className="text-4xl animate-bounce-gentle" style={{animationDelay: '0.6s'}}>🎨</div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
