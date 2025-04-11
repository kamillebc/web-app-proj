//fun fact button
var facts = ["Reading makes you smarter", 'Books are like movies but for your brain', "Reading expands your vocabulary",
  "Books are cool", "Reading is like a workout for your brain", "Reading is a productive hobby", "You'll find a new favorite author",
  "You might learn something new", "Nothing is better than a good book", "Books can alternatively be used as weapons, pillows, or fire starter."
]

function generateFacts() {
    var randomFact = randomlist(facts);
  document.getElementById("here").innerHTML = randomFact;
}

function randomlist(list) {
  var x = Math.floor(Math.random() * list.length);
  return list[x];
}
//shaking images
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("shake");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].classList.add("shake");
    setTimeout(showSlides, 5000);
}

 //quiz
function calculateResults() {
  const answers = document.querySelectorAll('input[type="radio"]:checked');
  let scores = { A: 0, B: 0, C: 0, D: 0 };

  answers.forEach(answer => {
      scores[answer.value]++;
  });

  const maxScore = Math.max(scores.A, scores.B, scores.C, scores.D);
  let result = '';

  if (scores.A === maxScore) result = 'You are "The Shining" by Stephen King!';
  else if (scores.B === maxScore) result = 'You are "1984" by George Orwell!';
  else if (scores.C === maxScore) result = 'You are "The Notebook" by Nicholas Sparks!';
  else if (scores.D === maxScore) result = 'You are "The Allignment Problem" by Brian Christian!';

  window.alert(result);
}
//madlibs 
function MadLib() {
  const n1 = document.getElementById('n1').value;
  const n2 = document.getElementById('n2').value;
  const v1 = document.getElementById('v1').value;
  const v2 = document.getElementById('v2').value;
  const a1 = document.getElementById('a1').value;
  const a2 = document.getElementById('a2').value;

  if (!n1 || !n2 || !v1 || !v2 || !a1 || !a2) {
      document.getElementById('result').innerText = "Error: ENTER INFO BEFORE SUBMITTING";
      return;
  }

  const story = "Once upon a time, the " + a1 + n1+" thought they could "+v1+" to the library.  However, along the way they ran into a "+a2+n2+ "and it began to "+v2+"!!!";
  
  document.getElementById('result').innerText = story;
}
