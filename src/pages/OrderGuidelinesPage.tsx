import { PageLayout } from "@layouts/PageLayout";
import { downloadLink } from "@data/content";

const steps = [
  {
    title: "1. Pasiruoškite specifikaciją",
    details:
      "Atsisiųskite mūsų Excel šabloną ir užpildykite matmenis, medžiagas bei specialius reikalavimus. Jei reikia, mielai padedame tai padaryti kartu nuotoliniu skambučiu."
  },
  {
    title: "2. Pasidalinkite vizualine medžiaga",
    details:
      "Pridėkite planus, eskizus ar nuotraukas, kurios padeda suprasti erdvę. Kuo daugiau konteksto turėsime, tuo tikslesnį pasiūlymą parengsime."
  },
  {
    title: "3. Suderinkime terminus ir sąmatas",
    details:
      "Parengiame preliminarią sąmatą ir gamybos grafiką. Aptariame galimas alternatyvas, optimizacijas bei logistikos sprendimus."
  },
  {
    title: "4. Gamybos startas",
    details:
      "Patvirtinus sąlygas, pradedame gamybą, reguliariai informuojame apie eigą ir pasirūpiname montavimu bei kokybės patikra."
  }
];

export const OrderGuidelinesPage = () => (
  <PageLayout downloadLabel={downloadLink.label} downloadHref={downloadLink.href}>
    <section className="page-hero">
      <div className="container narrow">
        <h1>Kaip pateikti užsakymą?</h1>
        <p>
          Nesvarbu, ar turite parengtą projektą, ar tik idėją – žingsnis po žingsnio padedame paruošti aiškią
          specifikaciją ir suplanuoti gamybą.
        </p>
      </div>
    </section>

    <section className="section-stack">
      <div className="container">
        <ol className="step-list">
          {steps.map((step) => (
            <li key={step.title}>
              <h2>{step.title}</h2>
              <p>{step.details}</p>
            </li>
          ))}
        </ol>
        <div className="callout">
          <h3>Pradėkite nuo šablono</h3>
          <p>
            Mūsų specifikacijos šablonas padeda greitai suvesti būtiną informaciją. Įkelkite failą ir kolegoms –
            taip visi dirbs su tuo pačiu dokumentu.
          </p>
          <a className="button" href={downloadLink.href} download>
            Atsisiųsti Excel šabloną
          </a>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default OrderGuidelinesPage;
