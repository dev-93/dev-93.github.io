const quotes = [
    {
        id:0,
        quote: 'No trumpets sound when the important decisions of our life are made. Destiny is made known silently.',
        author: 'Agnes de Mille',
    }, {
        id:1,
        quote: 'No man ever listened himself out of a job.',
        author: 'Calvin Coolidge',
    }, {
        id:2,
        quote: 'No man ever listened himself out of a job.',
        author: 'Calvin Coolidge',
    }, {
        id:3,
        quote: 'Children are all foreigners.',
        author: 'Ralph Waldo Emerson',
    }, {
        id:4,
        quote: 'Great services are not canceled by one act or by one single error.',
        author: 'Benjamin Disraeli',
    }, {
        id:5,
        quote: 'Autumn is the bite of the harvest apple.',
        author: 'Christina Petrowsky',
    }, {
        id:6,
        quote: "Sometimes I've believed as many as six impossible things before breakfast.",
        author: 'Lewis Carroll',
    }, {
        id:7,
        quote: "A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.",
        author: 'G. K. Chesterton',
    }, {
        id:8,
        quote: "When you make a mistake, admit it. If you don't, you only make matters worse.",
        author: 'Ward Cleaver',
    }, {
        id:9,
        quote: "There are two kinds of people, those who finish what they start and so on.",
        author: 'Robert Byrne',
    }, {
        id:10,
        quote: "That you may retain your self-respect, it is better to displease the people by doing what you know is right, than to temporarily please them by doing what you know is wrong.",
        author: 'William J. H. Boetcker',
    }
]

const quotesBox = document.querySelector("#quotes-box");
const quote = quotesBox.querySelector("p:first-child");
const author = quotesBox.querySelector("p:last-child");

const ranQuotesIndex = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[ranQuotesIndex].quote;
author.innerText = quotes[ranQuotesIndex].author;