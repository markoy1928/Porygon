function getGame(game) {
    switch (game) {
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

function getName(dexNo) {
    switch(dexNo) {
        // Gen 1
        case 1:
            return "bulbasaur";

        case 2:
            return "ivysaur";

        case 3:
            return "venusaur";

        case 4:
            return "charmander";

        case 5:
            return "charmeleon";

        case 6:
            return "charizard";

        case 7:
            return "squirtle";

        case 8:
            return "wartortle";

        case 9:
            return "blastoise";

        case 10:
            return "caterpie";

        case 11:
            return "metapod";

        case 12:
            return "butterfree";

        case 13:
            return "weedle";

        case 14:
            return "kakuna";

        case 15:
            return "beedrill";

        case 16:
            return "pidgey";

        case 17:
            return "pidgeotto";

        case 18:
            return "pidgeot";

        case 19:
            return "rattata";

        case 20:
            return "raticate";

        case 21:
            return "spearow";

        case 22:
            return "fearow";

        case 23:
            return "ekans";

        case 24:
            return "arbok";

        case 25:
            return "pikachu";

        case 26:
            return "raichu";

        case 27:
            return "sandshrew";

        case 28:
            return "sandslash";

        case 29:
            return "nidoran-f";

        case 30:
            return "nidorina";

        case 31:
            return "nidoqueen";

        case 32:
            return "nidoran-m";

        case 33:
            return "nidorino";

        case 34:
            return "nidoking";

        case 35:
            return "clefairy";

        case 36:
            return "clefable";

        case 37:
            return "vulpix";

        case 38:
            return "ninetales";

        case 39:
            return "jigglypuff";

        case 40:
            return "wigglytuff";

        case 41:
            return "zubat";

        case 42:
            return "golbat";

        case 43:
            return "oddish";

        case 44:
            return "gloom";

        case 45:
            return "vileplume";

        case 46:
            return "paras";

        case 47:
            return "parasect";

        case 48:
            return "venonat";

        case 49:
            return "venomoth";

        case 50:
            return "diglett";

        case 51:
            return "dugtrio";

        case 52:
            return "meowth";

        case 53:
            return "persian";

        case 54:
            return "psyduck";

        case 55:
            return "golduck";

        case 56:
            return "mankey";

        case 57:
            return "primeape";

        case 58:
            return "growlithe";

        case 59:
            return "arcanine";

        case 60:
            return "poliwag";

        case 61:
            return "poliwhirl";

        case 62:
            return "poliwrath";

        case 63:
            return "abra";

        case 64:
            return "kadabra";

        case 65:
            return "alakazam";

        case 66:
            return "machop";

        case 67:
            return "machoke";

        case 68:
            return "machamp";

        case 69:
            return "bellsprout";

        case 70:
            return "weepinbell";

        case 71:
            return "victreebel";

        case 72:
            return "tentacool";

        case 73:
            return "tentacruel";

        case 74:
            return "geodude";

        case 75:
            return "graveler";

        case 76:
            return "golem";

        case 77:
            return "ponyta";

        case 78:
            return "rapidash";

        case 79:
            return "slowpoke";

        case 80:
            return "slowbro";

        case 81:
            return "magnemite";

        case 82:
            return "magneton";

        case 83:
            return "farfetchd";

        case 84:
            return "doduo";

        case 85:
            return "dodrio";

        case 86:
            return "seel";

        case 87:
            return "dewgong";

        case 88:
            return "grimer";

        case 89:
            return "muk";

        case 90:
            return "shellder";

        case 91:
            return "cloyster";

        case 92:
            return "gastly";

        case 93:
            return "haunter";

        case 94:
            return "gengar";

        case 95:
            return "onix";

        case 96:
            return "drowzee";

        case 97:
            return "hypno";

        case 98:
            return "krabby";

        case 99:
            return "kingler";

        case 100:
            return "voltorb";

        case 101:
            return "electrode";

        case 102:
            return "exeggcute";

        case 103:
            return "exeggutor";

        case 104:
            return "cubone";

        case 105:
            return "marowak";

        case 106:
            return "hitmonlee";

        case 107:
            return "hitmonchan";

        case 108:
            return "lickitung";

        case 109:
            return "koffing";

        case 110:
            return "weezing";

        case 111:
            return "rhyhorn";

        case 112:
            return "rhydon";

        case 113:
            return "chansey";

        case 114:
            return "tangela";

        case 115:
            return "kangaskhan";

        case 116:
            return "horsea";

        case 117:
            return "seadra";

        case 118:
            return "goldeen";

        case 119:
            return "seaking";

        case 120:
            return "staryu";

        case 121:
            return "starmie";

        case 122:
            return "mr-mime";

        case 123:
            return "scyther";

        case 124:
            return "jynx";

        case 125:
            return "electabuzz";

        case 126:
            return "magmar";

        case 127:
            return "pinsir";

        case 128:
            return "tauros";

        case 129:
            return "magikarp";

        case 130:
            return "gyarados";

        case 131:
            return "lapras";

        case 132:
            return "ditto";

        case 133:
            return "eevee";

        case 134:
            return "vaporeon";

        case 135:
            return "jolteon";

        case 136:
            return "flareon";

        case 137:
            return "porygon";

        case 138:
            return "omanyte";

        case 139:
            return "omastar";

        case 140:
            return "kabuto";

        case 141:
            return "kabutops";

        case 142:
            return "aerodactyl";

        case 143:
            return "snorlax";

        case 144:
            return "articuno";

        case 145:
            return "zapdos";

        case 146:
            return "moltres";

        case 147:
            return "dratini";

        case 148:
            return "dragonair";

        case 149:
            return "dragonite";

        case 150:
            return "mewtwo";

        case 151:
            return "mew";

        // Gen 2
        case 152:
            return "chikorita";

        case 153:
            return "bayleef";

        case 154:
            return "meganium";

        case 155:
            return "cyndaquil";

        case 156:
            return "quilava";

        case 157:
            return "typhlosion";

        case 158:
            return "totodile";

        case 159:
            return "croconaw";

        case 160:
            return "feraligatr";

        case 161:
            return "sentret";

        case 162:
            return "furret";

        case 163:
            return "hoothoot";

        case 164:
            return "noctowl";

        case 165:
            return "ledyba";

        case 166:
            return "ledian";

        case 167:
            return "spinarak";

        case 168:
            return "ariados";

        case 169:
            return "crobat";

        case 170:
            return "chinchou";

        case 171:
            return "lanturn";

        case 172:
            return "pichu";

        case 173:
            return "cleffa";

        case 174:
            return "igglybuff";

        case 175:
            return "togepi";

        case 176:
            return "togetic";

        case 177:
            return "natu";

        case 178:
            return "xatu";

        case 179:
            return "mareep";

        case 180:
            return "flaaffy";

        case 181:
            return "ampharos";

        case 182:
            return "bellossom";

        case 183:
            return "marill";

        case 184:
            return "azumarill";

        case 185:
            return "sudowoodo";

        case 186:
            return "politoed";

        case 187:
            return "hoppip";

        case 188:
            return "skiploom";

        case 189:
            return "jumpluff";

        case 190:
            return "aipom";

        case 191:
            return "sunkern";

        case 192:
            return "sunflora";

        case 193:
            return "yanma";

        case 194:
            return "wooper";

        case 195:
            return "quagsire";

        case 196:
            return "espeon";

        case 197:
            return "umbreon";

        case 198:
            return "murkrow";

        case 199:
            return "slowking";

        case 200:
            return "misdreavus";

        case 201:
            return "unown";

        case 202:
            return "wobbuffet";

        case 203:
            return "girafarig";

        case 204:
            return "pineco";

        case 205:
            return "forretress";

        case 206:
            return "dunsparce";

        case 207:
            return "gligar";

        case 208:
            return "steelix";

        case 209:
            return "snubbull";

        case 210:
            return "granbull";

        case 211:
            return "qwilfish";

        case 212:
            return "scizor";

        case 213:
            return "shuckle";

        case 214:
            return "heracross";

        case 215:
            return "sneasel";

        case 216:
            return "teddiursa";

        case 217:
            return "usaring";

        case 218:
            return "slugma";

        case 219:
            return "magcargo";

        case 220:
            return "swinub";

        case 221:
            return "piloswine";

        case 222:
            return "corsola";

        case 223:
            return "remoraid";

        case 224:
            return "octillery";

        case 225:
            return "delibird";

        case 226:
            return "mantine";

        case 227:
            return "skarmory";

        case 228:
            return "houndour";

        case 229:
            return "houndoom";

        case 230:
            return "kingdra";

        case 231:
            return "phanpy";

        case 232:
            return "donphan";

        case 233:
            return "porgon2";

        case 234:
            return "stantler";

        case 235:
            return "smeargle";

        case 236:
            return "tyrogue";

        case 237:
            return "hitmontop";

        case 238:
            return "smoochum";

        case 239:
            return "elekid";

        case 240:
            return "magby";

        case 241:
            return "miltank";

        case 242:
            return "blissey";

        case 243:
            return "raikou";

        case 244:
            return "entei";

        case 245:
            return "suicune";

        case 246:
            return "larvitar";

        case 247:
            return "pupitar";

        case 248:
            return "tyranitar";

        case 249:
            return "lugia";

        case 250:
            return "ho-oh";

        case 251:
            return "celebi";

        // Gen 3
        case 252:
            return "treecko";

        case 253:
            return "grovyle";

        case 254:
            return "sceptile";

        case 255:
            return "torchic";

        case 256:
            return "combusken";

        case 257:
            return "blaziken";

        case 258:
            return "mudkip";

        case 259:
            return "marshtomp";

        case 260:
            return "swampert";

        case 261:
            return "poochyena";

        case 262:
            return "mightyena";

        case 263:
            return "zigzagoon";

        case 264:
            return "linoone";

        case 265:
            return "wurmple";

        case 266:
            return "silcoon";

        case 267:
            return "beautifly";

        case 268:
            return "cascoon";

        case 269:
            return "dustox";

        case 270:
            return "lotad";

        case 271:
            return "lombre";

        case 272:
            return "ludicolo";

        case 273:
            return "seedot";

        case 274:
            return "nuzleaf";

        case 275:
            return "shiftry";

        case 276:
            return "taillow";

        case 277:
            return "swellow";

        case 278:
            return "wingull";

        case 279:
            return "pelipper";

        case 280:
            return "ralts";

        case 281:
            return "kirlia";

        case 282:
            return "gardevoir";

        case 283:
            return "surskit";

        case 284:
            return "masquerain";

        case 285:
            return "shroomish";

        case 286:
            return "breloom";

        case 287:
            return "slakoth";

        case 288:
            return "vigoroth";

        case 289:
            return "slaking";

        case 290:
            return "nincada";

        case 291:
            return "ninjask";

        case 292:
            return "shedinja";

        case 293:
            return "whismur";

        case 294:
            return "loudred";

        case 295:
            return "exploud";

        case 296:
            return "makuhita";

        case 297:
            return "hariyama";

        case 298:
            return "azurill";

        case 299:
            return "nosepass";

        case 300:
            return "skitty";

        case 301:
            return "delcatty";

        case 302:
            return "sableye";

        case 303:
            return "mawile";

        case 304:
            return "aron";

        case 305:
            return "lairon";

        case 306:
            return "aggron";

        case 307:
            return "meditite";

        case 308:
            return "medicham";

        case 309:
            return "electrike";

        case 310:
            return "manectric";

        case 311:
            return "plusle";

        case 312:
            return "minun";

        case 313:
            return "volbeat";

        case 314:
            return "illumise";

        case 315:
            return "roselia";

        case 316:
            return "gulpin";

        case 317:
            return "swalot";

        case 318:
            return "carvanha";

        case 319:
            return "sharpedo";

        case 320:
            return "wailmer";

        case 321:
            return "wailord";

        case 322:
            return "numel";

        case 323:
            return "camerupt";

        case 324:
            return "torkoal";

        case 325:
            return "spoink";

        case 326:
            return "grumpig";

        case 327:
            return "spinda";

        case 328:
            return "trapinch";

        case 329:
            return "vibrava";

        case 330:
            return "flygon";

        case 331:
            return "cacnea";

        case 332:
            return "cacturne";

        case 333:
            return "swablu";

        case 334:
            return "altaria";

        case 335:
            return "zangoose";

        case 336:
            return "seviper";

        case 337:
            return "lunatone";

        case 338:
            return "solrock";

        case 339:
            return "barboach";

        case 340:
            return "whiscash";

        case 341:
            return "corphish";

        case 342:
            return "crawdaunt";

        case 343:
            return "baltoy";

        case 344:
            return "claydol";

        case 345:
            return "lileep";

        case 346:
            return "cradily";

        case 347:
            return "anorith";

        case 348:
            return "armaldo";

        case 349:
            return "feebas";

        case 350:
            return "milotic";

        case 351:
            return "castform";

        case 352:
            return "kecleon";

        case 353:
            return "shuppet";

        case 354:
            return "banette";

        case 355:
            return "duskull";

        case 356:
            return "dusclops";

        case 357:
            return "tropius";

        case 358:
            return "chimecho";

        case 359:
            return "absol";

        case 360:
            return "wynaut";

        case 361:
            return "snorunt";

        case 362:
            return "glalie";

        case 363:
            return "spheal";

        case 364:
            return "sealo";

        case 365:
            return "walrein";

        case 366:
            return "clamperl";

        case 367:
            return "huntail";

        case 368:
            return "gorebyss";

        case 369:
            return "relicanth";

        case 370:
            return "luvdisc";

        case 371:
            return "bagon";

        case 372:
            return "shelgon";

        case 373:
            return "salamence";

        case 374:
            return "beldum";

        case 375:
            return "metang";

        case 376:
            return "metagross";

        case 377:
            return "regirock";

        case 378:
            return "regice";

        case 379:
            return "registeel";

        case 380:
            return "latias";

        case 381:
            return "latios";

        case 382:
            return "kyogre";

        case 383:
            return "groudon";

        case 384:
            return "rayquaza";

        case 385:
            return "jirachi";

        case 386:
            return "deoxys";

        // Gen 4
        case 387:
            return "turtwig";
        
        case 388:
            return "grotle";

        case 389:
            return "torterra";

        case 390:
            return "chimchar";

        case 391:
            return "monferno";

        case 392:
            return "infernape";

        case 393:
            return "piplup";

        case 394:
            return "prinplup";

        case 395:
            return "empoleon";

        case 396:
            return "starly";

        case 397:
            return "staravia";

        case 398:
            return "staraptor";

        case 399:
            return "bidoof";

        case 400:
            return "bibarel";

        case 401:
            return "kricketot";

        case 402:
            return "kricketune";

        case 403:
            return "shinx";

        case 404:
            return "luxio";

        case 405:
            return "luxray";

        case 406:
            return "budew";

        case 407:
            return "roserade";

        case 408:
            return "cranidos";

        case 409:
            return "rampardos";

        case 410:
            return "shieldon";

        case 411:
            return "bastiodon";

        case 412:
            return "burmy";

        case 413:
            return "wormadam";

        case 414:
            return "mothim";

        case 415:
            return "combee";

        case 416:
            return "vespiquen";

        case 417:
            return "pachirisu";

        case 418:
            return "buizel";

        case 419:
            return "floatzel";

        case 420:
            return "cherubi";

        case 421:
            return "cherrim";

        case 422:
            return "shellos";

        case 423:
            return "gastrodon";

        case 424:
            return "ambipom";

        case 425:
            return "drifloon";

        case 426:
            return "drifblim";

        case 427:
            return "buneary";

        case 428:
            return "lopunny";

        case 429:
            return "mismagius";

        case 430:
            return "honchkrow";

        case 431:
            return "glameow";

        case 432:
            return "purugly";

        case 433:
            return "chingling";

        case 434:
            return "stunky";

        case 435:
            return "skuntank";

        case 436:
            return "bronzor";

        case 437:
            return "bronzong";

        case 438:
            return "bonsly";

        case 439:
            return "mime-jr";

        case 440:
            return "happiny";

        case 441:
            return "chatot";

        case 442:
            return "spiritomb";

        case 443:
            return "gible";

        case 444:
            return "gabite";

        case 445:
            return "garchomp";

        case 446:
            return "munchlax";

        case 447:
            return "riolu";

        case 448:
            return "lucario";
        
        case 449:
            return "hippopotas";

        case 450:
            return "hippowdon";

        case 451:
            return "skorupi";

        case 452:
            return "drapion";

        case 453:
            return "croagunk";

        case 454:
            return "toxicroak";

        case 455:
            return "carnivine";

        case 456:
            return "finneon";

        case 457:
            return "lumineon";

        case 458:
            return "mantyke";

        case 459:
            return "snover";

        case 460:
            return "abomasnow";

        case 461:
            return "weavile";

        case 462:
            return "magnezone";

        case 463:
            return "lickilicky";

        case 464:
            return "rhyperior";
        
        case 465:
            return "tangrowth";

        case 466:
            return "electivire";

        case 467:
            return "magmortar";

        case 468:
            return "togekiss";

        case 469:
            return "yanmega";

        case 470:
            return "leafeon";

        case 471:
            return "glaceon";

        case 472:
            return "gliscor";

        case 473:
            return "mamoswine";

        case 474:
            return "porygon-z";

        case 475:
            return "gallade";

        case 476:
            return "probopass";

        case 477:
            return "dusknoir";

        case 478:
            return "froslass";

        case 479:
            return "rotom";

        case 480:
            return "uxie";

        case 481:
            return "mesprit";

        case 483:
            return "azelf";

        case 484:
            return "dialga";

        case 485:
            return "heatran";

        case 486:
            return "regigigas";

        case 487:
            return "giratina";

        case 488:
            return "cresselia";

        case 489:
            return "phione";

        case 490:
            return "manaphy";

        case 491:
            return "darkrai";

        case 492:
            return "shaymin";
        
        case 493:
            return "arceus";




        default:
            return "missing-no";
    }
}

function PokemonURL(game, pokemon) {
    if (getName(pokemon.dex) === "missing-no") {
        return "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png";
    }
    else {
        return "https://img.pokemondb.net/sprites/" + getGame(game) + "/normal/" + getName(pokemon.dex) + ".png";
    }
}

export default PokemonURL;