import { useDispatch } from 'react-redux';

import {
  CounterId,
  DecrementAction,
  IncrementAction,
  selectCounter,
  useAppSelector,
} from './redux/store';

import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';

import './App.css';

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter counterId="first" />
      <Counter counterId="second" />
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export function Counter({ counterId }: { counterId: CounterId }) {
  const dispatch = useDispatch();
  const counterState = useAppSelector((state) =>
    selectCounter(state, counterId)
  );

  return (
    <>
      counter {counterState?.counter}
      <button
        onClick={() =>
          dispatch({
            type: 'increment',
            payload: { counterId },
          } satisfies IncrementAction)
        }
      >
        increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'decrement',
            payload: { counterId },
          } satisfies DecrementAction)
        }
      >
        decriment
      </button>
    </>
  );
}

export default App;
