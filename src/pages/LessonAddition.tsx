
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import MascotCharacter from "@/components/MascotCharacter";

const LessonAddition = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "What is Addition? ➕",
      content: (
        <div className="text-center space-y-6">
          <p className="text-xl text-gray-700">
            Addition means putting things together to make more! 
          </p>
          <div className="flex justify-center items-center space-x-4 text-6xl">
            <span>🍎</span>
            <span className="text-primary text-4xl">+</span>
            <span>🍎</span>
            <span className="text-gray-500 text-4xl">=</span>
            <span>🍎🍎</span>
          </div>
          <p className="text-lg text-gray-600">
            1 apple + 1 apple = 2 apples!
          </p>
        </div>
      )
    },
    {
      title: "Let's Practice! 🎯",
      content: (
        <div className="text-center space-y-6">
          <p className="text-xl text-gray-700">
            Count the fruits and add them together!
          </p>
          <div className="space-y-4">
            <div className="flex justify-center items-center space-x-4 text-4xl">
              <div className="flex space-x-2">
                <span>🍓</span>
                <span>🍓</span>
                <span>🍓</span>
              </div>
              <span className="text-primary text-3xl">+</span>
              <div className="flex space-x-2">
                <span>🍓</span>
                <span>🍓</span>
              </div>
              <span className="text-gray-500 text-3xl">=</span>
              <span className="text-2xl font-bold text-primary">?</span>
            </div>
            <p className="text-lg text-gray-600">
              3 strawberries + 2 strawberries = ?
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Great Job! 🌟",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl animate-bounce-gentle">🎉</div>
          <p className="text-xl text-gray-700">
            You learned about addition! Now let's practice with a fun quiz!
          </p>
          <div className="flex justify-center items-center space-x-4 text-4xl">
            <span>🍓🍓🍓</span>
            <span className="text-primary text-3xl">+</span>
            <span>🍓🍓</span>
            <span className="text-gray-500 text-3xl">=</span>
            <span className="text-primary font-bold">5</span>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/quiz");
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

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
            <span className="text-lg font-semibold text-gray-700">Learning Addition</span>
          </div>
          <div className="text-sm text-gray-500">
            {currentStep + 1} / {steps.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
          <div 
            className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>

        {/* Content */}
        <div className="math-card min-h-[400px] flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            {steps[currentStep].title}
          </h1>
          {steps[currentStep].content}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button 
            onClick={prevStep}
            disabled={currentStep === 0}
            className="kid-button from-gray-400 to-gray-500 disabled:opacity-50"
          >
            ⬅️ Back
          </Button>
          <Button 
            onClick={nextStep}
            className="kid-button from-primary to-primary/80"
          >
            {currentStep === steps.length - 1 ? "🎯 Take Quiz!" : "Next ➡️"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LessonAddition;
