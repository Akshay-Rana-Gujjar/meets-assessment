import React from "react";
import "./styles.css";
import { ShareIcon } from "../Icons";

export default function ShareButton({onClick}) {
  return (
    <div className="share-button-container">
      <div className="share-button" onClick={onClick}>
        <ShareIcon />
        Share
      </div>
    </div>
  );
}
