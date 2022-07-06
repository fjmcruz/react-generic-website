import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <div>
      <>
        <li className="cards-item">
          <Link className="cards-item-link" to={props.path}>
            <figure className="cards-item-pic-wrap" data-category={props.label}>
              <img src={props.src} alt="Image" className="cards-item-img" />
            </figure>
            <div className="cards-item-info">
              <h4 className="cards-item-text">{props.text}</h4>
            </div>
          </Link>
        </li>
      </>
    </div>
  );
}

export default CardItem;
