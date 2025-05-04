// Objetos de la página principal de Instagram
const HistoriasInstagram = {
        historia1: {
            user: "lisbeth_malatay",
            estado: "Nueva historia",
            yoSigo: true,
            meSigue: true,
            cantidadHistorias: 1,
            horasDesdePublicacion: 1,
            mostrarResumen: function () {
                return `Usuario: ${this.user} | Estado: ${this.estado}`;
              }
        },
        historia2: {
            user: "andynovem",
            estado: "Historia sin ver",
            yoSigo: true,
            meSigue: true,
            cantidadHistorias: 4,
            horasDesdePublicacion: 23
        },
        historia3: {
            user: "feid",
            estado: "Historia nueva",
            yoSigo: true,
            meSigue: false,
            cantidadHistorias: 3,
            horasDesdePublicacion: 4
        },
        historia4: {
            user: "david2405",
            estado: "Historia sin ver",
            yoSigo: false,
            meSigue: true,
            cantidadHistorias: 1,
            horasDesdePublicacion: 23
          },
          historia5: {
            user: "vivix_nna",
            estado: "Historia sin ver",
            yoSigo: true,
            meSigue: true,
            cantidadHistorias: 1,
            horasDesdePublicacion: 10
          },
          historia6: {
            user: "johann_sebs",
            estado: "Historia sin ver",
            yoSigo: true,
            meSigue: true,
            cantidadHistorias: 1,
            horasDesdePublicacion: 2
          },
          historia7: {
            user : "katt_stf",
            estado: "Historia nueva",
            yoSigo: true,
            meSigue: true,
            cantidadHistorias: 1,
            horasDesdePublicacion: 1
          },
          historia8: {
            user : "bethcast",
            estado: "Historia sin ver",
            yoSigo: true,
            meSigue: false,
            cantidadHistorias: 1,
            horasDesdePublicacion: 23
          }, 

      };
// Práctica para los Objetos 
console.log(HistoriasInstagram.historia8)
// Agregar un par de clave y valor al objeto
HistoriasInstagram.mi_Nombre_Usuario ="PatoP"
HistoriasInstagram.imagen ="Foto de perfil"
// Eliminar un par de clave y valor del objeto
delete HistoriasInstagram.imagen

// Destructuración de objetos 
const {estado, yoSigo, meSigue } = HistoriasInstagram.historia1;
console.log(estado, yoSigo, meSigue);

// Freeze 
Object.freeze(HistoriasInstagram)
console.log(Object.isFrozen(HistoriasInstagram));

// con seal no se puede agregar o eliminar propiedades, pero 
// si se puede modificar las propiedades
Object.seal(HistoriasInstagram)
console.log(Object.isSealed(HistoriasInstagram))
HistoriasInstagram.cantidadHistorias= 1
console.log(HistoriasInstagram);

// Copiar información
const usuario = HistoriasInstagram.historia6;
const datosAdicionales = { reaccion: "😍", IsClouseFriendsHistory: false };

const allInfo = { ...usuario, ...datosAdicionales };
console.log(allInfo);

// Uso del This 
console.log(HistoriasInstagram.historia1.mostrarResumen()); 

// Métodos de los objetos
console.log("Obtener las claves:",Object.keys(HistoriasInstagram))
console.log("Obtener los valores:",Object.values(HistoriasInstagram))
console.log("Obtener las claves y valores en un array:",Object.entries(HistoriasInstagram))

// ES6 Nombre abreviados de las propiedades
const user2 ="geanpatricioponceoto"
const anio_creacion = 2019

const usuario_correo_creacion = {
    user2,
    anio_creacion
}

console.log(`usuario_correo_creacion \n`);
console.log(" ");


// Arrays (Arreglos) página principal de Instagram
console.log("Arrays: Práctica de Laboratorio");

const UsuariosdeSugerencia = [
    "duckmc_666",
    "yuliyulexy",
    "irenezambon_",
    "calahorrano11_victoria",
    "alex_02.inga",
    "zoe_18dm"
  ];

const numSeguidores = [
    200,
    1500,
    500,
    200,
    100,
    500
]

const numSegudos = [
    500,
    20,
    200,
    1000,
    1900,
    667
]
// Primer método apra los arreglos
  const seguirUsuario = {
    usuarios: UsuariosdeSugerencia,
    
    mirarHistoria(indice) {
      if (indice >= 0 && indice < this.usuarios.length) {
        return `Empezaste a seguir a: ${this.usuarios[indice]}`;
      } else {
        return "No haz seguido a otro usuario";
      }
    }
  };
  console.log(seguirUsuario.mirarHistoria(2));
// Método dos del Array 
console.log("Número de elementos:", UsuariosdeSugerencia.length);
console.log("Número de elementos:", numSeguidores.length);
UsuariosdeSugerencia.length < 0 ? console.log("Seguir a todos \n") : console.log("No seguir a los usuarios sugeridos \n")

// Iteración 
// primera forma de iterar sobre los elementos de un arreglo 
console.log("Primera forma de iterar sobre los elementos de un arreglo")
for (let i=0 ; i<UsuariosdeSugerencia.length ; i++){
    console.log(UsuariosdeSugerencia[i]);
}
console.log("Segunda forma de iterar sobre los elementos de un arreglo")
UsuariosdeSugerencia.forEach((e,i)=>console.log(`${i} - ${e} \n`))

console.log("Tercera forma de iterar sobre los elementos de un arreglo")
const newUsuariosdeSugerencia= UsuariosdeSugerencia.map((e)=> `¿Quieres seguir a ${e} ?`)
console.log(UsuariosdeSugerencia , "\n");
console.log(newUsuariosdeSugerencia , "\n");

// Unir los 3 arrays 
const usuariosCompletos = UsuariosdeSugerencia.map((usuario, i) => {
    return {
      usuario: usuario,
      seguidores: numSeguidores[i],
      seguidos: numSegudos[i]
    };
  });
  
  console.log(usuariosCompletos);
  console.log("\n");

  console.log("Último método para recorrer un array (El array completo): ");
  usuariosCompletos.forEach((usuario) => {
    console.log(`Usuario: ${usuario.usuario} | Seguidores: ${usuario.seguidores} | Seguidos: ${usuario.seguidos}`);
  });

  console.log(" ")

  console.log("Métodos más importantes:")
  usuariosCompletos.push({
    usuario: "kopo_c",
    seguidores: 100,
    seguidos: 50,
  });
  console.log("Luego del push" , usuariosCompletos , "\n")

  usuariosCompletos.unshift({
    usuario: "zoe_18dm",
    seguidores: 500,
    seguidos: 667
  });
  console.log("Después de unshift:", usuariosCompletos , "\n");

usuariosCompletos.pop();
console.log("Después de pop:", usuariosCompletos , "\n");

usuariosCompletos.shift();
console.log("Después de shift:", usuariosCompletos , "\n");

const copiaUsuarios = usuariosCompletos.slice();
console.log("Copia con slice:", copiaUsuarios , "\n");

console.log("¿Es un arreglo?", Array.isArray(usuariosCompletos), "\n"); 

console.log("Cantidad de usuarios:", usuariosCompletos.length , "\n");

console.log("Cantidad de usuarios:", usuariosCompletos.reverse() , "\n");

// Destruturación 
const [primerUsuario, segundoUsuario, tercerUsuario, cuartoUsuario, quintoUsuario, sextoUsuario] = usuariosCompletos;
console.log(primerUsuario); 
console.log(segundoUsuario.usuario); 
console.log(tercerUsuario);
console.log(tercerUsuario.usuario);
console.log(" ")

// Rest y Spread Operator 
console.log("Spread Operator: ")

const nuevosUsuarios = [...UsuariosdeSugerencia, "davidzamora666", "isabeloto"];

console.log(nuevosUsuarios , "\n");

console.log("Rest Operator: ")

const [usuario1, usuario2, ...rest] = ["duckmc_666","yuliyulexy","irenezambon_",
    "calahorrano11_victoria", "alex_02.inga", "zoe_18dm"]
console.log(usuario1)
console.log(usuario2)
console.log(rest)













