import type { Metadata } from "next";
import ResumeHero from "@/components/resume/ResumeHero";
import ResumeEducation from "@/components/resume/ResumeEducation";
import ResumeExperience from "@/components/resume/ResumeExperience";
import ResumeCertification from "@/components/resume/ResumeCertification";
import ResumeTechnical from "@/components/resume/ResumeTechnical";
import ResumeCoursework from "@/components/resume/ResumeCoursework";

export const metadata: Metadata = {
    title: "Resume / CV — Anahita Mouni",
    description: "MBA candidate specializing in Marketing with 10+ years of experience in creative environments, brand development, and audience engagement.",
};

const ResumeCVPage = () => {
    return (
        <>
            <ResumeHero />
            <ResumeEducation />
            <ResumeExperience />
            <ResumeCertification />
            <ResumeTechnical />
            <ResumeCoursework />
        </>
    );
};

export default ResumeCVPage;