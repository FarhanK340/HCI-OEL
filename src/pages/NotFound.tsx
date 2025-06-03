
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MascotCharacter from "@/components/MascotCharacter";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <MascotCharacter size="large" animation="wiggle" />
        </div>
        
        <div className="text-8xl mb-6 animate-bounce-gentle">🤔</div>
        
        <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text mb-4">
          Oops!
        </h1>
        
        <p className="text-2xl text-gray-600 mb-8">
          We can't find that page! Let's go back to our math adventures! 🚀
        </p>
        
        <Button 
          onClick={() => navigate("/dashboard")}
          className="kid-button from-primary to-primary/80 text-xl px-8"
        >
          🏠 Go Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
