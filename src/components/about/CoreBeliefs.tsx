import { beliefs } from '@/lib/data';
import DecoratedSection from '../DecoratedSection';

const CoreBeliefs = () => {
    return (
        <DecoratedSection className="border-t-2 border-white/50" showLine={false}>
            <div className="flex flex-col gap-8 mx-auto max-w-3xl px-6 md:px-10 py-12 md:py-16">

                <h2 className="text-center xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white w-full">
                    My Core Beliefs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-3 mx-auto w-fit">
                    {beliefs.map((belief) => (
                        <div key={belief.id} className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-dark/70 shrink-0" />
                            <span className="text-dark font-light text-sm md:text-xl">
                                {belief.text}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </DecoratedSection>
    );
};

export default CoreBeliefs;