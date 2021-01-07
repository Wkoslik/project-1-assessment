console.log('yodel');

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const valueDOM = document.getElementById("countamount");
let value = 0;


/*Option One*/
/*
//add function
const add = () =>{
    //get the user input
    let input = parseInt(document.getElementById("input").value);

    //add the user input to the value
    value += input;
    //update the DOM to show the new value
    valueDOM.innerText = value;

    //if the value is greater than or equal to zero, ensure the color is black
    if(value >= 0){
        valueDOM.style.color = "black";
    }
}

//subtract function
const subtract = () =>{
    //get user input
    let input = parseInt(document.getElementById("input").value);

    //subtract user input from value
    value -= input;
    //update the DOM to show new value
    valueDOM.innerText = value;

    //if the value is less than zero, change color to red;
    if(value < 0){
        valueDOM.style.color = "red";
    }
}

increase.addEventListener('click', add);
decrease.addEventListener('click', subtract);*/

/*Option Two*/

const buttons = document.getElementsByTagName("button");

//add or subtract based off of which button was clicked
const addOrSubtract = (e) => {
    //identify event location
    let eventLocation = e.target.id;
    //user input
    let input = parseInt(document.getElementById("input").value);

    //if the ID of the location is 'increase'
    if(eventLocation === "increase"){
        //add the input to the value
        value += input;
    } else {
        //otherwise subtract the input from the value
        value -= input;
    }

    //update the DOM
    valueDOM.innerText = value;

    //styling for if the value is positive or negative.
    if(value >= 0){
        valueDOM.style.color = "black";
    } else {
        valueDOM.style.color = "red";
    }
}

//add events to each button
const addEvents = () =>{
    //buttons itself is an HTML collection, not an array, so first convert to array and then for each button
    //could also use a for loop or just do what was done in option one. 
    //this option would be great for when you have a significant number of buttons.
    Array.from(buttons).forEach(element => {
        //add the event listener
        element.addEventListener('click', addOrSubtract);
    });
}

//calling the function
addEvents();