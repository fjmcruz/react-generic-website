import { Button } from "./Button.js";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="./videos/hero-video.mp4" autoPlay loop muted />
      <h2>Generic Website</h2>
      <p>Generic caption.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Lets Go!
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Buy Now!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
