import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

/** Cold Observable **/
//the 'ajax' function is a type of creation function that creates an Observable (so we don't have to manually) that will send an HTTP request to provided endpoint
const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');

ajax$.subscribe((data) => {
  console.log('Subs 1: ', data.response.first_name);
});

ajax$.subscribe((data) => {
  console.log('Subs 2: ', data.response.first_name);
});

ajax$.subscribe((data) => {
  console.log('Subs 3: ', data.response.first_name);
});

/* Hot Observable */
//A type of observable where the actual source of emission is coming from outside of Observable's logic

const helloButton = document.querySelector('button#hello');

const helloClick$ = new Observable<MouseEvent>((subscriber) => {
  helloButton.addEventListener('click', (event: MouseEvent) => {
    subscriber.next(event);
  });
});

helloClick$.subscribe((event) => {
  console.log('Subs 1: ', event.type, event.x, event.y);
});

setTimeout(() => {
  console.log('Subs 2 starts');
  helloClick$.subscribe((event) => {
    console.log('Subs 2: ', event.type, event.x, event.y);
  });
}, 5000);
