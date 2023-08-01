import { async } from "regenerator-runtime"

const heroes={
    capi:{
        nombre: 'capitan',
        poder: 'nada'
    },
    spider:{
        nombre: 'spiderman',
        poder: 'Araña'
    },

}


// export const buscarHeroe=(id)=>{

//     const heroe=heroes[id];

//     return new Promise((correcto,incorrecto)=>{

// if (heroe) {
//     correcto(heroe);
// }else{
//     incorrecto(`no existe ${id}`);
// }

//     });
// }

// export const buscarHeroe=async(id)=>{
 
//     const heroe=heroes[id];

//     if (heroe) {
//         return heroe;
//         } else {
//             throw `No existe ${id}`;
        
//     }
// }
export const buscarHeroe=(id)=>{
 
    return new Promise((correcto,incorrecto)=>{
        const here=heroes[id];

        if (heroe) {
            correcto(heroe);
            } else {
                incorrecto(`no existe ${id}`)
            
        }
    })
}