import { useSelector, useDispatch } from 'react-redux';

import { inc, dec, rnd } from '../actions';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="jumbotron">{counter}</h1>
      <button onClick={() => dispatch(inc())} className="btn btn-primary">
        INC
      </button>
      <button onClick={() => dispatch(dec())} className="btn btn-primary">
        DEC
      </button>
      <button onClick={() => dispatch(rnd())} className="btn btn-primary">
        RND
      </button>
    </div>
  );
};

export default Counter;
