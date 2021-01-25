
/*
Here is the info we'll need to change for each coffee:
    pic - image src
    alt - alt tag
    day - Day of week
    name - Name of coffee
    color - color
    desc - description
*/

let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('day')){//Use query string data
    myDay = parseInt(urlParams.get('day'));
}
else{//Use date object
    myDay = myDate.getDay();
}

function coffeeTemplate(coffee){
    let myReturn = "";
    myReturn += `
    <p>
                <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
                <strong class="feature" id="coffee-highlight">${coffee.day}'s Coffee Special:</strong> 
                ${coffee.day}'s daily coffee special is <strong >${coffee.name}</strong>${coffee.desc}
            </p>
    `

    return myReturn;
}

switch(myDay){
    case 0:
        today = "Sunday";
        coffee = {
            name: "Mocha",
            color: "goldenrod",
            day: "Sunday",
            pic: "images/mocha.jpg",
            alt: "A picture of a Mocha",
            desc: `. A caffe mocha, also called mocaccino, is a chocolate-flavoured variant of a caffe latte.`
        };
        break;
    case 1:
        today = "Monday";
        coffee = {
            name: "Bubble Tea",
            color: "pink",
            day: "Monday",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of Bubble Tea",
            desc: `. Bubble tea is a tea-based drink. It includes chewy tapioca balls or a wide range of other toppings.`
        };
        break;
    case 2:
        today = "Tuesday";
        coffee = {
            name: "Caramel Latte",
            color: "chocolate",
            day: "Tuesday",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a Caramel Latte",
            desc: `. A Caramel Latte is made by mixing espresso with caramel syrup and pouring steamed milk on top.`
        };
        break;
    case 3:
        today = "Wednesday";
        coffee = {
            name: "Drip",
            color: "brown",
            day: "Wednesday",
            pic: "images/drip.jpg",
            alt: "A picture of a Drip Coffee",
            desc: `. Drip brew coffee, also known as filtered coffee, is made by letting hot water drip onto coffee grounds held in a coffee filter surrounded by a filter holder or brew basket.`
        };
        break;
    case 4:
        today = "Thursday";
        coffee = {
            name: "Cold Brew",
            color: "#6E2C00",
            day: "Thursday",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a Cold Brew Coffee",
            desc: `. Cold brew coffee is a process of brewing coffee slowly (12 hours) with cold water to produce a strong coffee concentrate, often served diluted with water or milk of choice.`
        };
        break;
    case 5:
        today = "Friday";
        coffee = {
            name: "Pumpkin Spice",
            color: "darkorange",
            day: "Friday",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a Pumpkin Spice latte",
            desc: `. The Pumpkin Spice Latte is a coffee drink made with a mix of traditional autumn spice flavors, steamed milk, espresso, and often sugar, topped with whipped cream and pumpkin pie spice.`
        };
        break;
    case 6:
        today = "Saturday";
        coffee = {
            name: "Frappaccino",
            color: "darksalmon",
            day: "Saturday",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a Frappaccino",
            desc: `. It consists of coffee or creme base, blended with ice and other various ingredients like flavored syrups, usually topped with whipped cream and or spices.`
        };
        break;
    default:
        break;
}

//console.log(queryString);
document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;
document.getElementById("coffee-highlight").style.color = coffee.color;

//alert(today);

