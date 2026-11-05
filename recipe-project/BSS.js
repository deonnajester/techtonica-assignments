// Step 1 This is my attempt to add content. There are still things that I need to work 
// through and trying to understand how the DOM will work.
// Always make sure you all your documents are in the same folder to prevent any errors 

let newIngredient = document.createElement('li');
newIngeedient.textContent ='1/2 teaspoon of cinnamon';
document.querySelector("#the-goodies").appendChild(newIngredient);

// Step 2 wants to add a check mark as an element to a list. The example provided below 
// is what I used to get started. I will need to figure out the machanics of how I should
// change and make adjustments. 
// After yesterdays conversation with Naomi, She explained that this is a part of the exercise that we  wroked through with PP
// Practice Forms and Media Queries. 
// when to use var and when to use let confuse me so I am choosing to use let with the JS. 

let goodies = document.querySelectorAll("#the-goodies li"); // I want to make sure that I select all the items in my list. It took me a secound to figure out thatt I was not seecting all items in my list. 
  let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
// I wanted to take this one step at a time to hopefully understand what I am showcasing. 
// I am pulling the JS elements from the picture shown the instructions on checklist step 2.

let label = document.createElement("label");

let itemText = item.textContent;
  item.textContent = "";

label.textContent = itemText; // i do not want to have double text

item.appendChild(checkbox);
item.appendChild(label);
});

// Step 3 requires the strikethough option when you click on the checkbox and using CSS
// .checked {text-decoration: line-through; color: #48A363;}

//Step 4 takes the strikethrough a little further with the element.

// Step 5 adds at least 1 media query. I have found a youtube link to add. I think I have to use @media in CSS for this too. 
// https://www.youtube.com/watch?v=25C0C3G4AUE
