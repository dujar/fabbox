import { Observable } from 'rxjs';
import React from 'react';
import EyeViewIcon from 'react-icons/lib/ti/eye-outline';
import Header from './Header';

import { componentFromStream } from 'recompose';

export const StreamNumber = componentFromStream(() => {
  let initialNumber = Math.ceil(Math.random() * 100);
  return Observable.interval(300).map(i => (
    <div>
      {initialNumber + i}
      <EyeViewIcon /> Desired Traffic :)
    </div>
  ));
});
const createTypeWriter = (message, speed) =>
  Observable.zip(
    Observable.from(message),
    Observable.interval(speed),
    letter => letter
  ).scan((acc, curr) => acc + curr);

export const StreamingMessage = componentFromStream(props$ => {
  return props$
    .switchMap(props => createTypeWriter(props.message, props.speed))
    .map(message => ({ message }))
    .map(App);
});
const App = props => <div>{props.message}</div>;
