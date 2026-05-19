import type { Metadata } from "next";
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsList from '@/components/projects/ProjectsList';

export const metadata: Metadata = {
    title: "Projects — Anahita Mouni",
    description: "Selected marketing and strategy projects by Anahita Mouni, focused on audience engagement, data-driven growth, and measurable results.",
};

const ProjectsPage = () => {
    return (
        <>
            <ProjectsHero />
            <ProjectsList />
        </>
    );
};

export default ProjectsPage;