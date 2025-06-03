
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import MascotCharacter from "@/components/MascotCharacter";
import { toast } from "@/hooks/use-toast";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "🍎🍎 + 🍎 = ?",
      visual: "2 apples + 1 apple",
      options: [2, 3, 4, 5],
      correct: 3
    },
    {
      question: "🌟🌟🌟 + 🌟🌟 = ?",
      visual: "3 stars + 2 stars", 
      options: [4, 5, 6, 7],
      correct: 5
    },
    {
      question: "🎈🎈🎈🎈 + 🎈 = ?",
      visual: "4 balloons + 1 balloon",
      options: [4, 5, 6, 7],
      correct: 5
    }
  ];

  const handleAnswerSelect = (answer: number) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correct;
    
    if (isCorrect) {
      setScore(score + 1);
      toast({
        title: "🌟 Awesome!",
        description: "You got it right! Keep going!",
      });
    } else {
      toast({
        title: "🤔 Almost there!",
        description: `The answer was ${questions[currentQuestion].correct}. Try the next one!`,
      });
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  if (showResult) {
    return (
      <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="math-card">
            <MascotCharacter size="large" animation="bounce" className="mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              🎉 Quiz Complete!
            </h1>
            <div className="text-6xl mb-6">
              {score === questions.length ? "🏆" : score >= questions.length / 2 ? "⭐" : "🌟"}
            </div>
            <p className="text-2xl text-gray-700 mb-6">
              You scored {score} out of {questions.length}!
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {score === questions.length 
                ? "Perfect! You're a math superstar!"
                : score >= questions.length / 2 
                ? "Great job! Keep practicing!"
                : "Good try! Practice makes perfect!"
              }
            </p>
            <div className="space-y-4">
              <Button 
                onClick={() => navigate("/dashboard")}
                className="kid-button from-primary to-primary/80 w-full"
              >
                🏠 Back to Dashboard
              </Button>
              <Button 
                onClick={() => window.location.reload()}
                className="kid-button from-accent to-accent/80 w-full"
              >
                🔄 Try Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            onClick={() => navigate("/dashboard")}
            variant="outline"
            className="rounded-full p-3"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div className="flex items-center gap-2">
            <MascotCharacter size="small" animation="bounce" />
            <span className="text-lg font-semibold text-gray-700">Addition Quiz</span>
          </div>
          <div className="text-sm text-gray-500">
            {currentQuestion + 1} / {questions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
          <div 
            className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        {/* Question */}
        <div className="math-card min-h-[400px] flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            Question {currentQuestion + 1}
          </h1>
          
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">
              {questions[currentQuestion].question}
            </div>
            <p className="text-xl text-gray-600">
              {questions[currentQuestion].visual}
            </p>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-8">
            {questions[currentQuestion].options.map((option) => (
              <Button
                key={option}
                onClick={() => handleAnswerSelect(option)}
                className={`kid-button text-2xl h-16 ${
                  selectedAnswer === option 
                    ? "from-accent to-accent/80 ring-4 ring-accent/50" 
                    : "from-gray-200 to-gray-300 text-gray-700 hover:from-gray-300 hover:to-gray-400"
                }`}
              >
                {option}
              </Button>
            ))}
          </div>

          <Button 
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            className="kid-button from-primary to-primary/80 mx-auto disabled:opacity-50"
          >
            ✓ Submit Answer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
