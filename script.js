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

for (let i=0; i<cardsArray.length; i++) {
    const childDiv = document.createElement("div")
    childDiv.classList.add("card")
    childDiv.dataset.name = cardsArray[i].name;
    childDiv.style.backgroundImage = `url(${cardsArray[i].img})`;
    parentDiv.appendChild(childDiv)



}