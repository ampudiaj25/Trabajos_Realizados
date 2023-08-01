//import {buscarHeroe} from "./js/callback";
// import { async } from "regenerator-runtime";
// import {buscarHeroe } from "./js/promesas";
// import { async } from 'regenerator-runtime';
// import { id } from 'postcss-selector-parser';
// import { result } from 'lodash';
// import { match } from 'micromatch';
//import { async } from "regenerator-runtime";
// import { buscarJugador } from "./js/ejemplos-promesas";
// import { async } from 'regenerator-runtime';
//import { id } from "postcss-selector-parser";

// const idHero='capi';

// buscarHeroe(idHero)
// .then(console.log)
// .catch((err) => {
//     console.log(err)
// });

// const buscarH =async(id)=>{
//     try {
//     const resul= await buscarHeroe(id);
//     console.log(resul.poder);
//     } catch (error) {
//         console.log(error);
//     }
// }

// buscarH('capi');

// buscarHeroe(idHero,(err,heroe)=>{

//     if (err) {
//         console.error(err);
//     }else{
// console.log(heroe);
//     }
    
// });


// console.log('hola mund');
// const resultadoHeroe=async()=>{
// try {
//     const result= await buscarHeroe('cap')
//     console.log(result);
// } catch (error) {
//     console.log(error);
    
// }
// }
// await resultadoHeroe();
// console.log('hola mund2');

// const deportistas=['jug1','jug2','jug3'];

// const jugadorEncontradoPorId = async()=>{
//      const arrayJugadores=[];

//     try {
//       for(const deport of deportistas){
//         const idjugador= await buscarJugador(deport);
//         arrayJugadores.push(idjugador);
        
//       }
//     } catch (error) {
//         console.log(error);
//     }
//     console.log(arrayJugadores);
// }

// jugadorEncontradoPorId();


// const imprimirPersonas=async()=>{

//     const personas= await fetch('https://api.breakingbadquotes.xyz/v1/quotes/5');
//     const resultado= await personas.json();
//     console.log(resultado);
// }


// imprimirPersonas();
 





const estudiantes=[];
let numeroEstudiantes, i=0;
numeroEstudiantes=parseInt(prompt('Ingrese el numero de estudiantes que quiere ingresar'));
do {
    
    const estudiante={};
    estudiante.nombre=prompt('Ingrese el nombre del estudiante');
    estudiante.edad=prompt('Ingrese la edad del estudiante');
    
    const notas=[];
    const notaMatematicas=parseInt(prompt('ingrese la nota de Matematica'));
    const notaFisica=parseInt(prompt('Ingrese la nota de Fisica'));
    const notaQuimica=parseInt(prompt('Ingrese la nota de Quimica'));
    notas.push({materia:'Matematicas',nota: notaMatematicas});
    notas.push({materia: 'Fisica',nota: notaFisica});
    notas.push({materia: 'Quimica', nota: notaQuimica});
    
    const promedioEstudiante=notaMatematicas+notaFisica+notaQuimica/notas.length;
    estudiante.promedio=promedioEstudiante; 
    estudiante.notas=notas;
    estudiantes.push(estudiante);
    
    i++;
} while (i<numeroEstudiantes);

estudiantes.reverse((a,b)=>a.promedio - b.promedio);

for(const estudiante of estudiantes){
    let notaMayor=estudiante.notas.reduce((previous, current) => {
    return current.nota > previous.nota ? current : previous;});
    let notaMenor=estudiante.notas.reduce((previous, current) => {
    return current.nota < previous.nota ? current : previous; });

    console.log(`Nombre: ${estudiante.nombre} \n Edad: ${estudiante.edad} 
    \n Promedio: ${estudiante.promedio} \n Nota mayor: ${notaMayor.materia}: ${notaMayor.nota}
    \n Nota menor: ${notaMenor.materia}: ${notaMenor.nota} \n *******************************`);
 }
 
for (const estudiante of estudiantes){
     
    if  (estudiante.promedio < 3){ 
         console.log('Estudiantes que perdieron');
         console.log(`Nombre: ${estudiante.nombre} Promedio: ${estudiante.promedio}`);
         console.log('****************************************');
    }else{
        console.log('Todos los estudiantes aprobaron');
    }    
}

  

   
