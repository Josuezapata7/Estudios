var amigos = ["Josue","Daniel","Alejandro","Luis"];

for(var i = 0; i<amigos.length;i++){

    // Break nos permite cortar la ejecucion de un ciclo completamente.
    // Continue nos permite saltarnos a la siguiente ejecucion de un ciclo.

    if(amigos[i] == "Alejandro"){
        continue;
    }

    document.write(amigos[i] + "<br>");

    /*if(amigos[i] == "Alejandro"){
        break;
    }*/

}