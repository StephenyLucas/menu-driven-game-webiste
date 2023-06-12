// creating an array and passing the number, questions, options, and answers
fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
.then(response=>{
  return response.json();
})














let questions = [

    {
    numb: 1,
    question: "Who discovered Penicillin?",
    answer: "Alexander Fleming",
    options: [
      "Ernst Chain",
      "Alexander Fleming",
      "Howard Florey",
      "Edward Jenner"
    ]
  },
    {
    numb: 2,
    question: "Which is the hottest planet in our solar system?",
    answer: "Venus",
    options: [
      "Pluto",
      "Mercury",
      "Neptune",
      "Venus"
    ]
  },
    {
    numb: 3,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Markup Language",
      "Hyper Tool Multi Language",
      "Hyper Text Multiple Language",
      "Hyper Text Makeup Language"
    ]
  },
    {
    numb: 4,
    question: "Who was the first woman President of India?",
    answer: "Pratibha Patil",
    options: [
      "Usha V. Naidu",
      "Pratibha Patil",
      "Indira Gandhi",
      "Kamala Nehru",
    ]
  },
    {
    numb: 5,
    question: "Who invented the Computer??",
    answer: "Charles Babbage",
    options: [
      "Charles Babbage",
      "Ada Lovelace",
      "Herman Hollerith",
      "Alan Turing",
    ]
  },
 
    {
     numb: 6,
     question: "Which planet in our Solar System takes the longest time to complete its revolution around the Sun?",
     answer: "Neptune",
     options: [
       "Mercury",
       "Venus",
       "Neptune",
       "Uranus",
     ]
   },


    {
     numb: 7,
     question: "Who successfully built and flew the world’s first Aeroplane?",
     answer: "Wilbur and Orville Wright",
     options: [
       "John, Robert and Ted Kennedy",
       "Frank and Jesse James",
       "Wilhelm and Jacob Grimm",
       "Wilbur and Orville Wright",
     ]
   },

    {
     numb: 8,
     question: "Which is the most sensitive organ in our body?",
     answer: "Skin",
     options: [
       "Eyes",
       "Skin",
       "Tongue",
       "Nose",
     ]
   },

    {
     numb: 9,
     question: "Who was the first Indian woman in Space?",
     answer: "Kalpana Chawla",
     options: [
       "Sunita Williams",
       "Sirisha Bandla",
       "Kalpana Chawla",
       "Cosmonaut Valentina Tereshkova",
     ]
   },

    {
     numb: 10,
     question: "Who is the first Indian to win a Nobel Prize?",
     answer: "Rabindranath Tagore",
     options: [
       "Rabindranath Tagore",
       "CV Raman",
       "Mother Theresa",
       "Hargobind Khorana",
     ]
   },
];



function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(questions);
console.log(questions);