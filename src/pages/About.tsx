import { HeroCard } from "nexious-library";
import data from "@data/demo/about.json";

const About = () => {
  return (
    <div className="container about-page">
      <HeroCard data={data} hero={data.hero} />
    </div>
  );
};
export default About;
