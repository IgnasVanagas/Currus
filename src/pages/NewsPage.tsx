import { PageLayout } from "@layouts/PageLayout";

const newsItems = [
  {
    title: "Naujas CNC centras Kauno gamykloje",
    date: "2025-06-14",
    summary:
      "Investavome į naują penkių ašių CNC centrą, kuris leidžia greičiau atlikti nestandartinius užsakymus ir mažinti broko procentą."
  },
  {
    title: "Bendradarbiavimas su interjero studijomis",
    date: "2025-04-02",
    summary:
      "Pradėjome partnerystę su trimis interjero studijomis, kad klientai gautų vientisą dizaino ir gamybos paslaugą."
  },
  {
    title: "Dalijamės tvarumo ataskaita",
    date: "2025-02-18",
    summary:
      "Viešiname metinius CO₂ pėdsako rodiklius ir pristatome medžiagų perdirbimo iniciatyvas, kurios leidžia sumažinti atliekų kiekį 17%."
  }
];

const formatDate = (value: string) =>
  new Date(value + "T00:00:00Z").toLocaleDateString("lt-LT", { year: "numeric", month: "long", day: "numeric" });

export const NewsPage = () => (
  <PageLayout>
    <section className="page-hero">
      <div className="container narrow">
        <h1>Naujienos</h1>
        <p>
          Dalinamės svarbiausiais įmonės pokyčiais, investicijomis ir renginiais. Prenumeruokite naujienlaiškį, kad
          visada būtumėte pirmieji.
        </p>
      </div>
    </section>

    <section className="section-stack">
      <div className="container news-list">
        {newsItems.map((item) => (
          <article key={item.title}>
            <time dateTime={item.date}>{formatDate(item.date)}</time>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <a className="text-link" href="#">Skaityti daugiau →</a>
          </article>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default NewsPage;
