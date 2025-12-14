import React from "react";

const EMAIL = "darshanpancholi848@gmail.com";
const PHONE_NUMBER = "+9175976 41016";
const ADDRESS = "Plot no-31, Barkat nagar Charbhuja, Rawatbhata, Rajasthan, India";

const Contact = () => (
  <section className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#DCCA87] text-center">Contact Us</h2>
    <div className="bg-white/90 rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 flex flex-col gap-6 mb-8">
      
      {/* Contact Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl text-center">
          <span className="text-2xl sm:text-3xl mb-2 block">📧</span>
          <h3 className="font-bold text-[#DCCA87] mb-1 text-sm sm:text-base">Email</h3>
          <a href={`mailto:${EMAIL}`} className="text-gray-700 hover:text-[#DCCA87] font-mono text-xs sm:text-sm block break-all">
            {EMAIL}
          </a>
        </div>
        <div className="p-4 sm:p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl text-center">
          <span className="text-2xl sm:text-3xl mb-2 block">📱</span>
          <h3 className="font-bold text-[#DCCA87] mb-1 text-sm sm:text-base">WhatsApp</h3>
          <a 
            href={`https://wa.me/${PHONE_NUMBER}?text=Hello%20Diamond%20Fragrance!`}
            className="text-gray-700 hover:text-[#DCCA87] font-mono text-xs sm:text-sm block"
            target="_blank" rel="noopener noreferrer"
          >
            Tap to Chat
          </a>
        </div>
        <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:col-span-2 md:col-span-1">
          <span className="text-2xl sm:text-3xl mb-2 block">📍</span>
          <h3 className="font-bold text-[#DCCA87] mb-1 text-sm sm:text-base">Address</h3>
          <p className="text-gray-700 text-xs">{ADDRESS}</p>
        </div>
      </div>

      <form
        action={`https://formsubmit.co/${EMAIL}`}
        method="POST"
        target="_blank"
        className="flex flex-col gap-4"
      >
        {/* Customer Details */}
        <div className="grid sm:grid-cols-2 gap-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Full Name *" 
            className="p-3 sm:p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[#DCCA87] focus:ring-2 focus:ring-[#DCCA87]/20 text-sm sm:text-base" 
            required 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number *" 
            className="p-3 sm:p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[#DCCA87] focus:ring-2 focus:ring-[#DCCA87]/20 text-sm sm:text-base" 
            required 
          />
        </div>
        <input 
          type="email" 
          name="email" 
          placeholder="Email Address *" 
          className="p-3 sm:p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[#DCCA87] focus:ring-2 focus:ring-[#DCCA87]/20 text-sm sm:text-base" 
          required 
        />
        
        <textarea 
          name="message" 
          placeholder="Your fragrance inquiry..." 
          className="p-3 sm:p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[#DCCA87] focus:ring-2 focus:ring-[#DCCA87]/20 resize-vertical text-sm sm:text-base" 
          rows={6} 
          required
        />

        {/* Hidden fields */}
        <input type="hidden" name="_subject" value="🚨 URGENT: New Diamond Fragrance Order - [Name: {{name}}]" />
        <input type="hidden" name="_cc" value="darshanpancholi848@gmail.com" />
        <input type="hidden" name="_replyto" value="{{email}}" />
        <input type="hidden" name="_autoresponse" value="Thanks! We'll reply within 1 hour 📱" />
        <input type="text" name="_honey" style={{ display: "none" }} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_format" value="plain" />
        <input type="hidden" name="_blank" value="true" />

        <button
          type="submit"
          className="bg-gradient-to-r from-[#DCCA87] to-[#bfa760] text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#DCCA87]/50 transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider text-sm sm:text-base lg:text-lg mt-2"
        >
          🚀 Send to EMAIL + WHATSAPP
        </button>
      </form>

      {/* Confirmation Banner */}
      <div className="p-4 sm:p-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border-2 border-dashed border-[#DCCA87]/30 text-center">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">✅</span>
            <span className="font-semibold text-[#DCCA87] text-xs sm:text-sm break-all">{EMAIL}</span>
          </div>
          <div className="w-px h-6 bg-gray-300 hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">📱</span>
            <span className="font-semibold text-green-600 text-xs sm:text-sm">+91 7597641016</span>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">All inquiries delivered instantly to both platforms</p>
      </div>
    </div>
  </section>
);

export default Contact;