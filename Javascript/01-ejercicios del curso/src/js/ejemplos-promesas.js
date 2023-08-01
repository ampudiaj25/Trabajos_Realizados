
const jugadores={
    jug1:{
        nombre:'mesi',
        pais: 'argentina'
    },
    jug2:{
        nombre:'cristiano',
        pais:'portugal'
    },
    jug3:{
        nombre:'falcao',
        pais:'colombia'
    }

}

export const buscarJugador=(id)=>{

    return new Promise((resolve,rejec)=>{
    
        const jugador= jugadores[id];

        if (jugador) {
            resolve(jugador);
        } else {
            rejec(`El ID no existte ${id}`);
        }


    })
}