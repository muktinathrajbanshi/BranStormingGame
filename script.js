let cardsArray = [
    {
        "name": "CSS",
        "img": "./images/css.png",
    },
     {
        "name": "HTML",
        "img": "./images/html.png",
    },
     {
        "name": "jQuery",
        "img": "./images/jquery.png",
    },
     {
        "name": "JS",
        "img": "./images/js.png",
    },
     {
        "name": "Node",
        "img": "./images/node.png",
    },
     {
        "name": "Python",
        "img": "./images/python.png",
    }
]

const parentDiv = document.querySelector("#card-section");

// step 2: to duplicate each card
const gameCard = cardsArray.concat(cardsArray)
console.log(gameCard);

// step 3: Note that this method creates a new shuffled array instead of modifying the original one.

// const myNumbers = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor( Math.random()* (i + 1))
//         console.log(i, j);

//         let temp = array[i]
//         array[i] = array[j]
//         array[j] = temp        
//     }
//     return array;
// };

// const shuffledChild = myNumbers(gameCard)

let shuffledChild = Array.from(gameCard).sort(() => .5 - Math.random());

// step 1 to add the card 
for (let i=0; i<shuffledChild.length; i++) {
    const childDiv = document.createElement("div")
    childDiv.classList.add("card")
    childDiv.dataset.name = shuffledChild[i].name;
    childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;
    parentDiv.appendChild(childDiv)



}