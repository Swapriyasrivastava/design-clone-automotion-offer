
const PricingSticky = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl border-2 border-green-500 p-4 max-w-xs">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-500 mb-1">₹99</div>
          <div className="text-sm text-gray-500 line-through mb-2">₹1,999</div>
          <div className="text-xs text-gray-600 mb-3">Deadline 8 July 2025</div>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSticky;
