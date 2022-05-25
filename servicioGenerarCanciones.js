import{generarToken} from'./servicioGenerarToken.js'

//Llamar a la fuction generartoken

let tokenRespuesta= await generarToken()

let token=`${tokenRespuesta.token_type} ${tokenRespuesta.access_token}` 

//uri del servicio

const uri="https://api.spotify.com/v1/artists/4V8LLVI7PbaPR0K2TGSxFF/top-tracks?market=US"

const peticion={
    method:"GET",
    headers:{Authorization:token}
}
//consumo el servicio
export async function escucharCanciones() {
    let respuesta= await fetch(uri,peticion)

    return(respuesta.json())
}
