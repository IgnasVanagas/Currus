import { motion } from "framer-motion";
import { GradientTag } from "@components/GradientTag";
import { AnimatedSection } from "@components/AnimatedSection";
import { StatsPanel } from "@components/StatsPanel";
import { IconBadge } from "@components/IconBadge";
import { PageLayout } from "@layouts/PageLayout";
import {
  downloadLink,
  partsContent,
  type Assurance,
  type Example,
  type CallToAction,
  type Highlight,
  type ProcessStep,
  type Project,
  type ProjectMetric,
  type Service
} from "../data/content";
import { getProcessIcon } from "@components/ProcessIcon";

const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

export const PartsManufacturingPage = () => (
  <PageLayout downloadLabel={downloadLink.label} downloadHref={downloadLink.href}>
    <section id={partsContent.hero.id} className="hero-section">
      <div className="hero-media" style={{ backgroundImage: `url(${partsContent.hero.image})` }} />
      <div className="container hero-content">
        <GradientTag>{partsContent.hero.eyebrow}</GradientTag>
        <motion.h1 initial={fadeIn.hidden} animate={fadeIn.visible} transition={{ duration: 0.6 }}>
          {partsContent.hero.title}
        </motion.h1>
        <motion.p
          className="hero-lead"
          initial={fadeIn.hidden}
          animate={fadeIn.visible}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {partsContent.hero.description}
        </motion.p>
        <div className="hero-cta">
          {partsContent.hero.actions.map((action: CallToAction) => {
            if (action.href) {
              return (
                <a
                  key={action.label}
                  className={`btn btn-${action.variant}`}
                  href={action.href}
                  download={action.variant === "primary"}
                >
                  {action.label}
                </a>
              );
            }

            return (
              <button
                key={action.label}
                className={`btn btn-${action.variant}`}
                onClick={() => {
                  if (!action.targetId) return;
                  const section = document.getElementById(action.targetId);
                  section?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {action.label}
              </button>
            );
          })}
        </div>
        <StatsPanel stats={partsContent.hero.stats} />
      </div>
    </section>

    <AnimatedSection id="kompetencijos" className="section section-grid">
      <header className="section-header">
        <GradientTag>Gamybos lankstumas</GradientTag>
        <h2>Kodėl partneriai renkasi mus</h2>
        <p>
          Tikslūs terminai, aiškus atsekamumas ir gamybos pajėgumai leidžia integruotis į jūsų tiekimo grandinę nesustabdant gamybos.
        </p>
      </header>
      <div className="grid grid-3">
  {partsContent.highlights.map((item: Highlight) => (
          <article key={item.title} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection id="paslaugos" className="section section-dark">
      <header className="section-header">
        <GradientTag>Technologijos</GradientTag>
        <h2>Gamybos pajėgumai</h2>
        <p>
          Naudojame pažangias technologijas ir medžiagas, kad detalės būtų identiškos kiekvieną kartą.
        </p>
      </header>
      <div className="grid grid-3">
  {partsContent.services.map((service: Service) => (
          <article key={service.title} className="card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.points.map((point: string) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection id="projektai" className="section">
      <header className="section-header">
        <GradientTag>Realūs pavyzdžiai</GradientTag>
        <h2>Įgyvendinti projektai</h2>
        <p>Pritaikome gamybą tiek serijiniams, tiek išskirtiniams užsakymams.</p>
      </header>
      <div className="projects">
  {partsContent.projects.map((project: Project) => (
          <article key={project.title} className="project-card">
            <div className="project-media" style={{ backgroundImage: `url(${project.image})` }}>
              <span className="sr-only">{project.imageAlt}</span>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-metrics">
                {project.metrics.map((metric: ProjectMetric) => (
                  <IconBadge key={metric.label}>
                    {`${metric.label}: ${metric.value}`}
                  </IconBadge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection id="procesas" className="section section-timeline">
      <header className="section-header">
        <GradientTag>Proceso valdymas</GradientTag>
        <h2>Kaip dirbame</h2>
        <p>Aptariame specifikaciją, optimizuojame gamybą ir pasirūpiname logistika iki pat montavimo vietos.</p>
      </header>
      <div className="timeline">
  {partsContent.process.map((step: ProcessStep) => {
          const Icon = getProcessIcon(step.icon);
          return (
            <div key={step.title} className="timeline-step">
              <div className="timeline-icon">
                <Icon size={28} />
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </AnimatedSection>

    <AnimatedSection id="garantijos" className="section section-dark">
      <header className="section-header">
        <GradientTag>Kokybės kontrolė</GradientTag>
        <h2>Ką užtikriname</h2>
      </header>
      <div className="grid grid-3">
  {partsContent.assurance.map((item: Assurance) => (
          <article key={item.title} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection id="katalogas" className="section">
            <header className="section-header">
              <GradientTag>Katalogas</GradientTag>
              <h2>Mūsų gaminamos baldų detalės</h2>
            </header>
            <div className="projects">
      {partsContent.examples.map((examples: Example) => (
              <article key={examples.title} className="project-card">
                <div className="project-media" style={{ backgroundImage: `url(${examples.image})` }}>
                </div>
                
                <div className="example-body">
                  <h3>{examples.title}</h3>
                  <div className="example-metrics">
                    <ul>
                  {examples.points.map((point: string) => (
                    <li key={point}>{point}</li>
                  ))}
                    </ul>               
                  </div>
                </div>
              </article>
            ))}
          </div>
    </AnimatedSection>

    <AnimatedSection id={partsContent.contact.id} className="section contact-section">
      <div className="contact-card">
        <header>
          <GradientTag>Susisiekite</GradientTag>
          <h2>{partsContent.contact.title}</h2>
          <p>{partsContent.contact.description}</p>
        </header>
        <div className="contact-details">
          <div>
            <span className="contact-label">Kontaktinis asmuo</span>
            <p className="contact-name">{partsContent.contact.advisor.name}</p>
            <p className="contact-role">{partsContent.contact.advisor.role}</p>
          </div>
          <div className="contact-actions">
            <a className="btn btn-secondary" href={`tel:${partsContent.contact.advisor.phone}`}>
              Skambinti {partsContent.contact.advisor.phone}
            </a>
            <a className="btn btn-ghost" href={`mailto:${partsContent.contact.advisor.email}`}>
              Rašyti el. laišką
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </PageLayout>
);

export default PartsManufacturingPage;
