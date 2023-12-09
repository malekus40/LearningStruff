let movies = [
    "The fantastic Mr. For",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]

const movie = movies.find(movie => {
    return movie.includes('Mrs');
})
const books = [{
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.24,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'Changing My Mind',
        authors: ['Zadie Smith'],
        rating: 3.83,
        genres: ['nonfiction', 'essays']
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jess Smith'],
        rating: 4.25,
        genres: ['fiction', 'graphic novel', 'fantasy']
    },
    {
        title: 'America Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'A gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        genres: ['fiction', 'historical fiction']
    },
    {
        title: 'The Name of the Wind',
        authors: ['Patrick Rothfuss'],
        rating: 4.54,
        genres: ['fiction', 'fantasy']
    },

]
books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if (!groupedBooks[key]) groupedBooks = [];
    groupedBooks.push(book);
    return groupedBooks;
}, {})


const goodBook = books.filter(b => (b.rating > 4.3));
const fantasyBooks = books.filter(book => (
    book.genres.includes('fantasy') || book.genres.includes('essays')
))

const prices = [400.50, 300, 99.99, 35.99, 12.00, 9500];
const greet = (person, greeting = 'hi', punctuation = '!') => {
    console.log(`${greeting}, ${person}${punctuation}`)
}

Math.max(prices);

const color = ['red', 'orange', 'yellow', 'green'];
function giveMeFour(a,b,c,d){
    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
    console.log('d', d)
}

const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];
const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];
const cnidaria = ['fire coral', 'moon jelly'];
const mollusca = [...cephalopods,...gastropods]; 

const copyMollusca = [...mollusca];

const feline = {
    legs: 4,
    family: 'Felidae'
};
const canine = {
    family: 'Caninae',
    furry: true
};
const dog = {
    ...canine,
    isPet: true,
    adorable: true
};

function sum(...arg){
   return arg.reduce((total, currVal) => (total + currVal))
}
const raceResults = [
    'John Senna',
    'Bruce lee', 
    'Van Dam',
    'Vladimir Putin',
    'Biden',
    'Trump'
]

const [first,second,,presidentOfRussia,...others] = raceResults;
const runner = {
    first: "Eliud",
    last: "kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the golden Heart of Kenya"
}

function print({first, last, title}){
    console.log(`${first}, ${last}, ${title}`)
}

const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json',
]
function parseResponse([protocol, statusCode, contentType]){
    console.log(`Status ${statusCode}`)
}
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';


const team = {
    [role]: person,
    [role2]: person2,
    [1+6+9]: 'sixteen'
}

function addProp(obj, k , v){
    const copy = {...obj};
    copy[k] = v;
    return copy;
}

const res = addProp(team,'happy', ':)')
const addProp = (obj, k, v) => ({...obj,[k]: v})
