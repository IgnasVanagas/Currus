import { PageLayout } from "@layouts/PageLayout";

const galleryItems = [
  {
    title: "Biuro erdvės",
    description: "Moduliniai darbo stalai ir susitikimų zonos, pritaikytos hibridiniam darbui.",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "HoReCa interjeras",
    description: "Restoranų baldai su specialiomis apdailomis drėgnoms aplinkoms.",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Mažmeninės prekybos sprendimai",
    description: "Prekybos salių stendai ir kassų zonos su integruotomis technologijomis.",
    image:
      "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1600&q=80"
  }
];

export const GalleryPage = () => (
  <PageLayout>
    <section className="page-hero">
      <div className="container narrow">
        <h1>Darbų galerija</h1>
        <p>
          Keli projektai, kuriais didžiuojamės. Esame pasiruošę pritaikyti patirtį įvairiems sektoriams – nuo biurų
          iki viešbučių ar mažmenos.
        </p>
      </div>
    </section>

    <section className="section-stack">
      <div className="container gallery-grid">
        {galleryItems.map((item) => (
          <figure key={item.title}>
            <div className="gallery-image" style={{ backgroundImage: `url(${item.image})` }} />
            <figcaption>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default GalleryPage;
