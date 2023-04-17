import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, bindActionCreators } from 'redux';

// import { inc, dec, rnd } from './actions';
import * as actions from './actions';
import reducer from './reducer';

// store - это какое то хранилище, а state состояние.
// одно хранилище и это хранилище включает в себя как state так и dispatch который ссылается на тот state который есть внутри этого stora.
const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const update = () => {
  document.getElementById('counter').textContent = getState().value;
};

// subscribe подписка на изменения-(прослушиватель изменений).
// store.subscribe(() => {
//   console.log(store.getState());
// });
subscribe(update);

// bindActionCreators в нее передаем первым аргументом actionCreator, вторым dispatch.
// Также можно биндить сразу несколько функций в виде объекта.
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
// !!! пример еще большего сокращения, см. 5 строчка. Как было снизу.
// const { incDispatch, decDispatch, rndDispatch } = bindActionCreators(
//   {
//     incDispatch: inc,
//     decDispatch: dec,
//     rndDispatch: rnd,
//   },
//   dispatch
// );
// !!!!! Вот тут поменяли один action creator на объект с ключами и значениями.
// ниже как было до.
// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);
// под капотом все оборачивается вот в такую конструкцию.
// const bindActionCreator = (creator, dispatch) => (...arguments) => {
//   dispatch(creator(...arguments));
// };

document.getElementById('inc').addEventListener('click', inc);
// document.getElementById('inc').addEventListener('click', () => {
//   store.dispatch({ type: 'INC' });
// });

document.getElementById('dec').addEventListener('click', dec);
// document.getElementById('dec').addEventListener('click', () => {
//   store.dispatch({ type: 'DEC' });
// });

// dispatch принимает только один обязательный аргумент это тип действия({ type: 'INC' }) , но кроме типа может быть и полезная нагрузка (payload).
document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  rnd(value);
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
