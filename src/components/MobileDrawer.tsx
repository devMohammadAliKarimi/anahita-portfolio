"use client";

import { useState, useEffect } from "react";
import { MoreHorizontal, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { menuItems } from "@/lib/data";
import { cn } from "@/lib/cn";
import Link from "next/link";
import Image from "next/image";

const MobileDrawer = () => {
    const [open, setOpen] = useState(false);

    // برای اینکه وقتی منو بازه، پشت صفحه اسکرول نشه
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [open]);

    // انیمیشن پس‌زمینه تیره
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    // انیمیشن بالا اومدن منو از کف صفحه
    const drawerVariants = {
        hidden: { y: "100%" },
        visible: {
            y: 0,
            transition: { type: "spring", damping: 25, stiffness: 220 }
        },
        exit: {
            y: "100%",
            transition: { ease: "easeInOut", duration: 0.3 }
        },
    };

    // انیمیشن دونه دونه ظاهر شدن آیتم‌های منو
    const listVariants = {
        visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.4 } },
    };

    return (
        <>
            <button
                type="button"
                aria-label="Open mobile menu"
                onClick={() => setOpen(true)}
                className={cn(
                    "flex h-8 w-8 items-center justify-center rounded text-dark/70",
                    "transition-colors hover:bg-black/5 hover:text-dark"
                )}
            >
                <MoreHorizontal size={28} strokeWidth={2.5} />
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        {/* لایه تیره پس‌زمینه */}
                        <motion.div
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
                        />

                        {/* دراور اصلی که از پایین باز میشه */}
                        <motion.div
                            variants={drawerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed inset-x-0 bottom-0 z-50 flex h-[92vh] w-full flex-col rounded-t-[32px] bg-dark p-8 text-white shadow-2xl"
                        >
                            {/* هدر منو */}
                            <div className="flex items-center justify-between border-b border-white/10 pb-6">
                                <span className="text-sm font-medium tracking-widest text-white/40 uppercase">
                                    Navigation
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-white/10 active:scale-95"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <motion.ul
                                variants={listVariants}
                                className="mt-12 flex flex-col gap-6"
                            >
                                {menuItems.map((item) => (
                                    <motion.li key={item.title} variants={itemVariants}>
                                        <Link
                                            href={item.url}
                                            onClick={() => setOpen(false)}
                                            className="inline-block text-2xl font-bold tracking-tight text-white/90 transition-colors hover:text-highlight active:opacity-70"
                                        >
                                            {item.title}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            {/* فوتر منو */}
                            <div className="mt-auto flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-sm text-white/40">
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
                                <p>© 2026 by Anahita Mouni</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default MobileDrawer;