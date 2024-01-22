/*1.Hozz létre egy eljárást, ami bekér egy számot, és megjeleníti a bekért szám, prím-e vagy sem. - PrimEljaras()*/
function PrimEljaras(){
    let szam=Number(prompt("Add meg a vizsgálandó számot:"));
    let oszto=0;
        for(let i=1;i<=szam;i++){
            if(szam%i==0){
                oszto++;
            }
        }
        if(oszto==2){
            document.write(`Prim a : ${szam} `);
        }
        else{
            document.write(`Nem prim a : ${szam}`);
        }
}
PrimEljaras()

/*2.Készíts egy olyan paraméteres eljárást, ami a paraméterként kapott két koordiáta alapján megmondja az adott koordinátán lévő pont hol van a koordináta rendszerben. - Koordinata(x,y)*/
function Koordinata(x,y){
    if(x>0 && y>0){
        document.write(`1. síkengyedben van ${x},${y} koordináta!`);
    }
    else if(x<0 && y>0){
        document.write(`2. síkengyedben van az ${x},${y} koordináta!`);
    }
    else if(x<0 && y<0){
        document.write(`3. síkengyedben van az ${x},${y} koordináta!`);
    }
    else if(x>0 && y<0){
        document.write(`4. síkengyedben van a ${x},${y} koordináta!`);
    }
    else if(x==0 && y==0){
        document.write(`Az origóban van ${x},${y} koordináta!`);
    }
    else if(x==0){
        document.write(`Az y tengelyen van ${x},${y} koordináta !`);
    }
    else{
        document.write(`Az x tengelyen van ${x},${y} koordináta !`);
    }
    
}
Koordinata(-3,7)

/*3.Hozz létre egy függvényt, ami a paraméterként kapott három szám közül visszaadja azt melyik a legnagyobb. – MelyikANagyobb(szamEgy, szamKetto, szamHarom)*/
function MelyikANagyobb(szamEgy, szamKetto, szamHarom){
	if(szamEgy>szamKetto && szamEgy>szamHarom){
		return szamEgy;
	}
	else if (szamKetto>szamEgy && szamKetto>szamHarom){
		return szamKetto;
	}
    else {
    	return szamHarom;
    }
}
document.write(MelyikANagyobb(11,11,12));

/*4.Készíts egy eljárást, ami egy paraméterként megadott szorgalom jegy alapján, megjeleníti a hozzá tartozó szöveges értékelést (hanyag, változó, jó, példás). - SzorgalomSzovegesErtekeles(jegy)*/
function SzorgalomSzovegesErtekeles(jegy){
	if(jegy==5){
		document.write(`PELDAS az ${jegy} szöveges megfelelője`);
	}
	else if(jegy==4){
		document.write(`JO a ${jegy} szöveges megfelelője`);
	}	
	else if(jegy==3){
		document.write(`VALTOZO a ${jegy} szöveges megfelelője`);
	}
	else if(jegy==2){
		document.write(`HANYAG a ${jegy} szöveges megfelelője`);
	}
	else{
		document.write(`A ${jegy} érték hibás bemeneti adat!`);
	}
}
SzorgalomSzovegesErtekeles(2)

/*5.Készíts egy függvény, aminek megadunk paraméterként egy életkort, és ha az 18 év alatti akkor logikai hamis különben logikai igazzal tér vissza – TizennyolcPlusz(kor)*/
function TizennyolcPlusz(kor){
	return kor>=18
}
document.write(TizennyolcPlusz(19));


/*6.Hozz létre egy függvényt, ami a paraméterként kapott számokból visszaadja mekkora a legnagyobb közös osztójuk. – LNKO(szamEgy, szamKetto)*/
function  LNKO(szamEgy, szamKetto){

    let kisebb=szamEgy;
    if(szamKetto<szamEgy){
        kisebb=szamKetto;		
    }
    let lnko=1;
    for(let i=2;i<=kisebb;i++){
        if(szamEgy%i==0 && szamKetto%i==0){
            lnko=i;
        }
    }
    document.write(`A ${szamEgy} és ${szamKetto} LegNagyobb Közös Osztója: ${lnko}`);
    
}
LNKO(112,576)

/*7.Készíts egy eljárást, ami 3 paraméterként kapott érték alapján kigenerál egy számtani sorozatot. – SzamtaniSorozatGenerator(elsoElem, kulonbseg, elemSzam)*/

function SzamtaniSorozatGenerator(elsoElem, kulonbseg, elemSzam){
	for(let i=0;i<elemSzam;i++){
		document.write(elsoElem+",");
    	elsoElem=elsoElem+kulonbseg;
    }
}
SzamtaniSorozatGenerator(2,10,5)


/*8.Készíts egy függvényt, ami a paraméterként megkapott számról eldönti, az prím-e vagy sem. Visszatérési értéke logikai típusú kell legyen: true vagy false – PrimFuggveny(vizsgaltSzam)*/

function PrimFuggveny(vizsgaltSzam){
let oszto=0;
	for(let i=1;i<=vizsgaltSzam;i++){
		if(vizsgaltSzam%i==0){
    		oszto++;
    	}
	}
	return oszto == 2
}
document.write(PrimFuggveny(9))


/*9.Hozz létre egy függvényt, ami a paraméterként megadott intervallumban, kigenerál egy egész páros számot. – ParosGenerator(alsoHatar, felsoHatar)*/
<script>
function ParosGenerator(alsoHatar, felsoHatar){
	
	let randomSzam= Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
    if(randomSzam%2==0){
    	return randomSzam
    }
    else if(randomSzam==felsoHatar){
    	randomSzam=randomSzam-1
		
    }
    else {
    	randomSzam=randomSzam+1
    }
    return randomSzam;
}
document.write(ParosGenerator(1, 100))


/*10.Készíts egyjárást, ami a paraméterként kapott érték alapján, kigenerálja a kettő hatványaiból, egymás utáni sorozatot 1-től kezdve. – KettoHatvanyai(elemSzam)*/

function KettoHatvanyai(elemSzam){
	for(let i=1;i<=elemSzam;i++){
		let hatvany=2**i;{
    		document.write(hatvany+",");
        }
    }
}
KettoHatvanyai(15);



/*11.Készíts egy függvényt, ami a paraméterként kapott 3 oldalméret alapján eldönti, az érékekkel szerkesztett háromszög szerkeszthető-e. A visszatérési érték legyen logikai típusú: true vagy false. SzerkeszhetoHaromszog(aOldal,bOldal,cOldal)*/


function SzerkeszhetoHaromszog(aOldal,bOldal,cOldal){
return aOldal+bOldal>cOldal && aOldal+cOldal>bOldal && bOldal+cOldal>aOldal
}
document.write(SzerkeszhetoHaromszog(8,12,20));


/*12.Készítsetek 2 függvényt, az egyik egy négyzet kerületét adja vissza, a másik a területét. Old meg hogy mindkét eredmény azonos méretű oldal értéknél jelenjen meg, egy eljárás segítségével. Próbáld beágyazni az elkészített függvényeidet. -  NegyzetKerulet(aOldal), NegyzetTerulet(aOldal), EredmenyKiirato()*/
function NegyzetKerulet(aOldal){
	return aOldal*4
}

function NegyzetTerulet(aOldal){
	return aOldal*aOldal
}

function EredmenyKiirato(aOldal){
	document.write(NegyzetKerulet(aOldal))
    document.write("<hr>")
    document.write(NegyzetTerulet(aOldal))
}
EredmenyKiirato(10)

