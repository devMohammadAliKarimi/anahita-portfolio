import type { Metadata } from "next";
import RivianHero from "@/components/projects/project3/RivianHero";
import RivianImages from "@/components/projects/project3/RivianImages";

export const metadata: Metadata = {
    title: "Driving Growth Through Data and Strategy | Anahita Mouni",
    description: "Market analysis and data-driven strategies for Rivian's growth.",
};

const RivianPage = () => {
    return (
        <>
            <RivianHero />
            <RivianImages />
        </>
    );
};

export default RivianPage;