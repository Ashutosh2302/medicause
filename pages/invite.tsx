// app/invite/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function InvitePage() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (code) {
      // Try to open app after a short delay
      const timer = setTimeout(() => {
        setRedirecting(true);
        // Try deep link
        window.location.href = `medicause://?code=${code}`;
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [code]);

  if (!code) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Invalid Invitation Link
          </h1>
          <p className="text-gray-600">No membership code provided.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        {redirecting ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Opening Medicause App...
            </h2>
            <p className="text-gray-600">
              If the app doesn&apos;t open, please download it from the App
              Store or Play Store.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-6">
              <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👥</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Join Medicause Membership
              </h1>
              <p className="text-gray-600 mb-4">
                You&apos;ve been invited to join a membership group
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-500 mb-1">Membership Code</p>
              <p className="text-xl font-mono font-semibold text-gray-800">
                {code}
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => {
                  window.location.href = `medicause://?code=${code}`;
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Open in App
              </button>
              <p className="text-sm text-gray-500">
                Don&apos;t have the app?{" "}
                <a
                  href="https://apps.apple.com/app/medicause"
                  className="text-blue-600 hover:underline"
                >
                  Download for iOS
                </a>
                {" or "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.medicause.medicause"
                  className="text-blue-600 hover:underline"
                >
                  Android
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
