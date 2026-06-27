"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import DropdownMenu from "./DropdownMenu";
import MobileDrawer from "./MobileDrawer";

const TopBar = () => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  return (
    <header className="w-full bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1">

        <div className="flex items-center">
          <div className="hidden md:block">
            <DropdownMenu />
          </div>
          <div className="block md:hidden">
            <MobileDrawer />
          </div>
        </div>

        <div className="flex items-center">
          {isHomepage ? (
            <div className="flex items-center gap-1 sm:gap-2 text-dark">
              <span className="hidden sm:inline text-[13px]">
                Let&rsquo;s Build the Future of Marketing Together!
              </span>
              <span className="inline sm:hidden text-[10px] opacity-80">
                Build the Future Together!
              </span>
              <ChevronRight size={14} className="hidden xs:block opacity-50" />
              <Link
                href="/contact-me"
                className="text-[11px] md:text-[13px] font-bold tracking-tighter sm:tracking-wide hover:underline whitespace-nowrap"
              >
                CONTACT ME
              </Link>
            </div>
          ) : (
            <Link href="/" className="transition-opacity hover:opacity-80 flex items-center relative z-10 -mb-[27px] md:-mb-[22px]">
              <Image
                src="/svg/Portfolio-smallVersion.svg"
                alt="Anahita Mouni — Portfolio"
                width={200}
                height={60}
                className="h-12 object-contain w-[150px] md:w-[200px]"
                priority
              />
            </Link>
          )}
        </div>

      </div>
    </header>
  );
};

export default TopBar;