import { HeroCard } from "nexious-library";
import data from "@data/demo/about.json";
import Services from "./Services";

const About = () => {
  return (
    <div className="container about-page">
      <HeroCard data={data} hero={data.hero} />
      <Services />
    </div>
  );
};
export default About;
