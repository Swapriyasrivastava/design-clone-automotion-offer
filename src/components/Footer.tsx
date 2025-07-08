
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://d31bwppm8yl9g2.cloudfront.net/learner/gs/newgsblack.svg" 
              alt="Growth School" 
              className="h-8 brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm">
              Transforming careers through cutting-edge AI education and practical learning experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>AI Marketing Mastermind</li>
              <li>Growth Marketing</li>
              <li>Data Science</li>
              <li>Product Management</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Growth School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
