import { motion } from "framer-motion";
import { GradientTag } from "@components/GradientTag";
import { AnimatedSection } from "@components/AnimatedSection";
import { StatsPanel } from "@components/StatsPanel";
import { IconBadge } from "@components/IconBadge";
import { PageLayout } from "@layouts/PageLayout";
import {
  downloadLink,
  furnitureContent,
  type Assurance,
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

export const FurnitureManufacturingPage = () => (
  <PageLayout downloadLabel={downloadLink.label} downloadHref={downloadLink.href}>
    <section id={furnitureContent.hero.id} className="hero-section">
      <div className="hero-media" style={{ backgroundImage: `url(${furnitureContent.hero.image})` }} />
      <div className="container hero-content">
        <GradientTag>{furnitureContent.hero.eyebrow}</GradientTag>
        <motion.h1 initial={fadeIn.hidden} animate={fadeIn.visible} transition={{ duration: 0.6 }}>
          {furnitureContent.hero.title}
        </motion.h1>
        <motion.p
          className="hero-lead"
          initial={fadeIn.hidden}
          animate={fadeIn.visible}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {furnitureContent.hero.description}
        </motion.p>
        <div className="hero-cta">
          {furnitureContent.hero.actions.map((action: CallToAction) => {
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
        <StatsPanel stats={furnitureContent.hero.stats} />
      </div>
    </section>

    <AnimatedSection id="sprendimai" className="section section-grid">
      <header className="section-header">
        <GradientTag>Tikslus verslo fokusas</GradientTag>
        <h2>Kodėl Currus Baldai</h2>
        <p>
          Sujungiame strategiją, dizainą ir gamybą vienoje komandoje – todėl projektai juda sparčiau, o
ty klientų patirtys tampa konkurenciniu pranašumu.
        </p>
      </header>
      <div className="grid grid-3">
  {furnitureContent.highlights.map((item: Highlight) => (
          <article key={item.title} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection id="paslaugos" className="section section-dark">
      <header className="section-header">
        <GradientTag>Pilnas gamybos ciklas</GradientTag>
        <h2>Paslaugos</h2>
        <p>
          Nuo pirmos konsultacijos iki garantinės priežiūros – esame atsakingi už kiekvieną baldo gyvavimo etapą.
        </p>
      </header>
      <div className="grid grid-3">
  {furnitureContent.services.map((service: Service) => (
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
        <GradientTag>Pasitikrinę vertę</GradientTag>
        <h2>Parinkti projektai</h2>
        <p>Turime patirties su biurų, viešbučių ir mažmeninės prekybos erdvėmis.</p>
      </header>
      <div className="projects">
  {furnitureContent.projects.map((project: Project) => (
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
        <GradientTag>Aiškūs žingsniai</GradientTag>
        <h2>Procesas</h2>
        <p>Transparanti gamybos eiga leidžia komandai planuoti resursus ir terminus be netikėtumų.</p>
      </header>
      <div className="timeline">
  {furnitureContent.process.map((step: ProcessStep) => {
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
        <GradientTag>Kokybės garantijos</GradientTag>
        <h2>Ką gaunate dar?</h2>
      </header>
      <div className="grid grid-3">
  {furnitureContent.assurance.map((item: Assurance) => (
          <article key={item.title} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection id={furnitureContent.contact.id} className="section contact-section">
      <div className="contact-card">
        <header>
          <GradientTag>Susisiekite</GradientTag>
          <h2>{furnitureContent.contact.title}</h2>
          <p>{furnitureContent.contact.description}</p>
        </header>
        <div className="contact-details">
          <div>
            <span className="contact-label">Kontaktinis asmuo</span>
            <p className="contact-name">{furnitureContent.contact.advisor.name}</p>
            <p className="contact-role">{furnitureContent.contact.advisor.role}</p>
          </div>
          <div className="contact-actions">
            <a className="btn btn-secondary" href={`tel:${furnitureContent.contact.advisor.phone}`}>
              Skambinti {furnitureContent.contact.advisor.phone}
            </a>
            <a className="btn btn-ghost" href={`mailto:${furnitureContent.contact.advisor.email}`}>
              Rašyti el. laišką
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </PageLayout>
);

export default FurnitureManufacturingPage;
