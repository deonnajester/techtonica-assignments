let newIngredient = document.createElement('li');
newIngeedient.textContent ='1/2 teaspoon of cinnamon';
document.querySelector('').appendChild(newIngredient);

let checkbox = document.createElement("input");

checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

let label = document.createElement("label");

label.htmlFor = 'id';

label.appendChild(
  document.createTextNode("This create the label for checkbox.")
  );


