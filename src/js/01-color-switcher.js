const btnStartRef = document.querySelector('[data-start]');
const btnStopRef = document.querySelector('[data-stop]');
let intervalId;

btnStopRef.disabled = true;

btnStartRef.addEventListener('click', onBtnStartClick);
btnStopRef.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  switchBtnStatus();

  intervalId = setInterval(changeColor, 1000);
  console.log(intervalId);
}

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function onBtnStopClick() {
  switchBtnStatus();

  clearInterval(intervalId);
}

function switchBtnStatus() {
  btnStartRef.disabled = !btnStartRef.disabled;
  btnStopRef.disabled = !btnStopRef.disabled;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// отримати наші кнопки по яких ми будемо клацати
//є кнопка "старт" і на неї треба натискати. Значить на кнопку старт треба додати прослуховувач події.Які параметри приймає прослуховувач? Тип події та колбек функцію.
//Тип події - клік
// пояснення колбек функції
// робимо неактивною кнопку старт
//створюємо змінну color і присвоюємо їй результат виклику функції рандомного кольору
//задаємо колір для боді - document.body.style.backgroundColor = color;
//при створенні сет інтервала треба записати це все в змінну.
// раз на секунду - значить використовуємо сет Інтервал при натисканні на кнопку стоп - очищуємо інтервал.

//додаємо на кнопку стоп прослуховувач події. при натисканні на кнопку стоп - передавати цю змінну в clearInterval()
