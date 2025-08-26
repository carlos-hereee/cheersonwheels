import { Card, HeroCard } from "nexious-library";
import { landing } from "@data/demo.json";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/booking`);

  return (
    <div className="app-body">
      <div className="container">
        <HeroCard data={landing} hero={landing.hero} onClick={handleClick} />
        {landing.body && <p className="text-max">{landing.body.details}</p>}
      </div>
      <div className="landing-sections">
        {landing.sections.map((data) =>
          data.hero ? (
            <HeroCard data={data} hero={data.hero} onClick={(d: { link: string }) => navigate(d.link)} />
          ) : (
            <Card data={data} key={data.uid} />
          ),
        )}
      </div>
    </div>
  );
};

export default Landing;
