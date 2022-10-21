const Reyesmagos=document.getElementById("reyesmagos");
Reyesmagos.addEventListener("click",reyesMagos,false);

const Fechayhora=document.getElementById("fechayhora");
Fechayhora.addEventListener("click",fechayhora,false);

const Area=document.getElementById("botonRadio");
Area.addEventListener("click",area,false);

const Aleatorio=document.getElementById("botonAleatorio");
Aleatorio.addEventListener("click",aleatorio,false);

const MitadCar=document.getElementById("mitadCar");
MitadCar.addEventListener("click",mitadCar,false);

const UltimoCaracter=document.getElementById("ultimoCaracter");
UltimoCaracter.addEventListener("click",ultimoCaracter,false);

const CadenaInversa=document.getElementById("cadenaInversa");
CadenaInversa.addEventListener("click",cadenaInversa,false);

const CadenaGuiones=document.getElementById("cadenaGuiones");
CadenaGuiones.addEventListener("click",cadenaGuiones,false);

const ContarVocales=document.getElementById("contarVocales");
ContarVocales.addEventListener("click",contarVocales,false);


function reyesMagos(){
    
    var fecha=document.getElementById("fecha").value
    var fecha2= new Date(fecha);
    var dia=fecha2.getDate();
    var mes=fecha2.getMonth();
    var dias_faltan=0;

    if(mes==0||mes==2||mes==4||mes==6||mes==7||mes==9||mes==11) {
        dias_faltan=31-dia;
    }
    if(mes==3||mes==5||mes==8||mes==10) {
        dias_faltan=30-dia;
    }
    if(mes==1) {
        
        dias_faltan=28-dia;
    }
    switch(mes) {
        case 0:
            dias_faltan=dias_faltan + 340;
            break;
        case 1:
            dias_faltan=dias_faltan + 312;
            break;
        case 2:
            dias_faltan=dias_faltan + 281;
            break;
        case 3:
            dias_faltan=dias_faltan + 251;
            break;
        case 4:
            dias_faltan=dias_faltan + 220;
            break;
        case 5:
            dias_faltan = dias_faltan + 190;
            break;
        case 6:
            dias_faltan = dias_faltan + 159;
            break;
        case 7:
            dias_faltan=dias_faltan + 128;
            break;
        case 8:
            dias_faltan=dias_faltan + 98;
            break;
        case 9:
            dias_faltan=dias_faltan + 67;
            break;
        case 10:
            dias_faltan=dias_faltan+ 37;
            break;
        case 11:
            dias_faltan=dias_faltan+6;
            break;
    default :
        alert("Introduce fecha");
        break;	
        
    }
    
   alert("Quedan "+ dias_faltan + " dias para reyes");

}


function fechayhora(){
    
    var fecha=new Date();
    var dia;
    var mes;
    fecha.toDateString();
    switch(fecha.getDay()){
        case 1:
            dia="lunes";
            break;
        case 2:
            dia="martes";
            break;
        case 3:
            dia="miercoles";
            break;
        case 4:
            dia="jueves";
            break;
        case 5:
            dia="viernes";
            break;
        case 6:
            dia="sabado";
            break;
        case 7:
            dia="domingo";
            break;
    }

    switch(fecha.getMonth()) {
        case 0:
            mes="enero";
            break;
        case 1:
            mes="febrero";
            break;
        case 2:
            mes="marzo";
            break;
        case 3:
            mes="abril";
            break;
        case 4:
            mes="mayo";
            break;
        case 5:
            mes="junio";
            break;
        case 6:
           mes="julio";
            break;
        case 7:
            mes="agosto";
            break;
        case 8:
            mes="septiembre";
            break;
        case 9:
            mes="octubre";
            break;
        case 10:
            mes="noviembre";
            break;
        case 11:
            mes="diciembre";
            break;
    
    }
    alert("Hoy es "+ dia + ", "+ fecha.getDate() + " de " + mes + " de " + fecha.getFullYear() + " y son las " + fecha.getHours() + ":" + fecha.getMinutes() + " horas");
}

function area(){

    var radio=document.getElementById("radio").value;
    var area= Math.PI * (radio*radio);
    var perimetro=2 * Math.PI * radio;
    alert("El área del circulo con radio " + radio + " es " + area.toFixed(2) + ", y el perímetro es " + perimetro.toFixed(2));
}

function aleatorio(){

    var numMin= document.getElementById("numMin").value;
    numMin=Number(numMin);
    var numMax= document.getElementById("numMax").value;
    numMax=Number(numMax);
    var num= Math.floor(Math.random() * (numMax-numMin) + numMin);
    alert("Numero aleatorio: " + num);
}

function mitadCar(){

    var cadena=document.getElementById("cadena").value;
    var longitud=cadena.length;
    var cadena2="";
    for(var i=0;i<longitud/2;i++){
        cadena2=cadena2 + cadena[i];
    }
    alert(cadena2);
}

function ultimoCaracter(){

    var cadena=document.getElementById("cadena").value;
    alert(cadena.substr(-1));
}

function cadenaInversa(){

    var cadena=document.getElementById("cadena").value;
    var cadena2=cadena.split("").reverse().join("");
    alert(cadena2);
}

function cadenaGuiones(){

    var cadena=document.getElementById("cadena").value;
    var cadena2=cadena.split("");
    alert(cadena2.join("-"));
}

function contarVocales(){

    var cadena=document.getElementById("cadena").value;
    var vocales=cadena.match(/[aeiou]/gi).length;
    alert(vocales)
}