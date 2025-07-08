
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
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="text-sm">
          Offer ends in <span className="font-bold text-red-400">{formatTime(timeLeft)}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
