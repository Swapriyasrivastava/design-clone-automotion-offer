
import { useState, useEffect } from "react";

const CTASection = () => {
  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          return 180;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${days.toString().padStart(2, '0')} Days : ${hours.toString().padStart(2, '0')} Hours : ${mins.toString().padStart(2, '0')} Mins`;
  };

  return (
    <section className="py-16 px-4 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-700 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Join The AI Marketing Mastermind, NOW!
          </h2>
          <p className="text-xl mb-6 opacity-90">With the Early Bird Discount</p>
          
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            <div className="text-2xl font-bold">03 Days : 08 Hours : 31 Mins</div>
            <button className="bg-white text-slate-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              Join the AI Marketing Mastermind
              <div className="text-sm">Now for Rs.99 Rs.1999</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
