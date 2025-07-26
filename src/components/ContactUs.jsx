import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white px-6 md:px-12 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center">
        Get in Touch with Raaga Sangeet Academy
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <form className="space-y-6 bg-[#0f3460] p-8 rounded-lg shadow-lg">
          <div>
            <label className="block mb-2 text-sm font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-[#1a1a2e] text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded bg-[#1a1a2e] text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full p-3 rounded bg-[#1a1a2e] text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Interested In</label>
            <select className="w-full p-3 rounded bg-[#1a1a2e] text-white border border-yellow-400">
              <option>-- Select Course --</option>
              <option>Vocal (Classical)</option>
              <option>Instrumental (Tabla, Harmonium, etc.)</option>
              <option>Music Theory</option>
              <option>Workshops or Events</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Message</label>
            <textarea
              placeholder="Write your message here..."
              rows={4}
              className="w-full p-3 rounded bg-[#1a1a2e] text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded bg-yellow-400 text-[#1a1a2e] font-bold hover:bg-yellow-300 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Right: Academy Info + Map */}
        <div className="space-y-8">
          <div className="bg-[#0f3460] p-8 rounded-lg shadow-lg space-y-4">
            <h3 className="text-xl font-semibold text-yellow-300">Contact Information</h3>
            <p><strong>📍 Address:</strong> Raaga Sangeet Academy, Music Street, Lucknow, UP, India</p>
            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p><strong>📧 Email:</strong> contact@raagasangeet.com</p>
            <p><strong>🕐 Timings:</strong> Mon–Sat, 9:00 AM – 6:00 PM</p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Raaga Sangeet Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9790187816897!2d80.9461593!3d26.8467086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2b55c5a3fd1%3A0xf05b14525784396f!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1625604733783!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
