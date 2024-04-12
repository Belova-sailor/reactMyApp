import CardListItem from "../card-list-item/card-list-item.jsx";
import "./card-list.css";

const CardList = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;

    return <CardListItem key={id} {...itemProps} />;
  });

  return (
    <div className="app-competitions">
      <h2>Что я умею:</h2>
      <ul className="app-list">{elements}</ul>
    </div>
  );
};

export default CardList;
