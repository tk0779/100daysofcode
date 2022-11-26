// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://images.pexels.com/photos/935743/pexels-photo-935743.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://images.pexels.com/photos/6695349/pexels-photo-6695349.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 2;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson()
});

//show person based on item
function showPerson(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

//show next person

nextBtn.addEventListener('click',function(){
  currentItem++;
  if (currentItem > reviews.length-1){
    currentItem = 0;
  };
  showPerson();
});

//show prev person

prevBtn.addEventListener('click',function(){
  currentItem--;
  if (currentItem < 0){
    currentItem = reviews.length-1;
  };
  showPerson();
});

//show random person

randomBtn.addEventListener('click',function(){
  currentItem = Math.floor(Math.random() * reviews.length)
  console.log(currentItem);
  showPerson();
});




