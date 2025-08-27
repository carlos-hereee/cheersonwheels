import { HeroCard, SectionList } from "nexious-library";
import { landing } from "@data/demo/demo.json";
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
      <SectionList
        sections={landing.sections}
        theme="page-sections"
        handleClick={(d: { link: string }) => navigate(d.link)}
      />
    </div>
  );
};

export default Landing;
