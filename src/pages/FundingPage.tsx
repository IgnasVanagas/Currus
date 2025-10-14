import { PageLayout } from "@layouts/PageLayout";
// import { photo } from "@dist/downloads/funding-image.png";
import { AnimatedSection } from "@components/AnimatedSection";

export const FundingPage = () => (
<PageLayout>
    
    <section className="funding-hero">
      <div className="container narrow funding-header">
        <h1>ES parama</h1>
        <p>
            UAB Currus – projektuoja ir gamina aukščiausios kokybės: 
            miegamojo, virtuvės, biuro, prieškambario, vaikų kambario, 
            drabužines, svetainės bei prekybos įrangos baldus.
        </p>
        <img src="https://currus.lt/wp-content/uploads/2024/11/es-768x163.jpg" alt="funding-image" />
      </div>
    </section>
    <AnimatedSection id = "funding" className = "funding">
       <section className="funding">
      <section className="funding-row">
        <div className="box box1">
          <h2>Tikslas</h2>
          <p>Pagerinti darbuotojų įgūdžius naujų gamybos procesų, medžiagų 
          ir technologijų bei informacinių ir ryšių technologijų srityje. 
          Darbuotojų sumanių įgūdžių ugdymas ir tobulinimas padės įmonei 
          prisitaikyti prie ekonomikos technologinių pokyčių ir pramonės pertvarkos.
          </p>
        </div>
        <div className="box box2">
          <h2>Projekto biudžetas</h2>
          <p>
          56888,47 EUR, iš kurių Europos Sąjungos finansuojama dalis sudaro 39821,93 Eur.
          </p>
        </div>
      </section>

      <section className="funding-row">
        <div className="box box3">
          <h2>Projekto įgyvendinimo trukmė</h2>
          <p>24 mėn. (2024-08-05 iki 2026-08-05)</p>
        </div>
        <div className="box box4">
          <h2>Rezultatas</h2>
          <p>
          Įmonės darbuotojai, baigę mokymus, skirtus pažangiajai specializacijai, 
          pramonės pertvarkai ir verslumui reikalingiems įgūdžiams ugdyti. 
          Projektas įgyvendinamas pagal pažangos priemonę „Sukurti nuoseklią 
          inovacinės veiklos skatinimo sistemą“.
          </p>
        </div>
      </section>
    </section>
    </AnimatedSection>
  </PageLayout>
);

export default FundingPage;