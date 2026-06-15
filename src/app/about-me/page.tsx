import type { Metadata } from "next";
import Approach from '@/components/about/Approach';
import BeyondMarketing from '@/components/about/BeyondMarketing';
import CoreBeliefs from '@/components/about/CoreBeliefs';
import Introduction from '@/components/about/Introduction';


export const metadata: Metadata = {
    title: "About Me | Anahita Mouni",
    description: "Marketer and creative strategist with a background in graphic design...",
};

const AboutMePage = () => {
    return (
        <>
            <Introduction />
            <Approach />
            <CoreBeliefs />
            <BeyondMarketing />
        </>
    );
};

export default AboutMePage;