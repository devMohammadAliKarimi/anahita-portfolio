import type { Metadata } from "next";
import CharlesRiverHero from "@/components/projects/project1/CharlesRiverHero";
import CharlesRiverAudience from "@/components/projects/project1/CharlesRiverAudience";
import CharlesRiverFunnel from "@/components/projects/project1/CharlesRiverFunnel";
import CharlesRiverBeforeAfter from "@/components/projects/project1/CharlesRiverBeforeAfter";
import CharlesRiverVideo from "@/components/projects/project1/CharlesRiverVideo";

export const metadata: Metadata = {
    title: "From Audience Insight to Engagement — Anahita Mouni",
    description: "Marketing strategy focused on audience segmentation and user journey design.",
};

const CharlesRiverPage = () => {
    return (
        <>
            <CharlesRiverHero />
            <CharlesRiverAudience />
            <CharlesRiverFunnel />
            <CharlesRiverBeforeAfter />
            <CharlesRiverVideo />
        </>
    );
};

export default CharlesRiverPage;