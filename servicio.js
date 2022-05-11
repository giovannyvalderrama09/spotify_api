//PASOS PARA CONSUMIR UN API CON JS PURO

//.1 DECLARO LA URI
const URI= "https://api.spotify.com/v1/artists/22dFwJoRBV51ue5TGnC7Dt/top-tracks?market=US";

//0.2 DECLARO LOS PARAMETROS DE LA PETICION (QUE VOY HACER)

const token= "Bearer BQDh_w3es4TfLyT1RkgRqL-qnKr9nt2YSPH3VvvaT9la-ODLm3Rxzxz_M8nu7pJaH6jjVnQ7BOILv1ELu8_tOqLYjeop3GnCZPsTTZQ7aHar2Pqqm9rJrYiZaRweuKgX70fdB44Dpc7x8jcDhfslmB0LIihmoa444a0"

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
    console.log(respuesta); //respuesta de un objeto
    console.log(respuesta.tracks); 
    console.log(respuesta.tracks[5].preview_url); 
})

.catch(function(respuesta) {
    console.log(respuesta);
});