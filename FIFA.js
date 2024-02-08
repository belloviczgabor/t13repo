
//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

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

document.write(csapatAdat.length)

let csapatAdatTombok=[]
for(let i=0;i<csapatAdat.length;i++){
	let jelenlegiOrszag=csapatAdat[i].split(";")
    csapatAdatTombok.push(jelenlegiOrszag)
}

function atlagPontszam(vizsgaltTomb){
	let osszPontszam=0
    for(let i=0; i<vizsgaltTomb.length;i++){
    	let jelenlegiOrszag=vizsgaltTomb[i]
        osszPontszam+=parseInt(jelenlegiOrszag[3])
        
    }  
    return osszPontszam/csapatAdat.length
}
document.write("<hr>" +Math.round(atlagPontszam(csapatAdatTombok)))

function atlagnalTobbetElertTablazat(vizsgaltTomb){
	document.write("<table>")
	const atlag=atlagPontszam(vizsgaltTomb)
    for(let i=0;i<vizsgaltTomb.length; i++){
    	if(atlag<vizsgaltTomb[i][3]){
        	document.write("<tr>")
            document.write("<td>")
            document.write(vizsgaltTomb[i][0])
            document.write("</td>")
              document.write("<td>")
            document.write(vizsgaltTomb[i][3])
            document.write("</td>")
            document.write("</tr>")
        }
        
    }
    document.write("</table>")
}
document.write("<hr>")
atlagnalTobbetElertTablazat(csapatAdatTombok)

function legtobbetJavitoCsapat(vizsgaltTomb){
	let csapat=vizsgaltTomb[0]
    for(let i=0;i<vizsgaltTomb.length;i++){
    	if(vizsgaltTomb[i][2]>csapat[2]){
        	csapat=vizsgaltTomb[i]    
        }      
    }
    return csapat
}
const aLegtobbetJavitoCsapat=legtobbetJavitoCsapat(csapatAdatTombok)
document.write("<hr>")
document.write(aLegtobbetJavitoCsapat[0])
document.write("<hr>")
document.write(aLegtobbetJavitoCsapat[1])
document.write("<hr>")
document.write(aLegtobbetJavitoCsapat[3])

function benneVanE(vizsgaltTomb,orszag){
let tomb=[]
for(let i=0;i<vizsgaltTomb.length;i++){
	tomb.push(vizsgaltTomb[i][0])
}
return tomb.includes(orszag)
}
document.write("<hr>")
if(benneVanE(csapatAdatTombok,'Magyarorszag')){

document.write("Benne van")
}
else
document.write("Nincs benne")
document.write("<hr>")





