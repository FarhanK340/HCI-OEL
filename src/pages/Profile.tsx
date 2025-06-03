
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import MascotCharacter from "@/components/MascotCharacter";
import BadgeDisplay from "@/components/BadgeDisplay";

const Profile = () => {
  const navigate = useNavigate();
  const [childName, setChildName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("🐻");
  const [volume, setVolume] = useState(75);
  const [textSize, setTextSize] = useState("medium");

  const avatars = ["🐻", "🦁", "🐯", "🐸", "🐰", "🦊", "🐼", "🐨"];
  const badges = ["🌟", "🎯", "🏆", "🎨", "⚡"];

  useEffect(() => {
    const name = localStorage.getItem("childName") || "Superstar";
    setChildName(name);
    
    const savedAvatar = localStorage.getItem("selectedAvatar");
    if (savedAvatar) setSelectedAvatar(savedAvatar);
  }, []);

  const handleSaveProfile = () => {
    localStorage.setItem("childName", childName);
    localStorage.setItem("selectedAvatar", selectedAvatar);
    navigate("/dashboard");
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
          <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
          <div></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile Info */}
          <div className="math-card">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              👤 About Me
            </h2>
            
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                {selectedAvatar}
              </div>
              <h3 className="text-xl font-semibold text-gray-700">{childName}</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="text-lg p-3 rounded-2xl border-2 border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Choose Your Avatar
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {avatars.map((avatar) => (
                    <Button
                      key={avatar}
                      onClick={() => setSelectedAvatar(avatar)}
                      className={`kid-button text-2xl h-16 ${
                        selectedAvatar === avatar 
                          ? "from-accent to-accent/80 ring-4 ring-accent/50" 
                          : "from-gray-200 to-gray-300 text-gray-700"
                      }`}
                    >
                      {avatar}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Settings & Achievements */}
          <div className="space-y-8">
            <div className="math-card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                🏆 My Badges
              </h2>
              <BadgeDisplay badges={badges} />
            </div>

            <div className="math-card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                ⚙️ Settings
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sound Volume: {volume}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer slider"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Text Size
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["small", "medium", "large"].map((size) => (
                      <Button
                        key={size}
                        onClick={() => setTextSize(size)}
                        className={`kid-button ${
                          textSize === size
                            ? "from-primary to-primary/80"
                            : "from-gray-200 to-gray-300 text-gray-700"
                        }`}
                      >
                        {size === "small" ? "Aa" : size === "medium" ? "Aa" : "Aa"}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="math-card">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📊 My Stats
              </h2>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl text-primary font-bold">Level 3</div>
                  <div className="text-sm text-gray-600">Current Level</div>
                </div>
                <div>
                  <div className="text-3xl text-accent font-bold">47</div>
                  <div className="text-sm text-gray-600">Problems Solved</div>
                </div>
                <div>
                  <div className="text-3xl text-secondary font-bold">12</div>
                  <div className="text-sm text-gray-600">Day Streak</div>
                </div>
                <div>
                  <div className="text-3xl text-kid-green font-bold">85%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button 
            onClick={handleSaveProfile}
            className="kid-button from-primary to-primary/80 text-xl px-12"
          >
            💾 Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
