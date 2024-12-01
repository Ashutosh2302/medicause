import Layout from "../components/Layout";

export default function TermsOfService() {
  return (
    <Layout>
      <main className="flex-1 px-8 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#0A2B5D] text-center">Terms of Service</h1>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#0A2B5D] mb-3">1. Service Agreement</h2>
              <p className="text-gray-700 text-justify">
                By using Medicause&apos;s services, you agree to these terms and conditions. Our services include online consultations, health checkups, home care services, lab tests, and medicine delivery. We reserve the right to modify or discontinue any service without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A2B5D] mb-3">2. User Responsibilities</h2>
              <p className="text-gray-700 text-justify mb-3">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Not share your account credentials</li>
                <li>Update your information as needed</li>
                <li>Use our services in compliance with applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A2B5D] mb-3">3. Medical Services</h2>
              <p className="text-gray-700 text-justify">
                While we strive to provide high-quality healthcare services, we do not guarantee specific medical outcomes. Our platform facilitates healthcare delivery but does not replace emergency medical services. In case of medical emergencies, please contact your local emergency services immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A2B5D] mb-3">4. Payment Terms</h2>
              <p className="text-gray-700 text-justify">
                Payment is required for all services unless otherwise specified. We accept various payment methods and will provide clear pricing information before any service is rendered. Refunds are processed according to our refund policy and applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A2B5D] mb-3">5. Limitation of Liability</h2>
              <p className="text-gray-700 text-justify">
                Medicause and its partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. This includes but is not limited to loss of data, profits, or business opportunities.
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
} 