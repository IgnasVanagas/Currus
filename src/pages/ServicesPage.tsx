import { PageLayout } from "@layouts/PageLayout";
import { downloadLink } from "@data/content";

const serviceSections = [
  {
    id: "baldu-dizainas",
    title: "Baldų dizainas ir projektavimas",
    summary:
      "Kuriame individualius baldų sprendimus nuo eskizo iki gamybos brėžinių, padedančius užtikrinti ergonomiką ir estetiką.",
    bullets: [
      "Erdvės analizė ir koncepcijų dirbtuvės",
      "3D vizualizacijos kartu su medžiagų parinkimu",
      "Gamybos dokumentacijos paruošimas"
    ]
  },
  {
    id: "interjero-dizainas",
    title: "Interjero dizainas",
    summary:
      "Padedame verslui kurti funkcionalesnes darbo ir klientų aptarnavimo erdves, pritaikytas konkretiems scenarijams.",
    bullets: [
      "Verslo tikslų ir lankytojų srautų išgryninimas",
      "Medžiagų, spalvų ir apšvietimo deriniai",
      "Techninių planų ir montavimo priežiūra"
    ]
  },
  {
    id: "laminuotos-plokstes",
    title: "Laminuotos plokštės pjovimas ir kantavimas",
    summary:
      "Moderni įranga leidžia tiksliai ir greitai apdirbti plokštes, užtikrinant nepriekaištingą paviršių kokybę.",
    bullets: [
      "Nestandartinių formų ir serijinių užsakymų gamyba",
      "0,3 mm tikslumo frezavimas ir gręžimas",
      "ABS, PVC ir faneruotų kraštų klijavimas"
    ]
  }
];

export const ServicesPage = () => (
  <PageLayout downloadLabel={downloadLink.label} downloadHref={downloadLink.href}>
    <section className="page-hero">
      <div className="container narrow">
        <h1>Paslaugos</h1>
        <p>
          Esame pasiruošę prisidėti tiek prie viso baldų projekto, tiek prie konkretaus gamybos etapo. Toliau
          rasite svarbiausias kompetencijas ir tai, kaip galime padėti jūsų komandai.
        </p>
      </div>
    </section>

    <section className="section-stack">
      <div className="container">
        {serviceSections.map((section) => (
          <article key={section.id} id={section.id} className="feature-block">
            <header>
              <h2>{section.title}</h2>
              <p>{section.summary}</p>
            </header>
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default ServicesPage;
