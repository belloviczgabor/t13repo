
const EuropaiUnio = [{
        orszag: "Ausztria",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Belgium",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Bulgária",
        csatlakozas: "2007.01.01"
    },
    {
        orszag: "Ciprus",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Csehország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Dánia",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Egyesült Királyság",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Észtország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Finnország",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Franciaország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Görögország",
        csatlakozas: "1981.01.01"
    },
    {
        orszag: "Hollandia",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Horvátország",
        csatlakozas: "2013.07.01"
    },
    {
        orszag: "Írország",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Lengyelország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Lettország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Litvánia",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Luxemburg",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Magyarország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Málta",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Németország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Olaszország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Portugália",
        csatlakozas: "1986.01.01"
    },
    {
        orszag: "Románia",
        csatlakozas: "2007.01.01"
    },
    {
        orszag: "Spanyolország",
        csatlakozas: "1986.01.01"
    },
    {
        orszag: "Svédország",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Szlovákia",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Szlovénia",
        csatlakozas: "2004.05.01"
    }
]
//1.feladat
document.write("Ennyi tagja van az Europai Unionak: "+EuropaiUnio.length)

let EuropaiUnioTombok=[]
for(let i=0;i<EuropaiUnio.length;i++){
	let jelenlegiOrszag=EuropaiUnio[i]
    EuropaiUnioTombok.push(jelenlegiOrszag)
}


//2.feladat
function csatlakozas2007(vizsgaltTomb){
   let csatlakozott=0;
    for(let i=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i].csatlakozas.split(".")[0]=="2007"){
            csatlakozott++;
        }
    }
    return csatlakozott;
}
document.write("<hr>")
document.write(csatlakozas2007(EuropaiUnio))


//3.feladat
function CsatlakozottEMagyarorszag(vizsgaltTomb,orszag){
let tomb=[]
for(let i=0;i<vizsgaltTomb.length;i++){
	tomb.push(vizsgaltTomb[i].orszag)
}
return tomb.includes(orszag)
}
document.write("<hr>")
if(CsatlakozottEMagyarorszag(EuropaiUnioTombok,'Magyarország')){

document.write("Igen")
}
else
document.write("Nem")
document.write("<hr>")


//4.feladat
function VoltECsatlakozas(vizsgaltTomb,honap){
   let VoltE=false;
    for(let i=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i].csatlakozas.split(".")[1]==honap){
            VoltE=true;
        }
    }
    return VoltE;
}
if(VoltECsatlakozas(EuropaiUnio,'05')){

document.write("Igen")
}
else
document.write("Nem")
document.write("<hr>")
//5.feladat
function UtolsoCsatlakozas(vizsgaltTomb){
	let utolsoOrszag=vizsgaltTomb[0]
    for(let i=0; i<vizsgaltTomb.length; i++){
       if(vizsgaltTomb[i].csatlakozas > utolsoOrszag.csatlakozas){
       		utolsoOrszag=vizsgaltTomb[i]
       }
    }
    return utolsoOrszag
}
document.write(UtolsoCsatlakozas(EuropaiUnio).orszag)
//6.feladat


