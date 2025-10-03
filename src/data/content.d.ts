export type NavigationItem = {
    id: string;
    label: string;
};
export type Stat = {
    value: string;
    label: string;
};
export type StepIcon = "insights" | "design" | "build" | "care" | "logistics" | "quality" | "support";
export type CallToAction = {
    label: string;
    variant: "primary" | "secondary" | "ghost";
    href?: string;
    targetId?: string;
};
export type HeroContent = {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    stats: Stat[];
    actions: CallToAction[];
};
export type Highlight = {
    title: string;
    description: string;
};
export type Service = {
    title: string;
    description: string;
    points: string[];
};
export type ProjectMetric = {
    label: string;
    value: string;
};
export type Project = {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    metrics: ProjectMetric[];
};
export type ProcessStep = {
    title: string;
    description: string;
    icon: StepIcon;
};
export type Assurance = {
    title: string;
    description: string;
};
export type Advisor = {
    name: string;
    role: string;
    phone: string;
    email: string;
};
export type ContactBlock = {
    id: string;
    title: string;
    description: string;
    advisor: Advisor;
};
export type BusinessPageContent = {
    navItems: NavigationItem[];
    hero: HeroContent;
    highlights: Highlight[];
    services: Service[];
    projects: Project[];
    process: ProcessStep[];
    assurance: Assurance[];
    contact: ContactBlock;
};
export declare const brand: {
    name: string;
    tagline: string;
    contact: {
        phone: string;
        email: string;
        address: string;
        workHours: string;
    };
};
export declare const downloadLink: {
    label: string;
    href: string;
};
export declare const landingContent: {
    eyebrow: string;
    title: string;
    description: string;
    options: {
        id: string;
        title: string;
        description: string;
        path: string;
        image: string;
        bullets: string[];
    }[];
};
export declare const furnitureContent: BusinessPageContent;
export declare const partsContent: BusinessPageContent;
