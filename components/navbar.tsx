"use client";

import Link from "next/link";
import { useState } from "react";
import { XIcon } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between m-4">
      <div className="text-3xl md:text-5xl tracking-tight text-foreground">
        Storipalorium
      </div>
      <button 
        onClick={() => setIsOpen(true)} 
        aria-label="menu" 
        className="mt-1 mr-4 text-accent z-50"
      >
        <div className="h-[2px] w-10 bg-accent mb-2" />
        <div className="h-[2px] w-10 bg-accent mb-2" />
        <div className="h-[2px] w-10 bg-accent" />
      </button>

      {/* Background blur overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm transition-all duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in panel */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 h-screen w-screen max-w-full bg-background transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-4 p-2 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-offset-2 z-50"
        >
          <XIcon className="size-8" />
          <span className="sr-only">Close</span>
        </button>
        <div className="flex flex-col h-full w-full py-12 px-8">
          <h2 className="sr-only">Menu</h2>
          
          {/* Main Navigation */}
          <nav className="flex flex-col space-y-6 mb-8">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-5xl md:text-7xl hover:opacity-75 transition-all duration-300 ease-in-out relative flex items-center group">
              <img src="/hovered.svg" alt="" className="w-6 h-6 mr-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="ml-0 group-hover:translate-x-8 transition-transform duration-300">HOME</span>
            </Link>
            <Link href="/create" onClick={() => setIsOpen(false)} className="text-5xl md:text-7xl hover:opacity-75 transition-all duration-300 ease-in-out relative flex items-center group">
              <img src="/hovered.svg" alt="" className="w-6 h-6 mr-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="ml-0 group-hover:translate-x-8 transition-transform duration-300">CREATE</span>
            </Link>
            <Link href="/category" onClick={() => setIsOpen(false)} className="text-5xl md:text-7xl hover:opacity-75 transition-all duration-300 ease-in-out relative flex items-center group">
              <img src="/hovered.svg" alt="" className="w-6 h-6 mr-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="ml-0 group-hover:translate-x-8 transition-transform duration-300">CATEGORIES</span>
            </Link>
            <Link href="/api" onClick={() => setIsOpen(false)} className="text-5xl md:text-7xl hover:opacity-75 transition-all duration-300 ease-in-out relative flex items-center group">
              <img src="/hovered.svg" alt="" className="w-6 h-6 mr-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="ml-0 group-hover:translate-x-8 transition-transform duration-300">API</span>
            </Link>
            <Link href="/login" onClick={() => setIsOpen(false)} className="text-5xl md:text-7xl hover:opacity-75 transition-all duration-300 ease-in-out relative flex items-center group">
              <img src="/hovered.svg" alt="" className="w-6 h-6 mr-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="ml-0 group-hover:translate-x-8 transition-transform duration-300">LOGIN</span>
            </Link>
          </nav>

          <div className="border-t border-secondary pt-6 mb-8">
            <div className="flex flex-col space-y-2">
              <div className="text-xl md:text-2xl font-medium">Account</div>
              <div className="flex flex-col ml-4">
                <span className="text-lg md:text-xl">testtest@gmail.com</span>
              </div>
              <div className="text-xl md:text-2xl font-medium mt-4">Username</div>
              <div className="flex flex-col ml-4">
                <span className="text-lg md:text-xl">@testtest</span>
              </div>
              <div className="text-xl md:text-2xl font-medium mt-4">NaN</div>
              <div className="flex flex-col ml-4">
                <span className="text-lg md:text-xl">NaN</span>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary pt-6">
            <div className="text-xl md:text-2xl font-medium">Night/Day</div>
          </div>
        </div>
      </div>
    </nav>
  );
}