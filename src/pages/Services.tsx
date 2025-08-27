import { signatureDrinks } from "@data/demo/demo.json";
import { Button, Card, Hero, HeroCard } from "nexious-library";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="heading">{signatureDrinks.title}</h1>
      <p className="w-full">{signatureDrinks.description}</p>
      <div className="services-grid">
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
      </div>
    </div>
  );
};
export default Services;
