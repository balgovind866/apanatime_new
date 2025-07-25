import React from 'react';
import { PhoneCall, Mail } from 'lucide-react';

const SupportCenter = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
         Apana Time Support Center
          </h2>
        </div>

        {/* Support Cards */}
  2<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
         <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Get in Touch
              </h3>


 <p className="text-gray-600 mb-8">
                Call us for support and inquiries at any time.
              </p>


            
                <div className="text-sm text-gray-600 mb-6">
                <p className="font-medium">Available from Sunday - Saturday</p>
                <p>7:00 AM to 8:00 PM IST.</p>
              </div>
               <div className="text-xs text-gray-500 space-y-1">
                <p>*Please note all calls may be recorded for quality and training purposes.</p>
                <p>*By contacting us, you agree to our privacy policy and terms of service.</p>
              </div>
</div>

</div>
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Write to Us
              </h3>
               <p className="text-gray-600 mb-8">
                Have questions? Our inbox is always open for you.
              </p>

                 <a 
                    href="support@gmail.com" 
                    className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors break-all"
                  >
                   support@apanatime.in
                  </a>
                   <div className="mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                  Send Message
                </button>
              </div>
</div>
</div>
</div>



        {/* Additional Support Information */}
  <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-5xl mx-auto">
         <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Need Immediate Assistance?
            </h4>

                        <p className="text-gray-600 mb-4">
              Our support team is dedicated to helping you succeed. Whether you need technical support, 
              course guidance, or have general inquiries, we're here to help.
            </p>
     <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
      <a 
                href="tel:+9189285673"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                Call Now
          
     </a>
    </div>

      </div>
      </div>
      </div>
    </div>
  );
};

export default SupportCenter;
