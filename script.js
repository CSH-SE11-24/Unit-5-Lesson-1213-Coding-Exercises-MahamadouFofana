console.log("Script running")
// CODE ALONG
// Use querySelectorAll to select all the buttons

let butto = document.querySelectorAll("button")

// Use a for loop to console log each of the buttons in the array

for(i = 0; i < butto.length; i++){
  console.log(butto[i])
}


// Use getElementsByClassName to select all the p tags under the buttons

let cls = document.getElementsByClassName("color")

// Console log the length of the array to confirm you have all ten elements

console.log(cls.length)

// Add an event listener to the first button (red), such that when you click it, all the p tags turn red
/*
butto[0].addEventListener("click", function(event){
  for (let i = 0; i < cls.length; i++) {
    cls[i].style.color = "red";
  }
})

// LESSON 12 CODING EXERCISES
// Task 1
// Set up similar event listeners for the green and blue buttons

butto[1].addEventListener("click", function(event){
  for (let i = 0; i < cls.length; i++) {
    cls[i].style.color = "green";
  }
})

butto[2].addEventListener("click", function(event){
  for (let i = 0; i < cls.length; i++) {
    cls[i].style.color = "blue";
  }
})
*/
// Task 2
// Select the skunk button

let skun = document.getElementById("skunk")

// Use querySelectorAll to select all the images

let image = document.querySelectorAll(".ma")

// Add an event listener to the skunk button such that when you click it, all the images become skunk.webp

skun.addEventListener("click", function(event){
  image.src = "skunk.webp"
})


// LESSON 13 CODING EXERCISES
// Task 1 
// Write a for loop that goes through every image

for(let i = 0; i < image.length; i++){
  image[i].addEventListener("mouseover", function(event){
    image[i].style.width = "110%";
  })
  image[i].addEventListener("mouseout", function(event){
    image[i].style.width = "100%";
  })  
}

// In the for loop, add an event listener to each image such that when the mouse is over it, the width goes to 110%



// In the same for loop, add an event listener to each image such that when the mouse moves off it, the width goes back to 100%



// Task 2
// Set up the DOM manipulation flow such that when you click any of the p tags, the font family changes to "Indie Flower", cursive;

 for(let i = 0; i< cls.length; i++){
cls[i].addEventListener("click", function(event){
  cls[i].style.fontFamily = "Indie Flower"
})
}

// Task 3
// Set up the DOM manipulation flow such that when move your mouse over any of the buttons, the background color changes to black and the text color changes to white. It should change back to normal when you move your mouse off it.

    for(let i = 0; i< butto.length; i++){
butto[i].addEventListener("mouseover", function(event){
   butto[i].style.backgroundColor = "black"
  butto[i].style.color = "white"
})
butto[i].addEventListener("mouseout", function(event){
   butto[i].style.backgroundColor = "white"
  butto[i].style.color = "black"
})
    }

// Task 4 (Stretch)
// Re-write the code along/Task 1 code to have just 1 event listener for all 3 buttons to work correctly
// Hint: you may need to use an array to store colors to match buttons



let col = ["red", "green", "blue"]

  for(let i = 0; i < butto.length; i++){ 
butto[i].addEventListener("click", function(event){
  for (let j = 0; j < cls.length; j++) {

    console.log(col[i])
    cls[j].style.color = col[i];
    
  }
})
  }