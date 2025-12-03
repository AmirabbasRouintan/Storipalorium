"use client";

import { Fingerprint } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [isScanning, setIsScanning] = useState(false);

  const handleFingerprintScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => setIsScanning(false), 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-4 md:mx-auto p-16 md:p-20 border-secondary border-t border-l border-r-6 border-b-6">
        <div className="space-y-8">
          <div className="text-3xl md:text-4xl text-foreground">Login</div>
          <div className="space-y-6">
            <label className="text-foreground">Email</label>
            <input type="email" className="w-full bg-transparent text-foreground border-secondary border-t border-l border-r-6 border-b-6 px-4 py-3 text-xl h-14" />
          </div>
          <div className="space-y-6">
            <label className="text-foreground">Password</label>
            <input type="password" className="w-full bg-transparent text-foreground border-secondary border-t border-l border-r-6 border-b-6 px-4 py-3 text-xl h-14" />
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-6">
            <button className="w-full sm:w-auto px-10 sm:px-8 py-4 sm:py-3 text-lg sm:text-xl text-foreground! border-foreground! border-t border-l border-r-6 border-b-6">CANCEL</button>
            <button className="w-full sm:w-auto px-10 sm:px-8 py-4 sm:py-3 text-lg sm:text-xl text-foreground! border-secondary! border-t border-l border-r-6 border-b-6">LOGIN</button>
            <button 
              onClick={handleFingerprintScan}
              aria-label="Fingerprint login" 
              className={`w-full sm:w-auto px-10 sm:px-8 py-4 sm:py-3 text-lg sm:text-xl text-foreground! border-secondary! border-t border-l border-r-6 border-b-6 inline-flex items-center justify-center ${isScanning ? 'pulse-animation' : ''}`}
            >
              <Fingerprint className={`w-8 h-8 ${isScanning ? 'animate-pulse' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}