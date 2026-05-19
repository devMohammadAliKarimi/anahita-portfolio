import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-taupe pt-6">
      <div className="flex items-center justify-between rounded-t-3xl bg-body px-10 py-3">
        <p className="text-[10px] xs:text-[11px] sm:text-[12px] md:text-sm text-white/80">
          © 2026 by Anahita Mouni
        </p>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-[10px] xs:text-[11px] sm:text-[12px] md:text-sm text-white/80">
            Follow me
          </span>

          <a
            href="https://www.linkedin.com/in/anahita-mouni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={25}
              height={25}
              alt="LinkedIn"
              src="/svg/LinkedIn.svg"
              className="w-[12px] xs:w-[15px] sm:w-[20px] md:w-[25px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}