let profileImg = document.getElementById("profileImg");
let quoteAuthor = document.getElementById("quoteAuthor");
let quotePara = document.getElementById("quotePara");
let changeBtn = document.getElementById("changeBtn");
let goldBtn = document.getElementById("goldBtn");
let messageBtn = document.getElementById("messageBtn");

let quotes = [
  {
    img: "imgs/Oscar Wilde.jpg",
    author: "Oscar Wilde",
    quote: "“Be yourself; everyone else is already taken.”",
  },
  {
    img: "imgs/Frank Zappa.jpg",
    author: "Frank Zappa",
    quote: "“So many books, so little time.”",
  },
  {
    img: "imgs/Mahatma Gandhi.jpg",
    author: "Mahatma Gandhi",
    quote: "“Be the change that you wish to see in the world.”",
  },
  {
    img: "imgs/Robert Frost.jpg",
    author: "Robert Frost",
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
  },
  {
    img: "imgs/Albert Camus.jpg",
    author: "Albert Camus",
    quote: "“You only live once, but if you do it right, once is enough.”",
  },
  {
    img: "imgs/Mark Twain.jpg",
    author: "Mark Twain",
    quote: "“If you tell the truth, you don't have to remember anything.”",
  },
];

let rand,
  randoms = [],
  lastRand;

let addQuote = () => {
  if (quotes.length == randoms.length) {
    randoms = [];
  }

  do {
    rand = Math.round(Math.random() * (quotes.length - 1));
  } while (lastRand == rand || randoms.includes(rand));
  
  console.log(`number of random Quote is ${rand + 1}`);
  randoms.push(rand);
  lastRand = rand;
  displayData(rand);
};

changeBtn.addEventListener("click", addQuote);

function displayData(index) {
  profileImg.src = quotes[index].img;
  quoteAuthor.innerHTML = quotes[index].author;
  quotePara.innerHTML = quotes[index].quote;
}

goldBtn.addEventListener("click", function () {
  let messageCard = document.getElementById("messageCard");
  messageCard.style.opacity = "1";
  messageCard.style.transform = "translate(-50%, -50%) scale(1)";
});
messageBtn.addEventListener("click", function () {
  let messageCard = document.getElementById("messageCard");
  messageCard.style.opacity = "0";
  messageCard.style.transform = "translate(-80%, -10%) scale(0)";
});
