"use client";

import { useEffect, useRef, useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { menuItems } from "@/lib/data";
import { cn } from "@/lib/cn";
import Link from "next/link";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointer = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative z-50">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded text-dark/70",
          "transition-colors hover:bg-black/5 hover:text-dark"
        )}
      >
        <MoreHorizontal size={28} strokeWidth={2.5} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "absolute left-0 top-full mt-2 xs:w-40 md:w-44",
              "bg-dark backdrop-blur-md shadow-2xl ring-1 ring-white/10",
              "py-2 rounded-xl overflow-hidden"
            )}
          >
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.url}
                  className={cn(
                    "block px-4 py-3 text-[14px] font-semibold text-white/90 text-left",
                    "transition-all hover:bg-white/10 hover:pl-6 active:bg-white/20 hover:text-highlight"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}