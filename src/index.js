import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';

const initialState = {
  value: 0,
};

// функция reducer всегда должна быть чистой функцией-(должна зависить от state который в нее приходит и от action), при этом она должна возвращать один и тот же результат при одинаковых аргументах и не иметь никаких побочных эффектов.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      // return state + 1; (ниже мы соблюдаем принципы иммутабельности).
      return {
        ...state,
        value: state.value + 1,
      };
    case 'DEC':
      // return state - 1; (ниже мы соблюдаем принципы иммутабельности).
      return {
        ...state,
        value: state.value - 1,
      };
    case 'RND':
      // return state * action.payload; (ниже мы соблюдаем принципы иммутабельности).
      return {
        ...state,
        value: state.value * action.payload,
      };
    default:
      return state;
  }
};

// store - это какое то хранилище, а state состояние.
// одно хранилище и это хранилище включает в себя как state так и dispatch который ссылается на тот state который есть внутри этого stora.
const store = createStore(reducer);

const update = () => {
  document.getElementById('counter').textContent = store.getState().value;
};

// subscribe подписка на изменения-(прослушиватель изменений).
// store.subscribe(() => {
//   console.log(store.getState());
// });
store.subscribe(update);

// Action Creators - создатель наших экшенов.
const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (value) => ({ type: 'RND', payload: value });
// const inc = () => {
//   return {
//     type: 'INC',
//   };
// };

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});
// document.getElementById('inc').addEventListener('click', () => {
//   store.dispatch({ type: 'INC' });
// });

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});
// document.getElementById('dec').addEventListener('click', () => {
//   store.dispatch({ type: 'DEC' });
// });

// dispatch принимает только один обязательный аргумент это тип действия({ type: 'INC' }) , но кроме типа может быть и полезная нагрузка (payload).
document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));
});
// document.getElementById('rnd').addEventListener('click', () => {
//   const value = Math.floor(Math.random() * 10);
//   store.dispatch({ type: 'RND', payload: value });
// });

// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'INC' });

// dispatch под капотом. В dispatch мы не должны передавать state,он и так знает с каким statem работает.
// let state = reducer(initialState, { type: 'INC' });
// state = reducer(state, { type: 'INC' });
// state = reducer(state, { type: 'INC' });
// state = reducer(state, { type: 'INC' });
// console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode></React.StrictMode>);
