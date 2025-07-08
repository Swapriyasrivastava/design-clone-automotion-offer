
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const WallOfLove = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      author: "AG",
      name: "AJIT GOVIND",
      time: "07:46 PM",
      message: "I dont want to talk....But I just want to thank you so much for this fantastic experience. I already developed an aspirational video for my professional work, based on your training"
    },
    {
      id: 2,
      author: "PS",
      name: "Priyanku Sarmah",
      time: "08:30 PM",
      message: "Hi everyone!! Thank you Growth School Team for the excellent show and enthusiasm making about 400 people glued to the workshop. It's been an incredible two-day mastermind workshop 🔥"
    },
    {
      id: 3,
      author: "MN",
      name: "Manish Nishitala",
      time: "07:15 PM",
      message: "Do watch the courses guys, they are really amazing."
    },
    {
      id: 4,
      author: "RN",
      name: "Raghuveer Nishtala",
      time: "08:45 PM",
      message: "Thanks Team. This has been an amazing learning experience"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-gray-500 text-sm mb-2">WALL OF LOVE</p>
            <h2 className="text-3xl font-bold">
              Rated <span className="text-green-500">4.7/5</span> by <span className="text-green-500">1000+</span> Learners
            </h2>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 border border-gray-300 rounded-full hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 border border-gray-300 rounded-full hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto custom-scrollbar pb-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border border-gray-200 rounded-lg p-6 min-w-[350px] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author}
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.time}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WallOfLove;
