import Layout from "../components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <main className="flex-1 px-8 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#0A2B5D] text-center">Privacy Policy</h1>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#0A2B5D] mb-3">1. Information We Collect</h2>
              <p className="text-gray-700 text-justify mb-3">
                At Medicause, we collect various types of information to provide you with the best possible healthcare services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Personal Information: Name, date of birth, gender, contact details</li>
                <li>Medical Information: Medical history, current medications, allergies</li>
                <li>Technical Information: Device information, IP address, browser type</li>
                <li>Usage Information: How you interact with our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A2B5D] mb-3">2. How We Use Your Information</h2>
              <p className="text-gray-700 text-justify mb-3">
                Your information is used to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide and improve our healthcare services</li>
                <li>Process appointments and payments</li>
                <li>Send important notifications about your care</li>
                <li>Maintain and improve our platform</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A2B5D] mb-3">3. Data Protection</h2>
              <p className="text-gray-700 text-justify">
                We implement industry-standard security measures to protect your personal and medical information. This includes encryption, secure servers, and regular security audits. We comply with all relevant healthcare data protection regulations and standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A2B5D] mb-3">4. Your Rights</h2>
              <p className="text-gray-700 text-justify">
                You have the right to access, correct, or delete your personal information. You can also request a copy of your data or withdraw consent for certain data processing activities. Contact our privacy team at medicause21@gmail.com for any privacy-related concerns.
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
} 