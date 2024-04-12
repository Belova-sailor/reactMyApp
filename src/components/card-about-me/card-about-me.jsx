import CardListItem from "../card-list-item/card-list-item.jsx";
import "./card-about-me.css";

const CardAboutMe = ({ dataAboutMe }) => {
  const elements = dataAboutMe.map((item) => {
    const { id, ...itemProps } = item;

    return <CardListItem key={id} {...itemProps} />;
  });

  return (
    <div className="app-info">
      <h2>Обо мне:</h2>
      <ul className="app-list info">{elements}</ul>
    </div>
  );
};

export default CardAboutMe;
