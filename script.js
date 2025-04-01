let party;
let badges;
const f = require('fs');

function getGameData() {
    var data;

    f.readFile('game_data.json', (err, fileData) => {
        if (err) {
            throw err;
        }

        data = JSON.parse(fileData);
    })

    party = data.party;
    badges = data.badges;
}