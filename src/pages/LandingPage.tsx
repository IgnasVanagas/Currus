import { Link } from "react-router-dom";
import { PageLayout } from "@layouts/PageLayout";
import { GradientTag } from "@components/GradientTag";
import { downloadLink } from "@data/content";

const heroImage =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80";
const atelierImage =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80";
const materialsImage =
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80";
const workshopImage =
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80";
const finishingImage =
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80";
const detailImage =
  "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?auto=format&fit=crop&w=1400&q=80";

export const LandingPage = () => (
  <PageLayout downloadLabel={downloadLink.label} downloadHref={downloadLink.href} mainClassName="landing-main">
    <section className="hero-section about-hero">
      <div className="hero-media" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="container">
        <div className="hero-content">
          <GradientTag>25 metų patirtis</GradientTag>
          <h1>Kiekvienas baldų projektas yra unikalus</h1>
          <p>
            UAB „Currus“ yra aukštos kokybės baldų gamintojas, pasitelkiantis naujausias technologijas ir kruopščiai
            atrinktas medžiagas, kad atitiktų aukščiausius Jūsų lūkesčius. Mūsų komanda jau daugiau kaip du dešimtmečius
            kuria individualius sprendimus, kurie atspindi užsakovo stilių ir poreikius.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={downloadLink.href} download>
              {downloadLink.label}
            </a>
            <Link className="btn btn-secondary" to="/kontaktai">
              Susisiekti
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="section-stack about-overview">
      <div className="container about-columns">
        <article className="about-copy">
          <h2>Kūrybingas požiūris į nestandartinius baldus</h2>
          <p>
            Turėdami 25 metų patirtį, esame pasiryžę padėti įgyvendinti Jūsų viziją ir pasiūlyti nestandartinius kietuosius
            baldus namams ar verslui. Dirbame glaudžiai su klientais, kad kiekvienas projektas harmoningai įsilietų į erdvę
            ir atskleistų individualų charakterį.
          </p>
          <p>
            Pasitelkę naujausias technologijas ir patikimų tiekėjų bazę, projektuojame ir gaminame miegamojo, virtuvės,
            biuro, prieškambario, vaikų kambario, drabužines, svetainės bei prekybos įrangos baldus. Jei turite
            nestandartinę erdvę, mūsų dizaineriai parengs sprendimą nuo eskizo iki montavimo.
          </p>
        </article>
        <figure className="about-image about-image--offset-right">
          <img src={atelierImage} alt="Modernus interjeras su individualiais baldais" />
        </figure>
      </div>
    </section>

    <section className="section-stack about-materials">
      <div className="container about-materials-layout">
        <figure className="about-materials-media about-materials-media--offset-left">
          <img src={finishingImage} alt="Baldų apdailos detalės ir kruopštus parinkimas" />
        </figure>
        <div className="about-materials-card">
          <header>
            <h2>Medžiagos, kurios atlaiko laiką</h2>
            <p>
              Patikėkite mums medžiagų ir apdailų pasirinkimą – pasiūlysime madingus ir praktiškus derinius, kurie tiks Jūsų
              erdvei. Dirbame tik su patikrintais partneriais, todėl galite būti tikri dėl kokybės.
            </p>
          </header>
          <ul className="about-material-list">
            <li>Laminuotos medžio drožlių plokštės ir aukštos kokybės MDF</li>
            <li>Natūralus medis, faneruotės bei dažytos apdailos</li>
            <li>Stiklo, metalo ir akmens deriniai, suteikiantys išskirtinumo</li>
            <li>Akcentinės detalės ir furnitūra, pritaikyta intensyviam naudojimui</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="section-stack about-gallery">
      <div className="container about-gallery-grid">
        <figure className="about-gallery-item about-gallery-item--offset-left">
          <img src={materialsImage} alt="Baldų gamybos detalės ir kokybiškos medžiagos" />
          <figcaption>Detalės gimsta nuo kruopščiai atrinktų medžiagų ir preciziško apdirbimo.</figcaption>
        </figure>
        <figure className="about-gallery-item about-gallery-item--offset-right">
          <img src={workshopImage} alt="Baldų dirbtuvės su modernia įranga" />
          <figcaption>Moderni įranga leidžia tiksliai išpildyti nestandartinių formų užduotis.</figcaption>
        </figure>
        <figure className="about-gallery-item about-gallery-item--stacked">
          <img src={detailImage} alt="Dizaino eskizai ir rankų darbo akcentai" />
          <figcaption>Kūrybiniai eskizai ir rankų darbo detalės suteikia projektams išskirtinumo.</figcaption>
        </figure>
      </div>
    </section>

    <section className="section-stack about-outro">
      <div className="container about-outro-card">
        <h2>Patikimi partneriai visoje Lietuvoje ir už jos ribų</h2>
        <p>
          Sukaupta patirtis leidžia nestandartiniams gaminiams pritaikyti racionalius sprendimus – maksimaliai išnaudoti
          erdvę, užtikrinti funkcionalumą ir estetiką. Aptarnaujame klientus visoje Lietuvoje bei užsienyje, todėl
          pasirūpinsime projektu nuo pirmosios konsultacijos iki galutinio montavimo.
        </p>
        <div className="hero-cta">
          <Link className="btn btn-primary" to="/paslaugos">
            Peržiūrėti paslaugas
          </Link>
          <Link className="btn btn-secondary" to="/kontaktai">
            Kviesti konsultaciją
          </Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default LandingPage;
