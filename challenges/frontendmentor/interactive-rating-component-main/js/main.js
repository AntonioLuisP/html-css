var rating = null;
var ratingFormSection = document.querySelector('section.rating-form')
var ratingSuccessSection = document.querySelector('section.rating-success')
var ratingOptions = document.getElementsByClassName('rating-option')
var ratingChoosed = document.querySelector('span.rating-choosed')

function submitRating(){
  if (!rating) {
    alert('Escolha uma opção') 
    return;
  }  
  ratingSuccessSection.classList.remove('hidden')
  ratingFormSection.classList.add('hidden')
  ratingChoosed.innerText = rating
}

function toogleRating(option){
  Array.from(ratingOptions).forEach(option => {
    option.classList.remove('rating-selected')
  });
  rating = option.innerText
  option.classList.add('rating-selected')
}