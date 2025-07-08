
import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "When is the Marketing Mastermind?",
      answer: "The event kicks off with a mandatory call on Friday at 7PM IST, followed by mastermind sessions on Saturday and Sunday from 11AM to 7PM IST. You can reach out to hi@growthschool.io for exact dates!"
    },
    {
      question: "How will the mastermind sessions be conducted?",
      answer: "All sessions will be conducted live online through our interactive platform."
    },
    {
      question: "Is the event completely online?",
      answer: "Yes, the entire event is conducted online for your convenience."
    },
    {
      question: "Why can't I receive a recording of the sessions?",
      answer: "Live sessions ensure maximum engagement and real-time interaction with instructors."
    },
    {
      question: "What happens if I can't attend on the scheduled dates?",
      answer: "We recommend attending live sessions for the best experience, but we understand scheduling conflicts may occur."
    },
    {
      question: "Is there any preparation needed before the event?",
      answer: "No prior preparation is required. We'll provide all necessary materials and resources."
    },
    {
      question: "Can I participate if I'm new to Generative AI?",
      answer: "Absolutely! This mastermind is designed for all levels, including complete beginners."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-green-500">Frequently</span><br />
              <span className="text-green-500">Asked</span><br />
              <span className="text-green-500">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span className="text-2xl">{openFAQ === index ? '−' : '+'}</span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
