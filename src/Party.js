import React from "react";
import Pokemon from "./Pokemon.js";

function Party() {
    return (
        <div id="Party">
            {Pokemon(0)}
            {Pokemon(1)}
            {Pokemon(2)}
            {Pokemon(3)}
            {Pokemon(4)}
            {Pokemon(5)}
        </div>
    );
}

export default Party;