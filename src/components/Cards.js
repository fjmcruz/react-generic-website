import CardItem from "./CardItem.js";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h2>Genecric phrase.</h2>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="https://source.unsplash.com/2cdvYh6ULCs/"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              label="Label One"
              path="/react-generic-website/services/"
            />
            <CardItem
              src="https://source.unsplash.com/hwLAI5lRhdM/"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              label="Label Two"
              path="/react-generic-website/services/"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="https://source.unsplash.com/qTPCqxCR-LA/"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              label="Label Three"
              path="/react-generic-website/services/"
            />
            <CardItem
              src="https://source.unsplash.com/NYyCqdBOKwc/"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              label="Label Four"
              path="/react-generic-website/services/"
            />
            <CardItem
              src="https://source.unsplash.com/MsMISAIe8Qw/"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              label="Label Five"
              path="/react-generic-website/services/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
