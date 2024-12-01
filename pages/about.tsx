import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <main className="flex-1 px-8 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#0A2B5D] text-center">About Medicause</h1>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#0A2B5D] mb-3">Our Mission</h2>
              <p className="text-gray-700 text-justify">
                At Medicause, our mission is to make quality healthcare accessible to everyone. We believe that healthcare should be convenient, affordable, and available at your fingertips. Through our innovative platform, we&apos;re bridging the gap between healthcare providers and patients.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A2B5D] mb-3">Our Story</h2>
              <p className="text-gray-700 text-justify">
                Founded in 2021, Medicause emerged from a simple yet powerful idea: healthcare should be hassle-free. Our team of healthcare professionals and technology experts came together to create a comprehensive platform that addresses the everyday healthcare needs of people.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A2B5D] mb-3">What We Offer</h2>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold text-[#0A2B5D] mb-2">Online Consultations</h3>
                  <p className="text-gray-700">Connect with qualified healthcare professionals from the comfort of your home.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold text-[#0A2B5D] mb-2">Health Checkups</h3>
                  <p className="text-gray-700">Comprehensive health assessments and preventive care packages.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold text-[#0A2B5D] mb-2">Home Care Services</h3>
                  <p className="text-gray-700">Professional healthcare services delivered to your doorstep.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold text-[#0A2B5D] mb-2">Medicine Delivery</h3>
                  <p className="text-gray-700">Quick and reliable delivery of prescribed medications.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0A2B5D] mb-3">Our Values</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><span className="font-semibold">Patient First:</span> Every decision we make prioritizes patient well-being</li>
                <li><span className="font-semibold">Quality Care:</span> We maintain high standards in all our services</li>
                <li><span className="font-semibold">Innovation:</span> Continuously improving healthcare delivery through technology</li>
                <li><span className="font-semibold">Accessibility:</span> Making healthcare available to everyone, everywhere</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
} 