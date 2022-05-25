export function pintarCanciones(canciones) {

   //FUNCTION PARA RECORRER UN ARREGLO 
let fila=document.getElementById("fila")

canciones.forEach(function(cancion) {

  

    //Rutina para llenado
    let columna=document.createElement("div");
    columna.classList.add("col");

    let tarjeta=document.createElement("div");
    tarjeta.classList.add("card","h-100","shadow"); 

    let audio=document.createElement("audio");
    audio.classList.add("w-100");
    audio.setAttribute("controls","controls");
    audio.src=cancion.preview_url;  
    
    let foto=document.createElement("img");
    foto.classList.add("w-100","img-fluid");
    foto.src=cancion.album.images[0].url;
    
    let nombreCancion=document.createElement("h6");
    nombreCancion.classList.add("text-center","my-3");
    nombreCancion.textContent=cancion.name; 


    //Padres e hijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(audio); 
    tarjeta.appendChild(nombreCancion); 
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})
    

    
}


