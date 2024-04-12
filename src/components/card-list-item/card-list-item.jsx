import "./card-list-item.css";

const CardListItem = (props) => {
  const { name, src } = props;

  return (
    <li className="app-list-item">
      <div className="card">
        <a href="#" target="_blank">
          <img src={src} className="img_card" alt="card photo" />
        </a>
        <h2>{name}</h2>
      </div>
    </li>
  );
};

export default CardListItem;
