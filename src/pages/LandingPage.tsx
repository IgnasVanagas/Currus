import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GradientTag } from "@components/GradientTag";
import { PageLayout } from "@layouts/PageLayout";
import { brand, downloadLink, landingContent } from "@data/content";

export const LandingPage = () => (
  <PageLayout downloadLabel={downloadLink.label} downloadHref={downloadLink.href}>
    <section id="hero" className="landing-hero">
      <div className="container">
        <GradientTag>{landingContent.eyebrow}</GradientTag>
        <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {landingContent.title}
        </motion.h1>
        <motion.p
          className="landing-lead"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {landingContent.description}
        </motion.p>
        <div className="landing-options">
          {landingContent.options.map((option, index) => (
            <Link key={option.id} to={option.path} className="landing-card">
              <div className="landing-card-media" style={{ backgroundImage: `url(${option.image})` }} />
              <div className="landing-card-body">
                <span className="landing-card-index">0{index + 1}</span>
                <h2>{option.title}</h2>
                <p>{option.description}</p>
                <ul>
                  {option.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <span className="landing-card-cta">Peržiūrėti kryptį →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="landing-contact">
      <div className="container">
        <div>
          <h3>Susisiekime</h3>
          <p>
            Mielai papasakosime apie mūsų procesus ir parodysime, kaip gali atrodyti jūsų projektas ar detalės.
          </p>
        </div>
        <div className="landing-contact-details">
          <a href={`tel:${brand.contact.phone}`}>{brand.contact.phone}</a>
          <a href={`mailto:${brand.contact.email}`}>{brand.contact.email}</a>
          <span>{brand.contact.address}</span>
          <span>{brand.contact.workHours}</span>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default LandingPage;
