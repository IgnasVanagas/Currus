import { PageLayout } from "@layouts/PageLayout";
import { brand } from "@data/content";

export const ContactPage = () => (
  <PageLayout>
    <section className="page-hero">
      <div className="container narrow">
        <h1>Kontaktai</h1>
        <p>
          Susisiekite dėl konsultacijos, projektų įkainojimo ar bendradarbiavimo. Atsakome per vieną darbo dieną ir
          parenkame tinkamiausią ekspertą jūsų užklausai.
        </p>
      </div>
    </section>

    <section className="section-stack">
      <div className="container contact-grid">
        <div className="contact-card">
          <h2>Pagrindiniai kontaktai</h2>
          <ul>
            <li>
              <span>El. paštas</span>
              <a href={`mailto:${brand.contact.email}`}>{brand.contact.email}</a>
            </li>
            <li>
              <span>Baldų gamyba</span>
              <a href={`tel:${brand.contact.productionPhone.replace(/[^+\d]/g, "")}`}>
                {brand.contact.productionPhone}
              </a>
            </li>
            <li>
              <span>Paslaugų užsakymai</span>
              <a href={`tel:${brand.contact.servicesPhone.replace(/[^+\d]/g, "")}`}>
                {brand.contact.servicesPhone}
              </a>
            </li>
            <li>
              <span>Faksas</span>
              <span>{brand.contact.fax}</span>
            </li>
          </ul>
        </div>

        <div className="contact-card">
          <h2>Adresas ir darbalaikis</h2>
          <p>{brand.contact.address}</p>
          <p>Darbo laikas: {brand.contact.workHours}</p>
          <iframe
            title="Currus Baldai žemėlapis"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2312.933686769073!2d23.986491977639795!3d54.91494085917756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e72232be8abc9d%3A0xdfec2ba7d54e07de!2sKauno%20g.%2022%2C%20Ramu%C4%8Diai%2045438!5e0!3m2!1slt!2slt!4v1700000000000!5m2!1slt!2slt"
            width="100%"
            height="280"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ContactPage;
