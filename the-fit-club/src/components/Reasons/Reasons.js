import "./Reasons.css";
import image1 from "../../assets/image1-w.jpg";
import image2 from "../../assets/image3-w.jpg";
import image3 from "../../assets/image2-w.jpg";
import image4 from "../../assets/image4-w.jpg";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>algumas razões</span>

        <div>
          <span className="stroke-text">Porque</span>
          <span> nos escolher?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>140+ ESPECIALISTAS EM TREINOS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TREINOS MAIS INTELIGENTES E MAIS EFICIENTES</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 PROGRAMA GRÁTIS PARA NOVOS MEMBROS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>PARCERIAS EXCLUSIVAS</span>
          </div>
        </div>
        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          NOSSOS PARECEIROS
        </span>
        <div className="partners">
            <img src={nb} alt="New Balance logo" />
            <img src={adidas} alt="Adidas logo" />
            <img src={nike} alt="Nike logo" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
