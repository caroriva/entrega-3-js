const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.querySelector("#form");
const pizzaInput = document.querySelector("#pizza-input");
const pizzaContainer = document.querySelector("#pizza-container");

// const pizzasBuscadas = JSON.parse(localStorage.getItem("foundPizza")) || [];

const saveToLocalStorage = (pizza) => {
  localStorage.setItem("foundPizza", JSON.stringify(pizza));
};

const isEmpty = (input) => {
  return !input.value.trim().length;
};

const isExistingPizza = (input) => {
  return pizzas.find((pizza) => pizza.id === parseInt(input.value.trim()));
};

const showError = (message) => {
  pizzaContainer.innerHTML = `<p>${message}</p>`;
};

const checkInput = (input) => {
  let valid = false;

  if (isEmpty(input)) {
    showError("Debe ingresar un número de pizza.");
    return;
  }

  if (!isExistingPizza(input)) {
    showError("El número de pizza ingresado no existe.");
    return;
  }

  valid = true;
  return valid;
};

const findPizza = (e) => {
  e.preventDefault();

  if (checkInput(pizzaInput)) {
    const pizza = pizzas.find(
      (pizza) => pizza.id === parseInt(pizzaInput.value.trim())
    );
    saveToLocalStorage(pizza);

    pizzaContainer.innerHTML = `<img src="${pizza.imagen}" alt="imagen de tu pizza">
      <p>Elegiste ${pizza.nombre}: $${pizza.precio}</p> `;
  }
};

const init = () => {
  form.addEventListener("submit", findPizza);
};

init();
