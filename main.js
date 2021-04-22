const ball = document.querySelector('.ball-img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const allAnswers = [
  'Tak',
  'Nie',
  'Możliwe',
  'Niekoniecznie',
  'Nie chcesz znać odpowiedzi na to pytanie...'
]

//losowanie losowych odpowiedzi
const randomAnswer = () => {
  const random = Math.floor(Math.random() * allAnswers.length)
  answer.innerHTML = `<span>Odpowiedz:</span> ${allAnswers[random]}`
  console.log(allAnswers[random])
}

//sprawdzanie czy input.value jest pusty i czy na końcu znajduję się znak ?
const checkInput = () => {
  if (input.value !== '' && input.value.slice(-1) === '?') {
    randomAnswer()
    error.textContent = ''
  } else if (input.value !== '' && input.value.slice(-1) !== '?') {
    error.innerText = 'Pytanie musi być zakończone znakiem "?"'
    answer.textContent = ''
  } else {
    error.textContent = 'Musisz zadać jakieś pytanie'
    answer.textContent = ''
  }
  ball.classList.remove('shake-animation')
}

//dodawanie klasy shake-animation do bili żeby nią poruszyć
const shakeBall = () => {
  ball.classList.add('shake-animation')
  setTimeout(checkInput, 1000)
}

const checkEmptyInput = () => {}

//zdarzenia na click bili
ball.addEventListener('click', shakeBall)
