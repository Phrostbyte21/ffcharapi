function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const url = 'https://randomuser.me/api/?results=10';
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





//Working Baseball Card Assignment Code
/*
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const url = 'https://randomuser.me/api/?results=10';
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

            img.src = author.picture.medium;
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