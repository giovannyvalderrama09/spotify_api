//1 para donde voy (uri)
const uri="https://accounts.spotify.com/api/token"; 

//2 almaceno los datos que voy a enviar 
let dato1="client_id=47a6897cb244484db43668128f911f31"; 
let dato2="client_secret=232c2d34195141e28b1056ed990135e2"; 
let dato3="grant_type=client_credentials";

//3 configuro la peticion

const peticion={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+"&"+dato2+"&"+dato3+"&"
}  

//4 Consumir el servicio

 export async function generarToken() {
     
    let respuesta= await fetch(uri,peticion)
    return(respuesta.json())
}
