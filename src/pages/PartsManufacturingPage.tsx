import { FormEvent } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { AnimatedSection } from "@components/AnimatedSection";
import { StatsPanel } from "@components/StatsPanel";
import { IconBadge } from "@components/IconBadge";
import { PageLayout } from "@layouts/PageLayout";
import {
  downloadLink,
  partsContent,
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

export const PartsManufacturingPage = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Užklausa išsiųsta. Susisieksime artimiausiu metu.");
    event.currentTarget.reset();
  };

  return (
    <PageLayout downloadLabel={downloadLink.label} downloadHref={downloadLink.href}>
      <section id={partsContent.hero.id} className="hero-section parts-hero">
        <div className="hero-media" style={{ backgroundImage: `url(${partsContent.hero.image})` }} />
        <div className="container hero-content parts-hero-content">
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

      <AnimatedSection id="kompetencijos" className="section parts-highlights">
        <header className="section-header">
          <h2>Kodėl partneriai renkasi mus</h2>
          <p>Tikslūs terminai, atsekamumas ir pajėgumai padeda tapti jūsų tiekimo grandinės dalimi.</p>
        </header>
        <div className="parts-highlight-grid">
          {partsContent.highlights.map((item: Highlight) => (
            <article key={item.title} className="parts-highlight-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="paslaugos" className="section parts-capabilities">
        <header className="section-header">
          <h2>Gamybos pajėgumai</h2>
          <p>Automatizuotos linijos, robotizuotas dažymas ir sertifikuotos medžiagos – kiekvienai partijai.</p>
        </header>
        <div className="parts-capability-grid">
          {partsContent.services.map((service: Service) => (
            <article key={service.title} className="parts-capability-card">
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

      <AnimatedSection id="projektai" className="section parts-showcase">
        <header className="section-header">
          <h2>Įgyvendinti projektai</h2>
          <p>Nuo mažų serijų iki didelio masto užsakymų – gamyba prisitaiko prie jūsų grafiko.</p>
        </header>
        <div className="parts-showcase-grid">
          {partsContent.projects.map((project: Project) => (
            <article key={project.title} className="parts-showcase-card">
              <div className="parts-showcase-media" style={{ backgroundImage: `url(${project.image})` }}>
                <span className="sr-only">{project.imageAlt}</span>
              </div>
              <div className="parts-showcase-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="parts-showcase-tags">
                  {project.metrics.map((metric: ProjectMetric) => (
                    <IconBadge key={metric.label}>{`${metric.label}: ${metric.value}`}</IconBadge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="procesas" className="section section-timeline parts-process">
        <header className="section-header">
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

      <AnimatedSection id="garantijos" className="section section-dark parts-assurance">
        <header className="section-header">
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

      <AnimatedSection id={partsContent.contact.id} className="section parts-contact">
        <div className="parts-contact-wrapper">
          <div className="parts-contact-card">
            <header>
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

          <form className="parts-contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label className="input-field">
                <span>Vardas ir pavardė *</span>
                <input type="text" name="name" placeholder="Įrašykite savo vardą" required />
              </label>
              <label className="input-field">
                <span>Įmonė</span>
                <input type="text" name="company" placeholder="Įmonės pavadinimas (neprivaloma)" />
              </label>
              <label className="input-field">
                <span>El. paštas *</span>
                <input type="email" name="email" placeholder="vardas@imone.lt" required />
              </label>
              <label className="input-field">
                <span>Telefonas *</span>
                <input type="tel" name="phone" placeholder="+370 ..." required />
              </label>
            </div>
            <label className="input-field">
              <span>Užklausos detalės *</span>
              <textarea
                name="message"
                placeholder="Aprašykite detalių tipą, kiekius ar terminą"
                rows={6}
                required
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Siųsti užklausą
            </button>
          </form>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
};

export default PartsManufacturingPage;
