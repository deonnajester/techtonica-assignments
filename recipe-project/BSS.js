// Step 1 This is my attempt to add content. There are still things that I need to work 
// through and trying to understand how the DOM will work.

let newIngredient = document.createElement('li');
newIngeedient.textContent ='1/2 teaspoon of cinnamon';
document.querySelector('').appendChild(newIngredient);

// Step 2 wants to add a check mark as an element to a list. The example provided below 
// is what I used to get started. I will need to figure out the machanics of how I should
// change and make adjustments. 

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


// Step 3 requires the strikethough option when you click on the checkbox and using CSS


//Step 4 takes the strikethrough a little further with the element.

// Step 5 adds at least 1 media query. I have found a youtube link to add. 

