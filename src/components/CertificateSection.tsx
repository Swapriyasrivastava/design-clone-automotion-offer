
const CertificateSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-green-500">And Yes, You Will Receive a Certificate</span>
              <br />
              to Validate Your Learnings
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              This isn't just another certificate to add to your collection—it's validation that you've 
              gained practical, hands-on experience in leveraging AI for real-world marketing 
              challenges.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-8 border">
              <div className="text-center">
                <img 
                  src="https://d31bwppm8yl9g2.cloudfront.net/learner/gs/newgsblack.svg" 
                  alt="Growth School" 
                  className="h-8 mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-green-600 mb-2">Certificate of Completion</h3>
                <p className="text-sm text-gray-600 mb-4">Proudly presented to</p>
                <p className="text-lg font-semibold mb-4">Yash Indira</p>
                <p className="text-sm text-gray-600 mb-6">for successfully completing the Marketing Mastermind</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <div>
                    <p className="font-semibold">Dileep KVS</p>
                    <p>AI Expert Head</p>
                    <p>AI Initiatives GrowthSchool</p>
                    <p>Mentor</p>
                  </div>
                  <div>
                    <p className="font-semibold">Coaching</p>
                    <p>Vaishali Shoray</p>
                    <p>Executive GrowthSchool</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative pattern */}
            <div className="absolute -right-8 -top-8 w-32 h-32 opacity-20">
              <div className="grid grid-cols-6 gap-2 h-full">
                {Array.from({length: 36}).map((_, i) => (
                  <div key={i} className="text-green-500 text-xs">↗</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
