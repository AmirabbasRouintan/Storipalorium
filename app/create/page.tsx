"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function CreatePage() {
  const [open, setOpen] = useState(false);

  const openMenu = useCallback(() => setOpen(true), []);

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      onPaste={openMenu}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        openMenu();
      }}
    >
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="text-center w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-4 md:mx-auto p-12 md:p-24 border-secondary border-t border-l border-r-6 border-b-6">
          <div className="md:hidden space-y-10">
            <Button
              variant="outline"
              size="lg"
              onClick={openMenu}
              className="w-full h-28 px-16 text-2xl text-foreground! border-foreground! border-t border-l border-r-6 border-b-6"
            >
              UPLOAD
            </Button>
            <div className="text-foreground/60">OR</div>
            <Button
              variant="outline"
              size="lg"
              onClick={openMenu}
              className="w-full h-28 px-16 text-2xl text-foreground! border-secondary! border-t border-l border-r-6 border-b-6"
            >
              PASTE
            </Button>
          </div>
          <div className="hidden md:block">
            <h1 className="text-3xl md:text-5xl font-light">PRESS CTRL + V</h1>
            <div className="my-4">
              <h2 className="text-3xl md:text-5xl font-light">OR</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-light">DRAG SOMETHING</h3>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-3xl md:max-w-5xl p-8 border-secondary border-t border-l border-r-6 border-b-6">
          <DialogTitle className="sr-only">Add Item</DialogTitle>
          <div className="grid gap-14 md:grid-cols-[240px_1fr] items-start">
            <label className="text-foreground text-2xl text-left md:self-start md:pr-6">
              Title
            </label>
            <input className="w-full bg-transparent text-foreground border-secondary border-t border-l border-r-6 border-b-6 px-4 py-3 text-xl h-14" />

            <label className="text-foreground text-2xl text-left md:self-start md:pr-6">
              Link
            </label>
            <textarea className="w-full bg-transparent text-foreground border-secondary border-t border-l border-r-6 border-b-6 px-4 py-3 text-xl min-h-48" />

            <label className="text-foreground text-2xl text-left md:self-start md:pr-6">
              Category
            </label>
            <select className="w-full bg-transparent text-foreground border-secondary border-t border-l border-r-6 border-b-6 px-4 py-3 text-xl h-14">
              <option className="bg-background text-foreground" value="notes">
                Notes
              </option>
              <option className="bg-background text-foreground" value="links">
                Links
              </option>
              <option className="bg-background text-foreground" value="media">
                Media
              </option>
            </select>
          </div>
          <div className="mt-10 flex justify-end gap-6">
            <Button
              variant="outline"
              className="px-8 py-3 text-xl text-foreground! border-foreground! border-t border-l border-r-6 border-b-6"
              onClick={() => setOpen(false)}
            >
              CANCEL
            </Button>
            <Button
              variant="outline"
              className="px-8 py-3 text-xl text-foreground! border-secondary! border-t border-l border-r-6 border-b-6"
              onClick={() => setOpen(false)}
            >
              SAVE
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
