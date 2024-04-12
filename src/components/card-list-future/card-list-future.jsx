import CardListItem from "../card-list-item/card-list-item.jsx";
import "./card-list-future.css";

const CardFuture = ({ dataFuture }) => {
  const elements = dataFuture.map((item) => {
    const { id, ...itemProps } = item;

    return <CardListItem key={id} {...itemProps} />;
  });

  return (
    <div className="app-future-competitions">
      <h2>Что я хотела бы изучить:</h2>
      <ul className="app-list">{elements}</ul>
    </div>
  );
};

export default CardFuture;
