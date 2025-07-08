
const TrustedBrands = () => {
  const brandLogos = [
    "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/gc1.svg",
    "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/gc6.svg", 
    "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/gc3.svg",
    "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/gc3.svg"
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-12">Trusted by Top Brands</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          {brandLogos.map((logo, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 h-20 flex items-center justify-center">
              <img 
                src={logo} 
                alt={`Brand ${index + 1}`}
                className="max-h-12 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
