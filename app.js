const desayunoMiniTorta = [
  {
    id: 1,
    name: "Mini cheesecake",
    precio: 500,
    img: "./imagenes/mini-cheesecake.jpg",
    alt: "Torta mini mini-cheesecake",
  },
  {
    id: 2,
    name: "Mini brownie",
    precio: 500,
    img: "./imagenes/mini-brownie.jpg",
    alt: "Torta mini brownie",
  },
  {
    id: 3,
    name: "Mini pastafrola",
    precio: 200,
    img: "./imagenes/pastafrolas.jpg",
    alt: "Mini pastafrola",
  },
  {
    id: 4,
    name: "Mini drip",
    precio: 500,
    img: "./imagenes/mini-drip.jpg",
    alt: "Torta mini dripcake",
  },
];

const desayunoAcompaniamiento = [
  {
    id: 5,
    name: "Alfajor frutos rojos x2",
    precio: 100,
    img: "./imagenes/alfajor-frutos.jpg",
    alt: "Alfajor centro frutos rojos",
  },
  {
    id: 6,
    name: "Budín porción x2",
    precio: 80,
    img: "./imagenes/budin.jpg",
    alt: "Budin marmolado",
  },
  {
    id: 7,
    name: "Macarons x2",
    precio: 120,
    img: "./imagenes/macarons.jpg",
    alt: "Macarons",
  },
  {
    id: 8,
    name: "Alfajores de maizena",
    precio: 140,
    img: "./imagenes/maizena.jpg",
    alt: "Bolsa alfajorcitos de maizena",
  },
  {
    id: 9,
    name: "Bizcochos salados",
    precio: 100,
    img: "./imagenes/bizcochos.jpg",
    alt: "Bolsa bizcochos salados",
  },
  {
    id: 10,
    name: "Super muffin con chips",
    precio: 80,
    img: "./imagenes/super-muffin.jpg",
    alt: "Super muffin con chips de chocolate",
  },
  {
    id: 11,
    name: "Alfajor ddl x2",
    precio: 120,
    img: "./imagenes/box-alfajores.jpg",
    alt: "Alfajores de dulce de leche",
  },
  {
    id: 12,
    name: "Cookie rocklet",
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

//Numero de productos en el carrito
$(`#nro-carrito`).ready(function () {
  let cantidadProducto = document.getElementById("nro-carrito");
  cantidadProducto.innerHTML = `<p id="nro-carrito">${carrito.length}</p>`;
});

//total a pagar
let mostrarTotal = document.getElementById("mostrarTotal");
let imprimirTotal = document.createElement("p");

//-----------------CREAR CARD TORTAS- PUSH AL CARRITO
for (const prodTorta of tortas) {
  $(".container-card").append(`
        <div id=${prodTorta.id} class="card">
          <img
            class="img-card"
            src=${prodTorta.img}
            alt=${prodTorta.alt}
          />
          <p class="descripcion"> ${prodTorta.name}</p>
          <p>$ ${prodTorta.precio}</p>
          <button id="btn${prodTorta.id}">Agregar al carrito</button>
          <div>
          <p id="animacion${prodTorta.id}agregada" class="agregado" style="display: none">Se agregó al carrito</p>
          <p id="animacion${prodTorta.id}carrito" class="ver-carrito" style="display: none">Mira tu lista en el carrito</p>
          </div>
        </div>
        `);

  //--------AGREGAR TORTAS AL CARRITO Y MOSTRAR SELECCION
  $(`#btn${prodTorta.id}`).on("click", function () {
    //mostrar seleccion
    let listaTortas = document.getElementById("listado");
    let seleccionado = document.createElement("tr");
    seleccionado.innerHTML = `<td>${prodTorta.name}</td>
                              <td>$${prodTorta.precio}</td>
  `;
    listaTortas.append(seleccionado);

    // PUSH AL CARRITO
    carrito.push(prodTorta);

    //Numero de productos en el carrito
    $(`#nro-carrito`).ready(function () {
      let cantidadProducto = document.getElementById("nro-carrito");
      cantidadProducto.innerHTML = `<p id="nro-carrito">${carrito.length}</p>`;
    });

    //SUMAR TOTAL
    let total = 0;
    for (const sumaCarrito of carrito) {
      total = total + sumaCarrito.precio;
      console.log(total);

      if (carrito.length != 0) {
        imprimirTotal.innerHTML = `Total a pagar $${total}`;
        mostrarTotal.prepend(imprimirTotal);
      }
    }
  });

  //---------------------------ANIMACION-----------------------------------
  $(`#btn${prodTorta.id}`).on("click", function () {
    $(`#animacion${prodTorta.id}agregada`)
      .css("color", "#9932cc", "text-align", "center")
      .fadeIn(1000)
      .delay(1000)
      .fadeOut(1000);
    $(`#animacion${prodTorta.id}carrito`)
      .css("color", "#9932cc")
      .css("text-align", "center")
      .delay(3000)
      .fadeIn(1000)
      .fadeOut(1000);
  });
}

//----------------CREAR CARD MINI-TORTA DESAYUNO - PUSH AL CARRITO
for (const prodMiniTorta of desayunoMiniTorta) {
  $(".mini-tortas").append(`
      <div id=${prodMiniTorta.id} class="card">
        <img
          class="img-card"
          src=${prodMiniTorta.img}
          alt=${prodMiniTorta.alt}
        />
        <p class="descripcion">${prodMiniTorta.name}</p>
        <p>$ ${prodMiniTorta.precio}</p>
        <button id="btn${prodMiniTorta.id}">Agregar al carrito</button>
        <div>
          <p id="animacion${prodMiniTorta.id}agregada" class="agregado" style="display: none">Se agregó al carrito</p>
          <p id="animacion${prodMiniTorta.id}carrito" class="ver-carrito" style="display: none">Mira tu lista en el carrito</p>
          </div>
      </div>`);

  //------------ HACER PUSH AL CARRITO Y MOSTRAR SELECCION
  $(`#btn${prodMiniTorta.id}`).on("click", function () {
    //mostrar seleccion
    let listaTortas = document.getElementById("listado");
    let seleccionado = document.createElement("tr");
    seleccionado.innerHTML = `<td>${prodMiniTorta.name}</td>
                              <td>$${prodMiniTorta.precio}</td>
  `;
    listaTortas.append(seleccionado);

    // PUSH AL CARRITO
    carrito.push(prodMiniTorta);

    //Numero de productos en el carrito
    $(`#nro-carrito`).ready(function () {
      let cantidadProducto = document.getElementById("nro-carrito");
      cantidadProducto.innerHTML = `<p id="nro-carrito">${carrito.length}</p>`;
    });

    //SUMAR TOTAL
    let total = 0;
    for (const sumaCarrito of carrito) {
      total = total + sumaCarrito.precio;
      console.log(total);

      if (carrito.length != 0) {
        imprimirTotal.innerHTML = `Total a pagar $${total}`;
        mostrarTotal.prepend(imprimirTotal);
      }
    }
  });

  //---------------------------ANIMACION-----------------------------------
  $(`#btn${prodMiniTorta.id}`).on("click", function () {
    $(`#animacion${prodMiniTorta.id}agregada`)
      .css("color", "#9932cc", "text-align", "center")
      .fadeIn(1000)
      .delay(1000)
      .fadeOut(1000);
    $(`#animacion${prodMiniTorta.id}carrito`)
      .css("color", "#9932cc")
      .css("text-align", "center")
      .delay(3000)
      .fadeIn(1000)
      .fadeOut(1000);
  });
}

//----------------CREAR CARD ACOMPAÑAMENTO DESAYUNO --- PUSH AL CARRITO
for (const prodAcompaniamiento of desayunoAcompaniamiento) {
  $(".acompañamiento").append(`
      <div id=${prodAcompaniamiento.id} class="card">
        <img
          class="img-card"
          src=${prodAcompaniamiento.img}
          alt=${prodAcompaniamiento.alt}
        />
        <p class="descripcion">${prodAcompaniamiento.name}</p>
        <p>$ ${prodAcompaniamiento.precio}</p>
        <button id="btn${prodAcompaniamiento.id}">Agregar al carrito</button>
        <div>
          <p id="animacion${prodAcompaniamiento.id}agregada" class="agregado" style="display: none">Se agregó al carrito</p>
          <p id="animacion${prodAcompaniamiento.id}carrito" class="ver-carrito" style="display: none">Mira tu lista en el carrito</p>
          </div>
      </div>`);

  // HACER PUSH AL CARRITO Y MOSTRAR SELECCION
  $(`#btn${prodAcompaniamiento.id}`).on("click", agregarAcompaniamiento);

  function agregarAcompaniamiento() {
    //mostrar seleccion
    let listaTortas = document.getElementById("listado");
    let seleccionado = document.createElement("tr");
    seleccionado.innerHTML = `<td>${prodAcompaniamiento.name}</td>
                               <td>$${prodAcompaniamiento.precio}</td>
   `;
    listaTortas.append(seleccionado);

    // Push al carrito
    carrito.push(prodAcompaniamiento);

    //Numero de productos en el carrito
    $(`#nro-carrito`).ready(function () {
      let cantidadProducto = document.getElementById("nro-carrito");
      cantidadProducto.innerHTML = `<p id="nro-carrito">${carrito.length}</p>`;
    });

    //SUMAR TOTAL
    let total = 0;
    for (const sumaCarrito of carrito) {
      total = total + sumaCarrito.precio;
      console.log(total);

      if (carrito.length != 0) {
        imprimirTotal.innerHTML = `Total a pagar $${total}`;
        mostrarTotal.prepend(imprimirTotal);
      }
    }
  }

  //---------------------------ANIMACION-----------------------------------
  $(`#btn${prodAcompaniamiento.id}`).on("click", function () {
    $(`#animacion${prodAcompaniamiento.id}agregada`)
      .css("color", "#9932cc", "text-align", "center")
      .fadeIn(1000)
      .delay(1000)
      .fadeOut(1000);
    $(`#animacion${prodAcompaniamiento.id}carrito`)
      .css("color", "#9932cc")
      .css("text-align", "center")
      .delay(3000)
      .fadeIn(1000)
      .fadeOut(1000);
  });
}

///////////////CALCULO TOTAL Y STORAGE///////////////////

// let botonPagar = document.getElementById("aPagar");
// botonPagar.addEventListener("click", totalAPagar);

// function totalAPagar() {
//   let total = 0;

//   for (const sumaCarrito of carrito) {
//     total = total + sumaCarrito.precio;
//     console.log(total);
//   }

//   imprimirTotal.innerHTML = `Total a pagar $${total}`;
//   mostrarTotal.append(imprimirTotal);

//   /////////////////////////////JSON////////////////////

//   const carritoJSON = JSON.stringify(carrito);
//   console.log(carritoJSON);

//   ////////////////LOCAL STORAGE//////////////////////
//   localStorage.setItem("carrito", carritoJSON);
// }

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
