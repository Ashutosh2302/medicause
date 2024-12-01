import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <main className="flex-1 px-8 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#0A2B5D] text-center">Contact Us</h1>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#0A2B5D] mb-3">Get in Touch</h2>
              <p className="text-gray-700 text-justify mb-6">
                We're here to help! Whether you have questions about our services, need technical support, or want to explore business opportunities, our team is ready to assist you.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  >
                    <option value="">Select a subject</option>
                    <option value="support">Technical Support</option>
                    <option value="service">Service Inquiry</option>
                    <option value="business">Business Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0A2B5D] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-[#0A2B5D] mb-3">Other Ways to Reach Us</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold text-[#0A2B5D] mb-2">Customer Support</h3>
                  <p className="text-gray-700">Email: medicause21@gmail.com</p>
                  <p className="text-gray-700">Phone: +91 8076186888</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold text-[#0A2B5D] mb-2">Business Inquiries</h3>
                  <p className="text-gray-700">Email: medicause21@gmail.com</p>
                  <p className="text-gray-700">Phone: +91 8076186888</p>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-[#0A2B5D] mb-3">Office Location</h2>
              <div className="p-4 border rounded-lg">
                <p className="text-gray-700">Medicause Headquarters</p>
                <p className="text-gray-700">Sector 43, Faridabad</p>
                <p className="text-gray-700">Haryana, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
} 