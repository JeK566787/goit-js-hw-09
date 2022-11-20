import Notiflix from 'notiflix';

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;
  setTimeout(() => {
    if (canFulfill) {
      resolve(`it's fulfilled(выполнен)`);
    }
    reject(`it's rejected(отклонен)`);
  }, 5000);
});
promise.then(
  result => {
    console.log(result);
  },
  error => {
    console.log(error);
  }
);
// const formEl = document.querySelector('.form');

// formEl.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();
//   let delay = Number(formEl.elements.delay.value);
//   const step = Number(formEl.elements.step.value);
//   const amount = Number(formEl.elements.amount.value);
//   for (let i = 0; i < amount; i++) {
//     createPromise(i + 1, delay)
//       .then(({ position, delay }) =>
//         Notiflix.Notify.success(
//           `✅ Fulfilled promise ${position} in ${delay}ms`,
//           {
//             position: 'center-top',
//           }
//         )
//       )
//       .catch(({ position, delay }) =>
//         Notiflix.Notify.failure(
//           `❌ Rejected promise ${position} in ${delay}ms`,
//           {
//             position: 'center-top',
//           }
//         )
//       );
//     delay += step;
//   }
// }
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// ==========================start=============================================================
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
