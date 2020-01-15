import React from "react";
import Icons from "./Icons";
import placeholderImage from "../images/paquita.jpg";
import "../stylesheets/pages/card.scss";
import "../stylesheets/components/cards-photo.scss";

function Card(props) {
  function handleReset(ev) {
    ev.preventDefault();
    props.handleReset();
  }

  return (
    <section className="card-photo">
      <div className="card-photo__button">
        <button
          type="button"
          className="card-photo__button__reset icon-reset js-reset-button"
          title="Reset"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div
        className={`card-photo__card js-card card-palette${props.info.palette}`}
      >
        <div className="card-photo__card__info border-info">
          <h2 className="card-photo__card__info__name js-card-name card-name">
            {props.info.name || "Nombre Apellido"}
          </h2>
          <h3 className="card-photo__card__info__job js-card-job">
            {props.info.job || "Profesión"}
          </h3>
        </div>

        <div
          className="card-photo__card__image js-image-pro"
          alt="Avatar"
          title="Imagen del usuario"
          style={{ backgroundImage: `url(${props.photo || placeholderImage})` }}
        ></div>
        <div>
          <ul className="card-photo__card__links">
            <Icons info={props.info} />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Card;
