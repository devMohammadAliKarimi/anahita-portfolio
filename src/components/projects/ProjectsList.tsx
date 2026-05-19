import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import DecoratedSection from "../DecoratedSection";

const ProjectsList = () => {
    return (
        <DecoratedSection showLine={false}>
            <div className="mx-auto max-w-6xl px-6 md:px-16 py-8 md:py-12 flex flex-col gap-8 md:gap-10">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} {...project} />
                ))}
            </div>
        </DecoratedSection>
    );
};

export default ProjectsList;