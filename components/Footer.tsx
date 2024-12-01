import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white px-8 py-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Powered by eArk Endeavours Pvt. Ltd. All rights reserved.
        </div>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
} 