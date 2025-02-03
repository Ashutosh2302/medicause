import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white px-4 sm:px-8 py-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
          © {new Date().getFullYear()} Powered by eArk Endeavours Pvt. Ltd. All rights reserved.
        </div>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</Link>
          <Link href="/cancellation-and-refund-policy" className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors">Cancellation & Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
} 