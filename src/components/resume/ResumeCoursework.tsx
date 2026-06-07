import { courses } from "@/lib/data";
import DecoratedSection from "@/components/DecoratedSection";

const ResumeCoursework = () => {
    return (
        <DecoratedSection className="border-t-2 border-white/50" showLine={false}>
            <div className="mx-auto max-w-6xl px-6 md:px-16 py-8 md:py-12">
                <h2 className="text-white font-bold text-4xl md:text-6xl text-center w-full tracking-wide mb-4 md:mb-6">
                    Coursework
                </h2>
                <p className="text-dark/50 italic text-sm md:text-base mb-8 md:mb-10">
                    (MBA coursework focused on developing practical skills in marketing strategy, consumer insights, and data-driven decision-making.)
                </p>
                <div className="flex flex-col gap-6">
                    {courses.map((course) => (
                        <div key={course.name} className="border-b border-dark/10 pb-6 last:border-0 last:pb-0">
                            <p className="text-dark font-semibold text-base md:text-lg mb-1">{course.name}</p>
                            <p className="text-dark/60 font-light text-sm md:text-base leading-relaxed mb-1">
                                {course.description}
                            </p>
                            <p className="text-dark/50 text-sm md:text-base leading-relaxed">
                                <span className="font-medium text-dark/60">Takeaway:</span> {course.takeaway}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </DecoratedSection>
    );
};

export default ResumeCoursework;