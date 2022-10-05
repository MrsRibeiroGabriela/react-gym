import { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h1fcd39",
        "template_9idgsav",
        form.current,
        "vo4THASBbMtYK7aBE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">PRONTA PARA </span>
          <span>SUBIR O NÍVEL</span>
        </div>
        <div>
          <span>DO SEU CORPO </span>
          <span className="stroke-text">CONOSCO?</span>
        </div>
      </div>

      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Digite seu e-mail"
          />
          <button className="btn btn-j">Increva-se agora</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
