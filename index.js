import{escucharCanciones} from'./servicioGenerarCanciones.js'

import{pintarCanciones} from'./pintarCanciones.js'

//Llamar a la fuction generartoken

let canciones= await escucharCanciones()

pintarCanciones(canciones.tracks)

