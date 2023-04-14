/* Creation Functions */
/*
1. Of: emits the values provided as arguments and completes
2. From: can convert things like arrays, promises, iterables into an Observable
3. fromEvent: create observable from some event target. subs and unsubs is like add & remove event listner
4. interval/timer: creates an observable which emits notifications with some delay
5. forkJoin: accepts array of observables as input. After all these obs complete, it emits set of latest values emitted by each of them
6. combineLatest: also accepts multiple observables as input, each time any of them emit sth new, it emits latest values by each of them
*/

import { from, Observable, of, Subscriber } from 'rxjs';

//OF:
// const of$ = of('Pragya', 'Simo', 'pintu', 123);

// of$.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('completed'),
// });

// function ourOwnOf(...args: string[]): Observable<string> {
//   return new Observable<string>((subscriber) => {
//     for (let i = 0; i < args.length; i++) {
//       subscriber.next(args[i]);
//     }
//     subscriber.complete();
//   });
// }

// ourOwnOf('Pragya', 'Simo', 'pinto').subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('completed'),
// });

//From:

// from(['Pragya', 'Simo', 'pintu']).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('completed'),
// });

// const somePromise = new Promise((resolve, reject) => {
//   resolve('Resolved');
//   //reject('Rejected');
// });

// const observableFromPromise$ = from(somePromise);

// observableFromPromise$.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
//   error: (err) => console.log('Error: ', err),
// });

//FromEvent:
