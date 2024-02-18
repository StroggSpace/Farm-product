import React from "react";
import "./style.css";

export default function ComparisonItem({ logo, title, subtitle, text }) {
  return (
    <>
      <article
        className={`card card--${
          title === "Фермерские продукты" ? "green" : "red"
        }`}
      >
        <div className="card__header">
          <img className="card__logo" src={logo} alt="Значок списка" />
          <span
            className={`card__title card__title--${
              title === "Фермерские продукты" ? "green" : "red"
            }`}
          >
            {title}
          </span>
          <h3 className="card__subtitle">{subtitle}</h3>
        </div>
        <p className="card__text">{text}</p>
      </article>
    </>
  );
}
