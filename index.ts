import { forkJoin, Observable, observable, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';

console.log('App started');

// const timer$ = new Observable<number>((subscriber) => {
//   const timeoutId = setTimeout(() => {
//     console.log('Timeout!');
//     subscriber.next(0);
//     subscriber.complete();
//   }, 2000);

//   return () => {
//     clearTimeout(timeoutId);
//   };
// });

// const subs1 = timer$.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Complete'),
// });

// const subs2 = timer(1000).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Compelete!'),
// });

// setTimeout(() => {
//   subs2.unsubscribe();
//   console.log('unsubs');
// }, 5000);

//ForkJoin:
//Pragya is from Alwar and likes to eat Rajma Chawal

const randomName$ = ajax('https://random-data-api.com/api/name/random_name');

const randomNation$ = ajax(
  'https://random-data-api.com/api/nation/random_nation'
);

const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

// randomNation$.subscribe({
//   next: (data) => console.log('randomName', data),
//   complete: () => console.log('Complete'),
//   error: (err) => console.log(err),
// });

forkJoin([randomName$, randomNation$, randomFood$]).subscribe({
  next: ([nameData, nationData, foodData]) => {
    console.log(
      nameData.response.name,
      ' is from ',
      nationData.response.capital,
      ' and likes to eat ',
      foodData.response.dish
    );
  },
  complete: () => console.log('Complete'),
  error: (err) => console.log(err),
});
