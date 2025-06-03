
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import MascotCharacter from "@/components/MascotCharacter";
import BadgeDisplay from "@/components/BadgeDisplay";

const Dashboard = () => {
  const navigate = useNavigate();
  const [childName, setChildName] = useState("");
  const [currentLevel, setCurrentLevel] = useState(1);
  const [progress, setProgress] = useState(25);
  const [badges, setBadges] = useState(["🌟", "🎯", "🏆"]);

  useEffect(() => {
    const name = localStorage.getItem("childName") || "Superstar";
    setChildName(name);
  }, []);

  const lessons = [
    {
      id: "addition",
      title: "Learn Addition",
      icon: "➕",
      color: "from-kid-green to-green-400",
      description: "Add numbers with fun fruits!",
      route: "/lesson/addition"
    },
    {
      id: "subtraction", 
      title: "Learn Subtraction",
      icon: "➖",
      color: "from-kid-blue to-blue-400",
      description: "Take away and count!",
      route: "/quiz"
    },
    {
      id: "multiplication",
      title: "Learn Multiplication", 
      icon: "✖️",
      color: "from-kid-purple to-purple-400",
      description: "Groups of numbers!",
      route: "/quiz"
    },
    {
      id: "division",
      title: "Learn Division",
      icon: "➗", 
      color: "from-kid-orange to-orange-400",
      description: "Share equally!",
      route: "/quiz"
    }
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="math-card mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <MascotCharacter size="large" animation="wave" />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Welcome back, {childName}! 👋
                </h1>
                <p className="text-lg text-gray-600">Ready for more math adventures?</p>
              </div>
            </div>
            
            <Button 
              onClick={() => navigate("/profile")}
              className="kid-button from-accent to-accent/80"
            >
              👤 My Profile
            </Button>
          </div>
        </div>

        {/* Progress Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="math-card">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              📊 Your Progress
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between text-lg">
                <span>Level {currentLevel}</span>
                <span>{progress}% Complete</span>
              </div>
              <Progress value={progress} className="h-4 rounded-full" />
              <p className="text-gray-600">Keep going! You're doing amazing! 🌟</p>
            </div>
          </div>

          <div className="math-card">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              🏆 Your Badges
            </h2>
            <BadgeDisplay badges={badges} />
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lessons.map((lesson) => (
            <div 
              key={lesson.id}
              className="math-card cursor-pointer group hover:scale-105 transition-transform duration-300"
              onClick={() => navigate(lesson.route)}
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${lesson.color} flex items-center justify-center text-3xl mb-4 mx-auto group-hover:animate-bounce-gentle`}>
                {lesson.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {lesson.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {lesson.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="math-card text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-primary">15</div>
            <div className="text-sm text-gray-600">Problems Solved</div>
          </div>
          <div className="math-card text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-accent">5</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </div>
          <div className="math-card text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-secondary">28</div>
            <div className="text-sm text-gray-600">Stars Earned</div>
          </div>
          <div className="math-card text-center">
            <div className="text-3xl mb-2">🏅</div>
            <div className="text-2xl font-bold text-kid-purple">3</div>
            <div className="text-sm text-gray-600">Badges</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
