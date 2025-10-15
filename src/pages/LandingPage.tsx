import { Link } from "react-router-dom";
import { PageLayout } from "@layouts/PageLayout";
import { GradientTag } from "@components/GradientTag";
import { landingContent } from "@data/content";

export const LandingPage = () => (
  <PageLayout mainClassName="landing-main">
    <section className="landing-hero">
      <div className="container">
        <header className="landing-header">
          {landingContent.eyebrow ? <GradientTag>{landingContent.eyebrow}</GradientTag> : null}
          {landingContent.title ? <h1>{landingContent.title}</h1> : null}
          {landingContent.description ? <p className="landing-lead">{landingContent.description}</p> : null}
        </header>
        <div className="landing-options">
          {landingContent.options.map((option) => (
            <article key={option.id} className="landing-card">
              <div className="landing-card-media" style={{ backgroundImage: `url(${option.image})` }} />
              <div className="landing-card-body">
                <h2>{option.title}</h2>
                {option.description ? <p>{option.description}</p> : null}
                {option.bullets?.length ? (
                  <ul className="landing-card-points">
                    {option.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                <Link className="landing-card-cta" to={option.path}>
                  {option.ctaLabel ?? "Pasirinkti"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default LandingPage;
