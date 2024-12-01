import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="flex-1 px-8 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#0A2B5D] text-center">Welcome to Medicause</h1>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-lg text-gray-700 mb-4 text-justify">
            Medicause is your comprehensive healthcare companion, bringing all essential medical services
            to your fingertips. We provide seamless access to online consultations with experienced
            healthcare professionals, convenient health checkups, and reliable home care services all
            through our integrated platform.
          </p>
          <p className="text-lg text-gray-700 mb-4 text-justify">
            From booking lab tests and ordering medicines to scheduling home healthcare visits,
            we&apos;ve simplified the healthcare journey for you. Our all-in-one app ensures that quality
            healthcare is accessible, affordable, and available whenever you need it. Experience
            the future of healthcare with Medicause.
          </p>
        </div>
      </main>
    </Layout>
  );
}
