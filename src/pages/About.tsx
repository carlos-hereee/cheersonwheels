import { HeroCard } from "nexious-library";
import data from "@data/demo/about.json";

const About = () => {
  return (
    <div className="page about-page">
      <HeroCard data={data.hero} hero={data.hero} />
      <p className="w-full">
        Welcome to Cheerson Wheels! We are dedicated to providing the best service for all your automotive needs. Our
        team of experts is here to help you with everything from routine maintenance to major repairs.
      </p>
      <p className="w-full">
        At Cheerson Wheels, we believe in quality, integrity, and customer satisfaction. We use only the highest quality
        parts and equipment to ensure that your vehicle is running at its best.
      </p>
    </div>
  );
};
export default About;
