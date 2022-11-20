import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldResolve
        ? resolve({ position, delay })
        : reject({ position, delay });
    }, delay);
  });
}

formRef.addEventListener('submit', onStartPromiseCreate);

function onStartPromiseCreate(event) {
  event.preventDefault();
  const amount = Number(form.elements.amount.value);
  const step = Number(form.elements.step.value);
  let delay = Number(form.elements.delay.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
  event.target.reset();
}

// ==========================start=============================================================
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
