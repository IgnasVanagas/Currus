import { useEffect } from "react";
export const useSectionObserver = (sectionIds, onSectionChange) => {
    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter((section) => Boolean(section));
        if (sections.length === 0) {
            return;
        }
        const observer = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            if (visible[0]?.target.id) {
                onSectionChange(visible[0].target.id);
            }
        }, {
            rootMargin: "-40% 0px -40% 0px",
            threshold: [0.25, 0.5, 0.75]
        });
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [sectionIds, onSectionChange]);
};
