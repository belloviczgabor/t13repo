interface FifaAdat {
    nev: string;
    helyezes: number;
    valtozas: number;
    pont: number;
}

const csapatAdat = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];

function ObjektumFeltolto(feltoltendoElem: string[]): FifaAdat[] {
    let beolvasottAdatok: FifaAdat[] = [];
    for (let i: number = 0; i < feltoltendoElem.length; i++) {
        let daraboltAdatok = feltoltendoElem[i].split(";");
        let ujCsapat: FifaAdat = {
            nev: daraboltAdatok[0],
            helyezes: Number(daraboltAdatok[1]),
            valtozas: Number(daraboltAdatok[2]),
            pont: Number(daraboltAdatok[3])
        }
        beolvasottAdatok.push(ujCsapat);
    }
    return beolvasottAdatok;
}

//1. feladat - Adja meg aktuálisan hány csapat szerepel a ranglistán
function CsapatokMennyisege(vizsgaltTomb: FifaAdat[]): number {
    return vizsgaltTomb.length
}
console.log(CsapatokMennyisege(ObjektumFeltolto(csapatAdat)))

//2. feladat - Írja ki mennyi a résztvevő csapatok átlagpontszáma
function PontszamokAtlaga(vizsgaltTomb: FifaAdat[]): number {
    let osszeg: number = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i].pont;
    }
    return Math.round(osszeg / vizsgaltTomb.length);
}
console.log(PontszamokAtlaga(ObjektumFeltolto(csapatAdat)))

//3. feladat - Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el!
function AtlagFelettiek(vizsgaltTomb: FifaAdat[]): string[] {
    let atlagPont: number = PontszamokAtlaga(vizsgaltTomb);
    let atlagFelettiek: string[] = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].pont > atlagPont) {
            atlagFelettiek.push(vizsgaltTomb[i].nev);
        }
    }
    return atlagFelettiek;
}
console.log(AtlagFelettiek(ObjektumFeltolto(csapatAdat)));

//4. feladat -Írja ki a legtöbbet javító csapat adatait: Helyezés, CsapatNeve, Pontszáma

function LegtobbetJavitoCsapatIndex(vizsgaltTomb: FifaAdat[]): number {
    let kivalasztottCsapatIndexe: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].valtozas > vizsgaltTomb[kivalasztottCsapatIndexe].valtozas) {
            kivalasztottCsapatIndexe = i;
        }
    }
    return kivalasztottCsapatIndexe;
}
const fifaAdatok: FifaAdat[] = ObjektumFeltolto(csapatAdat)
function LegtobbetJavitoCsapatIndexKiir(csapatIndex: number): void {
    console.log("A legtöbbet javító csapat neve:" + fifaAdatok[csapatIndex].nev);
    console.log("A legtöbbet javító csapat helyezése:" + fifaAdatok[csapatIndex].helyezes);
    console.log("A legtöbbet javító csapat változása:" + fifaAdatok[csapatIndex].valtozas);
    console.log("A legtöbbet javító csapat pontszáma:" + fifaAdatok[csapatIndex].pont);
}
LegtobbetJavitoCsapatIndexKiir(LegtobbetJavitoCsapatIndex(fifaAdatok));

//5. feladat- Határozza meg a adatok közöt megtalálható-e Magyarország csapata!
function SzerepeltEMagyarorszag(vizsgaltTomb: FifaAdat[]): boolean {
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].nev == "Magyarorszag") {
            return true;
        }
    }
    return false;
}
console.log(SzerepeltEMagyarorszag(fifaAdatok))

//6. feladat - Készítsen  statisztikát  a  helyezések  változása  (Valtozas)  alapján  csoportosítva  
//a  csapatok számáról  a  minta  szerint!  Csak  azok  a  helyezésváltozások  jelenjenek  meg  a  képernyőn, 
//amelyek esetében a csapatok száma több mint egy volt! A megjelenő csoportok sorrendje tetszőleges.
function ValtozasTipusok(vizsgaltTomb: FifaAdat[]): number[] {
    let valtozasTipusok: number[] = [];
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        let szerepelE: boolean = false;
        for (let j: number = 0; j < valtozasTipusok.length; j++) {
            if (vizsgaltTomb[i].valtozas == valtozasTipusok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            valtozasTipusok.push(vizsgaltTomb[i].valtozas);
        }
    }
    return valtozasTipusok;
}
console.log(ValtozasTipusok(fifaAdatok))
function ValtozasokMennyisege(vizsgaltTomb: FifaAdat[], valtozasTipusok: number[]) {
    let valtozasokMennyisege: number[] = [];
    for (let i: number = 0; i < valtozasTipusok.length; i++) {
        valtozasokMennyisege.push(0);
    }
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        for (let j: number = 0; j < valtozasTipusok.length; j++) {
            if (vizsgaltTomb[i].valtozas == valtozasTipusok[j]) {
                valtozasokMennyisege[j]++;
            }
        }
    }
    return valtozasokMennyisege;
}
console.log(ValtozasokMennyisege(fifaAdatok, ValtozasTipusok(fifaAdatok)))