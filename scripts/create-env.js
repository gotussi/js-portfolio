const fs = require('fs'); //modulo de node para guardar o enviar datos que podamos escribir en nuestro pc

fs.writeFileSync('./.env', `API=${process.env.API}\n`) 
//Metodo para crear archivo con cierta informacion(con un elemento)
//Este script se va a correr a nivel del servidor 