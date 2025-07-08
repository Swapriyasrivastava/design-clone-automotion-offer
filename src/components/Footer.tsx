
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-green-500">₹99</div>
          <div className="text-sm text-gray-500 line-through">₹1,999</div>
          <div className="text-xs text-gray-600">Deadline 8 July 2025</div>
        </div>
        
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
          Register Now
        </button>
      </div>
    </footer>
  );
};

export default Footer;
