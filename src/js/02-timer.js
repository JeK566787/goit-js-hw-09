// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputRef = document.querySelector('#datetime-picker');
const startBtnRef = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minsRef = document.querySelector('[data-minutes]');
const secRef = document.querySelector('[data-seconds]');
// const currentDate = new Date();
let selectedDate;

console.log(inputRef);

startBtnRef.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      Notiflix.Notify.success('Date is chosen');
      console.log(selectedDates[0]);
      startBtnRef.disabled = false;
      selectedDate = selectedDates[0];
    }
  },
};

flatpickr(inputRef, options);

startBtnRef.addEventListener('click', onBtnClick);
function onBtnClick() {
  // console.log('click');
  const intervalId = setInterval(() => {
    let difference = selectedDate - new Date();
    // const onTime = new Date;
    // console.log(convertMs(difference));
    if (difference < 0) {
      clearInterval(intervalId);
      return;
    }

    renderTimer(convertMs(difference));
  }, 1000);
}

function renderTimer(timerObject) {
  daysRef.textContent = addLeadingZero(timerObject.days);
  hoursRef.textContent = addLeadingZero(timerObject.hours);
  minsRef.textContent = addLeadingZero(timerObject.minutes);
  secRef.textContent = addLeadingZero(timerObject.seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
// // const inputEl = document.querySelector('input#datetime-picker');
// // const startBtn = document.querySelector('[data-start]');
// // const timer = document.querySelectorAll('span.value');
// // console.log(inputEl);
// // console.dir(startBtn);
// // console.log(timer);

// // startBtn.disabled = true;

// // let choosenDate;

// // flatpickr(inputEl, {
// //   enableTime: true,
// //   time_24hr: true,
// //   defaultDate: new Date(),
// //   minuteIncrement: 1,
// //   onClose(selectedDates) {
// //     console.log(selectedDates[0]);
// //     const today = new Date();
// //     choosenDate = selectedDates[0];
// //     if (selectedDates[0].getTime() < today.getTime()) {
// //       Notiflix.Notify.failure('Please choose a date in the future.', {
// //         timeout: 1000,
// //         position: 'center-top',
// //       });
// //     } else {
// //       startBtn.disabled = false;
// //       Notiflix.Notify.success('Please, start the timer!', {
// //         timeout: 1000,
// //         position: 'center-top',
// //       });
// //     }
// //   },
// // });

// // startBtn.addEventListener('click', startBtnEvent);

// // function startBtnEvent() {
// //   startBtn.disabled = true;
// //   inputEl.disabled = true;

// //   const timeInterval = setInterval(() => {
// //     const today = new Date();
// //     const time = choosenDate - today;

// //     if (time <= 1000) {
// //       clearInterval(timeInterval);
// //       return;
// //     }
// //     const data = convertMs(time);
// //     Object.entries(data).forEach(([name, value], idx) => {
// //       timer[idx].textContent = addLeadingZero(value);
// //     });
// //   }, 1000);
// // }

// // function convertMs(ms) {
// //   // Number of milliseconds per unit of time
// //   const second = 1000;
// //   const minute = second * 60;
// //   const hour = minute * 60;
// //   const day = hour * 24;

// //   // Remaining days
// //   const days = Math.floor(ms / day);
// //   // Remaining hours
// //   const hours = Math.floor((ms % day) / hour);
// //   // Remaining minutes
// //   const minutes = Math.floor(((ms % day) % hour) / minute);
// //   // Remaining seconds
// //   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

// //   return { days, hours, minutes, seconds };
// // }

// // function addLeadingZero(n) {
// //   return n.toString().padStart(2, '0');
// // }
