import type { Metadata } from "next";
import DeisHacksHero from "@/components/projects/project2/DeisHacksHero";
import DeisHacksImages from "@/components/projects/project2/DeisHacksImages";

export const metadata: Metadata = {
    title: "Driving Impact Through Innovation — Anahita Mouni",
    description: "Co-developed a nonprofit challenge at DeisHacks 2026, earning Best Non-Technical Solution.",
};

const DeisHacksPage = () => {
    return (
        <>
            <DeisHacksHero />
            <DeisHacksImages />
        </>
    );
};

export default DeisHacksPage;