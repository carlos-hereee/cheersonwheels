import { signatureDrinks } from "@data/demo/demo.json";
import { HeroCard, SectionList } from "nexious-library";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="container">
        <HeroCard
          data={signatureDrinks}
          hero={signatureDrinks.hero}
          onClick={(data: { link: string }) => navigate(data.link)}
        />
      </div>
      <SectionList sections={signatureDrinks.drinks} />

      {/* <div className="services-grid">
        {signatureDrinks.drinks.map((drink) =>
          drink.hero ? (
            <HeroCard data={drink} hero={drink.hero} onClick={(d: { link: string }) => navigate(d.link)} />
          ) : (
            <div className="card" key={drink.title}>
              <Hero hero={signatureDrinks.hero} />
              <Card data={drink} />
              <Button label="Book Now" theme="" onClick={() => navigate("/booking")} />
            </div>
          ),
        )}
      </div> */}
    </div>
  );
};
export default Services;
