import "./Hero.css";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import NumberCounter from 'number-counter';
//img
import hero_image from "../../assets/hero_image_woman.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/*the best ad*/}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile? "214px": "280px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>o melhor clube fitness para mulheres</span>
        </div>
        {/*hero heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Molde </span>
            <span>Seu</span>
          </div>
          <div>
            <span>Corpo ideal</span>
          </div>
          <div>
            <span>
              Um lugar exclusivo para mulheres que desejam construir o corpo ideal para viver uma vida
              mais saudável e completa.
            </span>
          </div>
        </div>
        {/*figures*/}
        <div className="figures">
          <div>
            <span><NumberCounter end={140} start={100} delay='4' preFix='+'/></span>
            <span>treinadores</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={800} delay='4' preFix='+'/></span>
            <span>membros</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={0} delay='4' preFix='+'/></span>
            <span>programas</span>
          </div>
        </div>
        {/*hero buttons*/}
        <div className="hero-buttons">
          <buttons className="btn">Começe Agora</buttons>
          <buttons className="btn">Saiba Mais</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Inscreva-se agora</button>
        {/*heart rate*/}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="coração" />
          <span>
            Frequência <br />
            Cardíaca
          </span>
          <span>116 bpm</span>
        </motion.div>

        {/*hero images*/}
        <img src={hero_image} alt="mulher fitness" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt="detalhes"
          className="hero-image-back"
        />

        {/*calories*/}
        <motion.div
          initial={{ right: "40rem" }}
          whileInView={{ right: "34rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="detalhes" />
          <div>
            <span>Calorias Queimadas</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
