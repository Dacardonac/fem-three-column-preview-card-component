import Card from '../card/Card';
import './Content.css';

const Content = () => {
  return (
    <section className="content py-[88px] px-[24px] flex flex-col items-center justify-center">
      <Card
        background="hsl(31, 77%, 52%)"
        icon="images/icon-sedans.svg"
        title="Sedans"
        text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      />
      <Card
        background="hsl(184, 100%, 22%)"
        icon="images/icon-suvs.svg"
        title="SUVs"
        text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      />
      <Card
        background="hsl(179, 100%, 13%)"
        icon="images/icon-luxury.svg"
        title="Luxury"
        text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
      />
    </section>
  );
};

export default Content;
