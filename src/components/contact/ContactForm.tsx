"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const animatedWords = "I'd like to hear from you!".split(" ");
const subWords = "Please use the contact form if you have any questions or if you would simply like to say hello.".split(" ");

const wordVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.25, ease: "easeOut" },
    }),
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = () => {
        // TODO: connect to API route
        console.log(formData);
    };

    const inputClass = "w-full bg-transparent border-[3px] border-dark/40 rounded-md px-3 py-2 text-dark text-sm md:text-base placeholder-dark/30 focus:outline-none focus:border-dark/70 transition-colors";

    return (
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">

            {/* Left */}
            <div className="flex flex-col gap-4 md:flex-1">
                <h3 className="text-white font-semibold text-2xl md:text-4xl leading-snug">
                    {animatedWords.map((word, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={wordVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-block mr-1.5"
                        >
                            {word}
                        </motion.span>
                    ))}
                </h3>
                <p className="text-dark/60 font-light text-sm md:text-xl leading-relaxed max-w-[345px]">
                    {subWords.map((word, i) => (
                        <motion.span
                            key={i}
                            custom={animatedWords.length + i}
                            variants={wordVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-block mr-1"
                        >
                            {word}
                        </motion.span>
                    ))}
                </p>
            </div>

            {/* Right - Form */}
            <div className="flex flex-col gap-5 w-full md:flex-1">

                {/* First + Last Name */}
                <div className="flex gap-4">
                    <div className="flex flex-col gap-1.5 flex-1">
                        <label className="text-dark/70 text-xs md:text-sm">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={inputClass}
                        />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                        <label className="text-dark/70 text-xs md:text-sm">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={inputClass}
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-dark/70 text-xs md:text-sm">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-dark/70 text-xs md:text-sm">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`${inputClass} resize-none`}
                    />
                </div>

                <div className="flex justify-end">
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleSubmit}
                        className="mt-6 inline-flex items-center bg-body rounded-md font-medium 
                        shadow-sm transition-colors hover:text-highlight whitespace-nowrap 
                        px-2.5 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-[11px] sm:text-[12px] 
                        lg:text-[13px] text-white w-full md:w-20 justify-center"
                    >
                        Send
                    </motion.button>
                </div>

            </div>
        </div >
    );
};

export default ContactForm;