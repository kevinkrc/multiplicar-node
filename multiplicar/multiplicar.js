// REQUIREDS
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

let listarTabla = (base, limite = 10) =>{
    return new Promise((resolve, reject) => {
        if(!Number(base) && !Number(limite)){
            reject('La base o el limite estan mal, ingrese un valor valido');
            return;
        }
        let contenido ="";
        
        for (let i = 1; i <= limite; i++){
            
            contenido += `${base} * ${i} = ${base*i}\n`;

        }
        contenido += "==============================================".blue;
        resolve(contenido);
    });
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if(!Number(base) || !Number(limite)){
            reject('Por favor ingrese un numero');
            return;
        }

        let contenido = "";

        for (let i = 1; i <= limite; i++){
            
            contenido += `${base} * ${i} = ${base*i}\n`;

        }
        

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, contenido, (err) => {
            if (err) 
                reject (err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}