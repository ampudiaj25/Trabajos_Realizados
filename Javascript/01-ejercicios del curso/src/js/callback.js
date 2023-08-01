
const heroes={
    capi:{
        nombre: 'capitan',
        poder: 'nada'
    }
}


export const buscarHeroe=(id,callback)=>{
    const heroe=heroes[id];
    if (heroe) {
        callback(null,heroe);
    }else{
        callback(`No existe un heroe con el id ${id}`);
    }
    
}

