import { settings } from "./configs/game";
import React, { useState } from "react";
import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";
import trophy from "./assets/trophy.png";

import "./styles.css";

export default function App() {
  let [game, setGame] = useState({
    userSelection: "",
    pcSelection: "",
    round: 0,
    userScore: 0,
    pcScore: 0,
    message: "",
  });
  return (
    <div className="App">
      <p>Rock Paper Scissors Game</p>
    </div>
  );
}
