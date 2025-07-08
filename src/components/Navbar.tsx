
import { useState, useEffect } from "react";

const Navbar = () => {
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          return 180; // Reset to 3 minutes
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <nav className="bg-slate-800 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img 
            src="https://d31bwppm8yl9g2.cloudfront.net/learner/gs/newgsblack.svg" 
            alt="Growth School" 
            className="h-8 brightness-0 invert"
          />
          <div className="flex items-center gap-4">
            <img 
              src="https://d31bwppm8yl9g2.cloudfront.net/learner/gs/tps.svg" 
              alt="LinkedIn Top Startup India" 
              className="h-6"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">● Live</span>
            <span className="text-sm">3 Day Mastermind: 11th to 13th July</span>
          </div>
          <div className="text-sm">
            Offer ends in <span className="font-bold text-red-400">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
