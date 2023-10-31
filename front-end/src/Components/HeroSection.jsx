import { useNavigate } from "react-router-dom";

import "../styles/HeroSection.scss";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="hero-container ">
      <div className="hero-container__title">
        <h1 className="">Sale</h1>
        <h2 className="">New season</h2>
        <button onClick={() => navigate(`/products/sale`)} className="hero-btn">
          Sale
        </button>
      </div>
      <div className="bg">
        <img
          className="hero-container__img"
          src="../images/garden.png"
          alt="Garden"
        />
      </div>
    </div>
  );
}

export default HeroSection;
