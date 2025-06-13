import Button from '../button/Button';
import './Card.css';

const Card = ({ background, title, icon, text }) => {
  return (
    <article
      className="card flex flex-col justify-between pt-12 pb-12 px-[49px]"
      style={{ backgroundColor: background }}
    >
      <figure className="card__icon">
        <img className="card__icon-svg mb-[35px]" src={icon} alt={`${title} icon`} />
      </figure>
      <h1 className="card__title mb-[25px] text-white uppercase">{title}</h1>
      <p className="card__paragraph mb-[25px]">{text}</p>
      <Button background={background} />
    </article>
  );
};

export default Card;
