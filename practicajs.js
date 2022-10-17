var fecha=document.getElementById("fecha");
const Reyesmagos=document.getElementById("reyesmagos");
var fecha2= new Date(fecha2);
Reyesmagos.addEventListener("click",funtion(){reyesMagos(fecha);});

function reyesMagos(fecha2){
    alert("arriba");
    
    var dia=fecha.getDate();
    var mes=fecha.getMonth();
  

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
        dias_faltan=dias_faltan + 334;
        break;
    case 1:
        dias_faltan=dias_faltan + 306;
        break;
    case 2:
        dias_faltan=dias_faltan + 275;
        break;
    case 3:
        dias_faltan=dias_faltan + 245;
        break;
    case 4:
        dias_faltan=dias_faltan + 214;
        break;
    case 5:
        dias_faltan = dias_faltan + 184;
        break;
    case 6:
        dias_faltan = dias_faltan + 153;
        break;
    case 7:
        dias_faltan=dias_faltan + 122;
        break;
    case 8:
        dias_faltan=dias_faltan + 92;
        break;
    case 9:
        dias_faltan=dias_faltan + 61;
        break;
    case 10:
        dias_faltan=dias_faltan+ 31;
        break;
    case 11:
        dias_faltan=dias_faltan;
        break;
    default :
        alert("algo va mal");
        break;	
        
    }
    
   alert("Quedan "+ dias_faltan + " dias");

}