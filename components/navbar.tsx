"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle
} from "@/components/ui/dialog";

export function Navbar() {
  return (
    <nav className="flex justify-between m-4">
      <div className="text-3xl md:text-5xl tracking-tight text-foreground">
        Storipalorium
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <button aria-label="menu" className="mt-1 text-accent">
            <div className="h-[2px] w-10 bg-accent mb-2" />
            <div className="h-[2px] w-10 bg-accent mb-2" />
            <div className="h-[2px] w-10 bg-accent" />
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle className="sr-only">Menu</DialogTitle>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
