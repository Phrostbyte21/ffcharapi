function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function first(array, count = 30) {
    return array.slice(0, count);
}

function addAuthor(author) {
        if (author.pictures[0].url == null) {
            index += 1;
        } else {
            let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');

            img.src = author.pictures[0].url;
            span.innerText = `${author.name}\n\nAge: ${author.age}\nGender: ${author.gender}\nRace: ${author.race}`;

            append(li, img);
            append(li, span);
            append(ul, li);

            index += 1;
        }       
}

const url = 'https://www.moogleapi.com/api/v1/characters/';
const ul = document.getElementById('ffchars');
let index = 0;

document.getElementById('ffchars').className = "card cardFlip";

let authors;

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        authors = data;
        console.log(authors)
        
        first(authors).map(addAuthor)

    })

document.getElementById("addCard").addEventListener("click", () => {
    addAuthor(authors[index]);
    document.getElementById("addCard").innerHTML = "Added!";
    setTimeout(function(){ document.getElementById("addCard").innerHTML = "Add Another Card" }, 2000);
});




//Working Baseball Card Assignment Code
/*
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const url = 'https://randomuser.me/api/?results=30';
const ul = document.getElementById('ffchars');

let authors;

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        authors = data.results;
        console.log(authors)
        
        authors.map(author => {
            console.log(author.name)
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');

            img.src = author.picture.large;
            span.innerText = `${author.name.first} ${author.name.last}`;

            append(li, img);
            append(li, span);
            append(ul, li);
        })

    })
*/



/*
//Star Wars Addition (for reference ONLY)
import { people } from './people.js'
import { planets } from './planets.js'

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function first(array, count = 10) {
    return array.slice(0, count);
}

const peopleul = document.getElementById('person');
const planetsul = document.getElementById('planet');

first(people).map(person => {
// people.slice(0, 9).map(person => {
    let li = createNode('li'),
        span = createNode('span');

    span.innerText = `${person.name}`;

    append(li, span);
    append(peopleul, li);
})

first(planets).map(planet => {
        let li = createNode('li'),
            span = createNode('span');
    
        span.innerText = `${planet.name}`;
    
        append(li, span);
        append(planetsul, li);
    })
*/