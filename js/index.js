// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(topping => {
    if (state.pepperoni) {
      topping.style.visibility = 'visible';
    } else {
      topping.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(topping => {
    if (state.mushrooms) {
      topping.style.visibility = 'visible';
    } else {
      topping.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(topping => {
    if (state.greenPeppers) {
      topping.style.visibility = 'visible';
    } else {
      topping.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce')
    if (state.whiteSauce) {
    sauce.style.visibility = 'visible';
    } else {
    sauce.style.visibility = 'hidden';
    }
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(crust => {
    if (state.glutenFreeCrust) {
      crust.style.visibility = 'visible';
    } else {
      crust.style.visibility = 'hidden';
    }
  });
}

// function renderButtons() {
//   // Iteration 3: add/remove the class "active" of each `<button class="btn">`
// combined into iteration1 event listener buttons

// }

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = basePrice;
  let menu = '';
  document.querySelectorAll('.panel.controls').forEach(ingredients => {
    if(state===true) {
      total += ingredients.price;
      menu += `<li>$${ingredient.price} ${ingredient.name}</li>`
    }
  })
  document.querySelector('.panel.price ul').innerHTML = menu
  document.querySelector('.panel.price strong').innerText = `$${total}`
  
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
let peppButt = document.querySelector('.btn.btn-pepperoni')
peppButt.addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;

  if(state.pepperoni){
    peppButt.className = 'btn btn-pepperoni active'
  } else {
    peppButt.className = 'btn btn-pepperoni'
  }
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

let mushButt = document.querySelector('.btn.btn-mushrooms')
mushButt.addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  if(state.mushrooms){
    mushButt.className = 'btn btn-mushrooms active'
  } else {
    mushButt.className = 'btn btn-mushrooms'
  }
  renderEverything();
});


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
let greenButt = document.querySelector('.btn.btn-green-peppers')
greenButt.addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  if(state.greenPeppers){
    greenButt.className = 'btn btn-green-peppers active'
  } else {
    greenButt.className = 'btn btn-green-peppers'
  }
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
let sauceButt = document.querySelector('.btn.btn-sauce')
sauceButt.addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  if(state.whiteSauce) {
    sauceButt.className = 'btn btn-sauce active'
  } else {
    sauceButt.className = 'btn btn-sauce'
  }
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

let crustButt = document.querySelector('.btn.btn-crust')
crustButt.addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  if(state.glutenFreeCrust) {
    crustButt.className = 'btn btn-crust active'
  } else {
    crustButt.className = 'btn btn-crust'
  }
  renderEverything();
});