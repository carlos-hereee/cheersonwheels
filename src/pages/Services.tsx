import { signatureDrinks } from "@data/demo.json";
import { Button, Card, Hero, HeroCard } from "nexious-library";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const heroItem = {
    url: "https://img1.wsimg.com/isteam/ip/ecd04ae0-9c94-4062-8881-9dc8bcd0f031/IMG_0530.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:974",
    alt: "Cheerson Signature Drinks",
    theme: "signature-thumbnail",
  };

  return (
    <div className="container">
      <h1 className="heading">{signatureDrinks.title}</h1>
      <p className="w-full">{signatureDrinks.description}</p>
      <div className="services-grid">
        {signatureDrinks.drinks.map((data) =>
          data.hero ? (
            <HeroCard data={data} hero={data.hero} onClick={(d: { link: string }) => navigate(d.link)} />
          ) : (
            <div className="card" key={data.title}>
              <Hero hero={heroItem} />
              <Card data={data} />
              <Button label="Book Now" theme="" onClick={() => navigate("/booking")} />
            </div>
          ),
        )}
      </div>
    </div>
  );
};
export default Services;
