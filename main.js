function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const url = 'https://www.moogleapi.com/api/v1/characters/?results=10';
const ul = document.getElementById('ffchars');

let chars;

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        chars = data.results;
        console.log(chars);
        
        chars.map(char => {
            console.log(char.name)
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');

            img.src = char.picture;
            span.innerText = `${char.name}`;

            append(li, img);
            append(li, span);
            append(ul, li);
        })

    })






/*
//Baseball Project Code
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ffchar = document.getElementById('ffchar');

const url = 'https://www.moogleapi.com/api/v1/characters/?results=10';

let ffchars;

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        ffchars = data.results;
        console.log(ffchars)

        ffchars.map(ffchar => {
            console.log(ffchar.name.last)
        })

        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
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