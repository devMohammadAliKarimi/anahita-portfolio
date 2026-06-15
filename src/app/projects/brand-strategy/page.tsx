import type { Metadata } from "next";
import FirmEHero from "@/components/projects/project4/FirmEHero";
import FirmEImages from "@/components/projects/project4/FirmEImages";

export const metadata: Metadata = {
    title: "Automotive Brand Strategy Simulation | Anahita Mouni",
    description: "A competitive marketing and branding simulation where teams shape brand positioning and compete for market leadership.",
};

const FirmEPage = () => {
    return (
        <>
            <FirmEHero />
            <FirmEImages />
        </>
    );
};

export default FirmEPage;