import React from "react";
import data from "./game_data.json";

function Pokemon(partyPosition) {
    let mon = data.party[partyPosition];

    if (mon.dex != 0) {
        let hpPercent = 100 * (mon.hp / mon.maxHP)
        let hpColor

        if (hpPercent > 50) {
            hpColor = "#33cc33";
        }
        else if (hpPercent > 20) {
            hpColor = "#ffcc00";
        }
        else {
            hpColor = "#cc0000";
        }

        return (
            <div class="Pokemon">
                <p>{mon.nickname}</p>
                <img src="https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/cyndaquil.png" alt="Mew"></img>
                <div>
                    <div class="Health">
                        <div class="HP" style={{width: hpPercent + "%", backgroundColor: hpColor}}></div>
                    </div>
                    <p>{mon.hp}/{mon.maxHP}</p>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

export default Pokemon;