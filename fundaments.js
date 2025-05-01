// Variables
var Cantidad_Alexa = "31"; //no utilizar la palabra clave var en JavaScript es porque tiene un alcance de función o global
let Agregar_A_La_Lista = true;
const nombre_Vendedor = "Amazon.com";

// Comentario: Las Alexas en Amazon son más baratas que en Ecuador

// Strings
let question = "¿Agregar una alexa al carrito? -";
let precio_Alexa = 49.99;
let nombre_Alexa = "Echo Dot (5.ª generación, modelo de 2022) | versión internacional con adaptador de corriente";
console.log(question, Agregar_A_La_Lista);
console.log(`El nombre del dispositvo es ${nombre_Alexa} y tiene su costo es ${precio_Alexa}`);
console.log('La ' + nombre_Alexa + ' la oferta: ' + nombre_Vendedor);
console.log("");

// Números
console.log(typeof(precio_Alexa));
console.log("Precio de la Alexa con impuestos", (precio_Alexa +20).toFixed(2));
console.log("Precio de la Alexa con impuestos", (precio_Alexa -10).toFixed(2));
console.log("Precio de la Alexa si se envía a China", (precio_Alexa *10).toFixed(2));
console.log("Precio de la Alexa con descuento navideño y del Black Friday", (precio_Alexa %20).toFixed(2));
console.log("");

// Números: Incremento y Decremento 
console.log(++precio_Alexa);
console.log(precio_Alexa++);
console.log("");

console.log(--precio_Alexa);
console.log(precio_Alexa--);
console.log("");

// Números: Método Math 
console.log("Existen más métodos pero se usarán estos para la página web")
console.log(Math.round(precio_Alexa));
console.log(Math.ceil(precio_Alexa));
console.log(Math.sqrt(precio_Alexa));
console.log("");


//Conversión de números 
console.log("Conversión de números");
console.log(Number.parseInt(precio_Alexa));
console.log(Number.parseFloat(precio_Alexa));
console.log(Number.parseFloat(precio_Alexa));
console.log(`${precio_Alexa}`)
console.log("");

// Booleanos 
console.log("Booleanos, operador de adición");
let precio_Alexa_descuento = 39.99;
precio_Alexa_descuento += 5;
console.log(precio_Alexa_descuento)
console.log("");

console.log("Operador de comparación");
console.log(precio_Alexa == precio_Alexa_descuento);

console.log("Evaluar tipo de dato y contenido");
console.log(precio_Alexa === precio_Alexa_descuento);
console.log("")

// Condicionales
console.log("Condicional if");
const carritoCompras = ['Alexa', nombre_Alexa]

if (carritoCompras.length!=0)
{
    console.log("Proceder al pago de los productos")
}
else{
    console.log("Agregar productos")
}

// Bucles
console.log("Bucle if")
const contador = 10

for (let i = contador; i >= 0; i--) {
    
    i <=0 ? console.log("Compra realizada"):console.log(i);
}

console.log("Bucle While")

let contador2 = 10
while (contador2 >= 0)
{
    contador2<=0 ? console.log("Compra de Alexa en proceso"):console.log(contador)
    contador2 --
}
console.log("")


// Uso del var en una función
console.log("Uso del var")
 var estado = true
 if (estado) {
     var estado = false
 }
 console.log(estado)
 for (var i = 0; i < 10; i++) 
 {
     console.log(i)
}
console.log(i);

console.log("");


// Uso del let
console.log("Uso del let")

 let estadoUno = true
 if (estadoUno) {
     let estadoUno = false
     console.log(estadoUno)
 }
 console.log(estadoUno)

 for (let i = 0; i < 10; i++) 
 {
     console.log(i)
 }
 console.log(i)

 console.log("");

// Uso del const
console.log("Uso del const")
 const estadoDos = true
 if (estadoDos) {
     const estadoDos = false
     console.log(estadoDos)
 }
 console.log(estadoDos)

