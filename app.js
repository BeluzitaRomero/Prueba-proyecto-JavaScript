const desayunoMiniTorta = [
  {
    id: 1,
    name: "mini cheesecake",
    precio: 500,
    img: "./imagenes/mini-cheesecake.jpg",
    alt: "Torta mini mini-cheesecake",
  },
  {
    id: 2,
    name: "mini brownie",
    precio: 500,
    img: "./imagenes/mini-brownie.jpg",
    alt: "Torta mini brownie",
  },
  {
    id: 3,
    name: "mini pastafrola",
    precio: 200,
    img: "./imagenes/pastafrolas.jpg",
    alt: "Mini pastafrola",
  },
  {
    id: 4,
    name: "mini drip",
    precio: 500,
    img: "./imagenes/mini-drip.jpg",
    alt: "Torta mini dripcake",
  },
];

const desayunoAcompaniamiento = [
  {
    id: 5,
    name: "alfajores frutos rojos",
    precio: 100,
    img: "/imagenes/alfajor-frutos.jpg",
    alt: "Alfajor centro frutos rojos",
  },
  {
    id: 6,
    name: "budín",
    precio: 80,
    img: "./imagenes/budin.jpg",
    alt: "Budin marmolado",
  },
  {
    id: 7,
    name: "macarons",
    precio: 120,
    img: "./imagenes/macarons.jpg",
    alt: "Macarons",
  },
  {
    id: 8,
    name: "alfajores de maizena",
    precio: 140,
    img: "./imagenes/maizena.jpg",
    alt: "Bolsa alfajorcitos de maizena",
  },
  {
    id: 9,
    name: "bizcochos salados",
    precio: 100,
    img: "./imagenes/bizcochos.jpg",
    alt: "Bolsa bizcochos salados",
  },
  {
    id: 10,
    name: "super muffin con chips",
    precio: 80,
    img: "./imagenes/super-muffin.jpg",
    alt: "Super muffin con chips de chocolate",
  },
  {
    id: 11,
    name: "Alfajor ddl",
    precio: 120,
    img: "./imagenes/box-alfajores.jpg",
    alt: "Alfajores de dulce de leche",
  },
  {
    id: 12,
    name: "Cookie chips/rocklet",
    precio: 80,
    img: "./imagenes/Cookie.jpg",
    alt: "Cookie con rocklets de colores",
  },
];

const tortas = [
  {
    id: 13,
    name: "Torta cheesecake",
    precio: 3000,
    img: "./imagenes/cheesecake.jpg",
    alt: "Torta cheesecake",
  },
  {
    id: 14,
    name: "Torta brownie",
    precio: 2700,
    img: "./imagenes/brownie-2.jpg",
    alt: "Torta brownie",
  },
  {
    id: 15,
    name: "Torta oreo",
    precio: 3200,
    img: "./imagenes/oreo.jpg",
    alt: "Torta oreo",
  },
  {
    id: 16,
    name: "Lemon pie",
    precio: 2500,
    img: "./imagenes/lemon-pie.jpg",
    alt: "Lemon pie",
  },
  {
    id: 17,
    name: "Torta dripcake",
    precio: 3000,
    img: "./imagenes/drip.jpg",
    alt: "Torta dripcake",
  },
];

class Cliente {
  constructor(dni, nombre, telefono, email, pedido) {
    this.dni = dni;
    this.nombres = nombre;
    this.telefono = telefono;
    this.email = email;
    this.pedido = pedido;
  }

  listaCarrito(cart) {
    return cart;
  }
}

//const arrayClientes = [];

const carrito = [];

// Variables para numero en carrito
// let totalEnCarrito = 1;
// let cantidadProducto = document.getElementById("nro-carrito");
// cantidadProducto.innerHTML = `<p id="nro-carrito">0</p>`;

//--------------------------------------CREAR CARD TORTAS- PUSH AL CARRITO
for (const prodTorta of tortas) {
  $(".container-card").append(`
        <div class="card">
          <img
            class="img-card"
            src=${prodTorta.img}
            alt=${prodTorta.alt}
          />
          <p class="descripcion">${prodTorta.name}</p>
          <p>$ ${prodTorta.precio}</p>
          <button id="btn${prodTorta.id}">Agregar al carrito</button>
        </div>`);

  //---------------------------------AGREGAR TORTAS AL CARRITO-
  $(`#btn${prodTorta.id}`).on("click", function () {
    //mostrar seleccion
    let listaTortas = document.getElementById("carrito-total");
    let tortaSelected = document.createElement("p");
    tortaSelected.innerHTML = `${prodTorta.name}  $${prodTorta.precio}`;
    listaTortas.append(tortaSelected);

    carrito.push(prodTorta);
  });
}

//---------------------------------CREAR CARD MINI-TORTA DESAYUNO - PUSH A DESAYUNO
for (const prodMiniTorta of desayunoMiniTorta) {
  $(".mini-tortas").append(`
      <div class="card">
        <img
          class="img-card"
          src=${prodMiniTorta.img}
          alt=${prodMiniTorta.alt}
        />
        <p class="descripcion">${prodMiniTorta.name}</p>
        <p>$ ${prodMiniTorta.precio}</p>
        <button id="btn${prodMiniTorta.id}">Agregar al carrito</button>
      </div>`);

  //------------ HACER PUSH AL ARRAY DESAYUNO Y
  $(`#btn${prodMiniTorta.id}`).on("click", function () {
    //mostrar seleccion
    let listaDesayuno = document.getElementById("carrito-total");
    let miniTortaSelected = document.createElement("p");
    miniTortaSelected.innerHTML = `${prodMiniTorta.name}  $${prodMiniTorta.precio}`;
    listaDesayuno.appendChild(miniTortaSelected);

    carrito.push(prodMiniTorta);
  });
}

//-------------------CREAR CARD ACOMPAÑAMENTO DESAYUNO --- PUSH A DESAYUNO Y CARRITO
for (const prodAcompaniamiento of desayunoAcompaniamiento) {
  $(".acompañamiento").append(`
      <div class="card">
        <img
          class="img-card"
          src=${prodAcompaniamiento.img}
          alt=${prodAcompaniamiento.alt}
        />
        <p class="descripcion">${prodAcompaniamiento.name}</p>
        <p>$ ${prodAcompaniamiento.precio}</p>
        <button id="btn${prodAcompaniamiento.id}">Agregar al carrito</button>
      </div>`);

  // HACER PUSH AL ARRAY DESAYUNO Y LUEGO PUSH DEL ARRAY DESAYUNO AL CARRITO
  $(`#btn${prodAcompaniamiento.id}`).on("click", agregarAcompaniamiento);

  function agregarAcompaniamiento() {
    //mostrar seleccion
    let listaDesayuno = document.getElementById("carrito-total");
    let acompaniamientoSelected = document.createElement("p");
    acompaniamientoSelected.innerHTML = `${prodAcompaniamiento.name}  $${prodAcompaniamiento.precio}`;
    listaDesayuno.appendChild(acompaniamientoSelected);

    carrito.push(prodAcompaniamiento);
  }
}

///////////////CALCULO TOTAL Y STORAGE///////////////////

let botonPagar = document.getElementById("aPagar");
botonPagar.addEventListener("click", totalAPagar);

function totalAPagar() {
  let total = 0;

  for (const sumaCarrito of carrito) {
    total = total + sumaCarrito.precio;
    console.log(total);
  }
  let mostrarTotal = document.getElementById("mostrarTotal");
  let imprimirTotal = document.createElement("p");
  imprimirTotal.innerHTML = `Total a pagar $${total}`;
  mostrarTotal.append(imprimirTotal);

  /////////////////////////////JSON////////////////////

  const carritoJSON = JSON.stringify(carrito);
  console.log(carritoJSON);

  ////////////////LOCAL STORAGE//////////////////////
  localStorage.setItem("carrito", carritoJSON);
}

// MODAL DE REGISTRO DE USUARIO

const abrirModal = document.getElementById("registrar-compra");
const modalContainer = document.getElementById("modal_container");
const cerrarModal = document.getElementById("cerrar-modal");

abrirModal.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

cerrarModal.addEventListener("click", modalClose);

function modalClose() {
  modalContainer.classList.remove("show");
}

//-----------------FORMULARIO

let formSubmit = document.getElementById("myForm");

formSubmit.addEventListener("submit", registrarDatos);

function registrarDatos(e) {
  e.preventDefault();

  let formulario = e.target;

  let nomApeIngresado = document.getElementById("nombreApellido").value;

  let dniIngresado = document.getElementById("dni").value;

  let telIngresado = document.getElementById("tel").value;

  let emailIngresado = document.getElementById("email").value;

  let cliente = new Cliente(
    dniIngresado,
    nomApeIngresado,
    telIngresado,
    emailIngresado,
    carrito
  );

  localStorage.setItem(1, JSON.stringify(cliente));

  console.log(JSON.parse(localStorage.getItem(1)));

  //let suCarrito = localStorage.getItem("carrito");

  //let clienteCart = cliente.listaCarrito(suCarrito);

  //console.log(`Pedido realizado: ${clienteCart}`);

  // Devolver el json a objeto y ver por consola

  formulario.reset();

  modalClose();
}

//---------------------modal carrito
$(document).ready(function () {
  $("#carrito-modal").hide();

  $("#carrito-toggle").click(function () {
    $("#carrito-modal").toggle("fast");
  });
});
