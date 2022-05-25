//PASOS PARA CONSUMIR UN API CON JS PURO

//.1 DECLARO LA URI
const URI= "https://api.spotify.com/v1/artists/4V8LLVI7PbaPR0K2TGSxFF/top-tracks?market=US";

//0.2 DECLARO LOS PARAMETROS DE LA PETICION (QUE VOY HACER)

const token= "Bearer BQDaY-tPSCxZ9VTchBHfrRSeFJzdCcQ-9hugluShgP1j5taP4ILEEtSHGURhPWISxeW3AqsmZucId-MNOvw"

const peticion={
    method:"GET",
    headers:{Authorization:token}
}

//DECLARO EL FETCH (VOY AL SERVIDOR)

fetch(URI,peticion)
.then(function(respuesta) {
    return(respuesta.json());
})

.then(function(respuesta) {
    console.log(respuesta.tracks); //respuesta de un objeto
    pintarCanciones(respuesta.tracks); 
})

.catch(function(respuesta) {
    console.log(respuesta);
});

//FUNCTION PARA RECORRER UN ARREGLO 
let fila=document.getElementById("fila")

function pintarCanciones(canciones) {

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
    
    let nombreCancion=document.createElement("span");
    nombreCancion.classList.add("text-center");
    nombreCancion.textContent=cancion.name; 


    //Padres e hijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(audio); 
    tarjeta.appendChild(nombreCancion); 
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
})
    
}

//Rutina para consumir API con metodo post 
//para donde voy (uri)
const URIPOST="https://accounts.spotify.com/api/token"; 

//2 almaceno los datos que voy a enviar 
let dato1="client_id=47a6897cb244484db43668128f911f31"; 
let dato2="client_secret=232c2d34195141e28b1056ed990135e2"; 
let dato3="grant_type=client_credentials";

//3 configuro la peticion

const peticionPost={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+"&"+dato2+"&"+dato3+"&"


}  

//voy al servidor a consumir el servicio}
/*
fetch(URIPOST,peticionPost)
.then(function(respuesta) {

    return respuesta.json()
})
.then(function(respuesta) {

   // console.log(respuesta)
    let token=respuesta.token_type+' '+respuesta.access_token
    console.log(token)
})  
.catch(function(respuesta) {

    console.log(respuesta);
})*/