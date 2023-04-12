import { Observable, observable } from 'rxjs';

const observable$ = new Observable<number>((subscriber) => {
  console.log('observable executed');
  let counter = 1;
  const intervalId = setInterval(() => {
    console.log('emitted', counter);
    subscriber.next(counter++);
  }, 2000);

  return () => {
    console.log('Teardown logic');
    clearInterval(intervalId);
  };
});

console.log('Before subs');

const subs1 = observable$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('subs complete!'),
  error: (err) => console.log(err.message),
});

setTimeout(() => {
  console.log('unsubscribing');
  subs1.unsubscribe();
}, 10000);

console.log('After subs');
