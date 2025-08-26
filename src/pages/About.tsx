import { HeroCard } from "nexious-library";

const About = () => {
  const heroData = {
    title: "About Us",
    subtitle: "Thank you for choosing Cheerson Wheels. We look forward to serving you!",
    theme: "about-thumbnail",
    body: "Learn more about Cheerson Wheels and our commitment to quality service.",
    url: "https://img1.wsimg.com/isteam/ip/ecd04ae0-9c94-4062-8881-9dc8bcd0f031/IMG_4092.jpeg/:/cr=t:26.52%25,l:0%25,w:73.48%25,h:73.48%25",
  };
  return (
    <div className="page about-page">
      <HeroCard data={heroData} hero={heroData} />
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
