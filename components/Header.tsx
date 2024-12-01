import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b bg-white shadow-sm">
      <div className="flex items-center gap-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={50}
          className="rounded-lg shadow-sm"
        />

      </div>
      <nav>
        <ul className="flex gap-6">
          <li><Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link></li>
          <li><Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link></li>
          <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
} 