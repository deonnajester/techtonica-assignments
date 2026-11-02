// Step 1 This is my attempt to add content. There are still things that I need to work 
// through and trying to understand how the DOM will work.

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

myDiv.appendChild(checkbox);
myDiv.appendChild(label);
