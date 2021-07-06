const buttonLike = document.getElementById('Good');
let card = document.getElementById('card');
const buttonDontLike = document.getElementById('Bad');



function animarDontLike(){
    if (card.className === 'card'){
        card.className = 'card moveLeft-card';
      } else {
        card.className = 'card';
      }
}

function animarLike(){
    if (card.className === 'card'){
        card.className = 'card moveRight-card'
      } else {
        card.className = 'card';
      }
}


buttonDontLike.onclick = () => animarDontLike(card.remove())

buttonLike.onclick = () => animarLike()
    





