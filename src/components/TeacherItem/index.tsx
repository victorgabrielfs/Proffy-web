import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";
function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/54159729?s=460&u=ca00ab535b772f7266aad60cce61db5eadad43e0&v=4"
          alt=""
        />
        <div>
          <strong>Victor Gabriel</strong>
          <span>Memes</span>
        </div>
      </header>

      <p>Faço memes caralho</p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ Sua vida</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
