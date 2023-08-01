import { async } from 'regenerator-runtime';
import './styles.css';
import { filter } from 'lodash';

const productos=[
    {
        id:1,
        nombre:'arroz',
        marca:'Diana',
        stock: 5,
        ventas:[{nombreEmpleado:'miguel' , cantidad:2}],
        compra:[{nombre_empleado:'dilan',venta:698}]
    },
    {
        id:2,
        nombre:'Atun',
        marca:'D1',
        stock: 90,
        ventas:[{nombreEmpleado:'dairo' , cantidad:10}],
        compra:[{nombre_empleado:'dairo',venta:2}]
    },
    {
        id:3,
        nombre:'Aceite',
        marca:'Girasol',
        stock: 25,
        ventas:[{nombreEmpleado:'kevin' , cantidad:15}],
        compra:[{nombre_empleado:'camilo',venta:1}]
    },
    {
        id:4,
        nombre:'Agua',
        marca:'Cristal',
        stock: 60,
        ventas:[{nombreEmpleado:'danilo' , cantidad:8}],
        compra:[{nombre_empleado:'manuel',venta:9}]
    },
    {
        id:5,
        nombre:'Shampoo',
        marca:'Sedal',
        stock: 70,
        ventas:[{nombreEmpleado:'alfredo' , cantidad:19}],
        compra:[{nombre_empleado:'luisa',venta:4347}]
    },

];
const compraStockProducto= async()=>{
   try {
        let idProductoCompra=parseInt(prompt('Ingrese el ID del producto'));
        const productoEncontrado= await buscarIdProducto(idProductoCompra);  
        let cantidadagregarProducto=parseInt(prompt('Ingrese la cantidad agregar al producto'));
        let nombreEmpleadoCompra=prompt('Ingrese el nombre del empleado que realizo la compra');
        productoEncontrado.stock += cantidadagregarProducto;
       
        productoEncontrado.ventas.push({nombreEmpleado:nombreEmpleadoCompra , cantidad:cantidadagregarProducto});
       alert( mensajeProducto(productoEncontrado));

    } catch (error) {
        alert(error);
    }
}

const mensajeProducto=(producto)=>{
    let mensaje =`Nombre: ${producto.nombre}
    Marca: ${producto.marca}
    Stock: ${producto.stock}
    `;
    for (let venta of producto.ventas){
        mensaje += `\n Ventas: Nombre Empleado: ${venta.nombreEmpleado} Cantidad: ${venta.cantidad}`;
    }
    for (let compra of producto.compra){
        mensaje += `\n Compra: Nombre Empleado: ${compra.nombre_empleado} Cantidad: ${compra.venta}`;
    }

    return mensaje
}

const buscarIdProducto=(idproducto)=>{
    return new Promise((resolve,reject)=>{
     const producto=productos.find(producto=>producto.id===idproducto)
     if (producto) {
        resolve(producto);
     } else {
      reject(`El producto con el ID ${idproducto} no existe`);
     }
    });
}

const consultarProductoPorID= async()=>{
  try {
    const idConsultaProducto=parseInt(prompt('Ingrese Id producto'));
    const productoEncontrado= await buscarIdProducto(idConsultaProducto);
    alert(mensajeProducto(productoEncontrado));
 } catch (error) {
    console.log(error);
 }    
}

const venderProducto=async()=>{
try {
    const idProductoVenta=parseInt(prompt('Ingrese el ID del producto a vender'));
    const ventaProductoEncontrado= await buscarIdProducto(idProductoVenta);
    const cantidadProductoComprar=parseInt(prompt('Ingrese la cantidad que quiere comprar'));
     if(cantidadProductoComprar < ventaProductoEncontrado.stock){
     const nombreEmpleadoVenta=prompt('Ingrese el nombre del empleado que realizo la venta');
     ventaProductoEncontrado.stock-=cantidadProductoComprar;
     ventaProductoEncontrado.compra.push({
            nombre_empleado: nombreEmpleadoVenta,
            venta: cantidadProductoComprar
        });
     }else{
        alert('La cantidad supera el stock actual');
     }
     alert(mensajeProducto(ventaProductoEncontrado));
        
 } catch (error) {
    alert(error);
}
}

const consultarProductos=async()=>{
    let informacionProductos='';
  for (const producto of productos){
    informacionProductos+=`\n`+mensajeProducto(producto);
   }  
 alert(informacionProductos);   
}

const guardarProducto=async()=>{
    let idProducto=parseInt(prompt('Ingrese el Id del producto'));
    const producto= validarProductoPorId(idProducto);
    if (!producto) {
        let nombreProducto=prompt('Ingrese el nombre del producto');
        let marcaProducto=prompt('Ingrese la marca del producto');
        let stockProducto=parseInt(prompt('Ingrese la cantidad del producto'));
        const producto = {
            id: idProducto, 
            nombre: nombreProducto, 
            marca: marcaProducto, 
            stock: stockProducto, 
            ventas: [], 
            compra: []
        }
        productos.push(producto);
        console.log(productos);
    } else {
        console.log('El id ya existe');
    } 
}

const validarProductoPorId=(idproducto)=>{
    const producto=productos.find(producto=>producto.id===idproducto)
     if (producto) {
        return true;
        
     } else {
        return false;
     }
}

const productoConMayorStock=async()=>{
   let stockMayor= productos[0].stock;
   let indexProducto= 0;
   for (let i = 0; i < productos.length; i++) {
     if(productos[i].stock > stockMayor){
         stockMayor=productos[i].stock;
         indexProducto=i;
         }
    }
    const producto = productos[indexProducto]
    alert(mensajeProducto(producto));    
} 

const productoConMenorStock=async()=>{
    let stockMenor= productos[0].stock;
    let indexProducto= 0;
    for (let i = 0; i < productos.length; i++) {
      if(productos[i].stock < stockMenor){
        stockMenor=productos[i].stock;
          indexProducto=i;
          }
     }
     const producto = productos[indexProducto]
     alert(mensajeProducto(producto));    
 } 

 const productoMasVendido=async()=>{
    const initialValue=0;
    let indixeProductos=0;
    let ventaMayor=productos[0].ventas.reduce((acumulador,valorCurrent)=>acumulador+valorCurrent.cantidad,initialValue);
     
    for(let i=0;i<productos.length;i++){
     const ventasProductos=productos[i].ventas.reduce((acumulador,valorCurrent)=>
     acumulador+valorCurrent.cantidad,initialValue);

        if(ventasProductos>ventaMayor){
            ventaMayor=ventasProductos;
            indixeProductos=i;
          }
        }
     const producto=productos[indixeProductos];
     alert(`${mensajeProducto(producto)} \n \n Total ventas: ${ventaMayor}`);
}

const productoConMasCompras=async()=>{
    const initialValue=0;
    let indixeProductos=0;
    let compraMayor=productos[0].compra
                    .reduce((acumulador,valorCurrent)=>acumulador+valorCurrent.venta,initialValue);
     
 for(let i=0;i<productos.length;i++){
        const comprasProductos= productos[i].compra
                    .reduce((acumulador,valorCurrent)=>acumulador+valorCurrent.venta,initialValue);
        if(comprasProductos>compraMayor){
            compraMayor=comprasProductos;
            indixeProductos=i;
          }
        }
     const producto=productos[indixeProductos];
     alert(`${mensajeProducto(producto)} \n \n Total compras: ${compraMayor}`);
     
}
 
let operacionUsuario;
do {
    operacionUsuario= parseInt(prompt(`¿Que desea realizar? 
    1. agregar stock a producto por ID.
    2. consultar datos de un producto por id 
    3. comprar cantidad de un producto por id
    4. sacar un listado de todos los productos
    5. guardar un nuevo producto a la lista
    6. sacar el producto con mayor stock
    7. sacar el producto con menor stock
    8. sacar la informacion del producto mas vendido
    9. sacar la informacion del producto mas comprado
    10. salir `));  

    switch (operacionUsuario) {
        case 1:
            await compraStockProducto();
            break;
        case 2:
            await consultarProductoPorID();
            break;
        case 3:
            await venderProducto();
            break;
        case 4:
            await consultarProductos();
            break;
        case 5:
            await guardarProducto();
            break;
        case 6:
            await productoConMayorStock();
            break;
        case 7:
            await productoConMenorStock();
            break;
        case 8:
            await productoMasVendido();
            break;
        case 9:
            await productoConMasCompras();
            break;
        default:
            break;
    }
} while (operacionUsuario!==10);