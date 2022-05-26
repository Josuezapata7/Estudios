var edad = 18;

if(edad >= 18){
    document.write("Eres mayor de edad <br></br>");
}else{
    document.write("Eres menor de edad <br></br>");
}

var pais = "Guatemala";
/*if(pais == "Guatemala"){
    document.write("Eres guatemalteco <br></br>");
}
else if(pais == "España"){
    document.write("Eres Español <br></br>");
}
else{
    document.write("No sabemos de donde eres! <br></br>");
}*/

switch(pais){

    case "Guatemala" : {

        document.write("Eres guatemalteco <br></br>");
        break;

    }

    case "España" : {

        document.write("Eres Español <br></br>");
        break;
    }

    default:{
        document.write("No sabemos de donde eres! <br></br>");
        break;
    }
    
}