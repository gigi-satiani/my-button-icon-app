import "./App.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRandom,
  faCoffee,
  faStar,
  faCar,
  faRss,
  faBathtub,
  faBlender,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";

// Add any other icons you want to use in the library
library.add(
  faRandom,
  faCoffee,
  faStar,
  faCar,
  faRss,
  faBathtub,
  faBlender,
  faCameraRetro
);

const ButtonWithIcon = () => {
  const [randomIcon, setRandomIcon] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomIcon = () => {
    setLoading(true);
    const icons = [
      faRandom,
      faCoffee,
      faStar,
      faCar,
      faRss,
      faBathtub,
      faBlender,
      faCameraRetro,
    ];
    const randomIndex = Math.floor(Math.random() * icons.length);
    const icon = icons[randomIndex];
    setRandomIcon(icon);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        className="neon"
        onClick={getRandomIcon}
        disabled={loading}
        style={{ padding: "20px 30px", fontSize: "20px" }}
      >
        {loading ? "Загрузка..." : "Получить случайную иконку"}
      </button>
      <div style={{ marginLeft: "25px", color: "var(--clr-neon)" }}>
        {randomIcon && <FontAwesomeIcon icon={randomIcon} size="4x" />}
      </div>
    </div>
  );
};

export default ButtonWithIcon;
