import React from "react";
import data from "./game_data.json";

function getGame() {
    switch (data.game) {
        case "RB":
            return "red-blue";

        case "Y":
            return "yellow";

        case "GS":
            return "gold";

        case "C":
            return "crystal";

        case "RS":
            return "ruby-sapphire";

        case "E":
            return "emerald";

        case "FRLG":
            return "firered-leafgreen";

        case "DP":
            return "diamond-pearl";

        case "PT":
            return "platinum";

        case "HGSS":
            return "heartgold-soulsilver";

        case "BW":
            return "black-white";

        case "B2W2":
            return "black-white";

        case "XY":
            return "x-y";

        case "ORAS":
            return "omega-ruby-alpha-sapphire";

        case "SM":
            return "sun-moon";

        case "USUM":
            return "ultra-sun-ultra-moon";
        default:
            return "platinum"
    }
}

function Pokemon(partyPosition) {
    let mon = data.party[partyPosition];

    if (mon.dex !== 0) {
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

        let imgURL = "https://img.pokemondb.net/sprites/" + getGame() + "/normal/cyndaquil.png"

        return (
            <div class="Pokemon">
                <p>{mon.nickname}</p>
                <img src={imgURL} alt="Mew"></img>
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