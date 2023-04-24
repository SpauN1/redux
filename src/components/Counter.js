import { connect } from 'react-redux';

import { inc, dec, rnd } from '../actions';

const Counter = ({ counter, dec, inc, rnd }) => {
  return (
    <div>
      <h1 className="jumbotron">{counter}</h1>
      <button onClick={dec} className="btn btn-primary">
        DEC
      </button>
      <button onClick={inc} className="btn btn-primary">
        INC
      </button>
      <button onClick={rnd} className="btn btn-primary">
        RND
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.value,
  };
};

// mapDispatchToProps?: Function | Object - Пример с функцией и объектом.

// const mapDispatchToProps = (dispatch) => {
//   return {
//     inc: () => dispatch(inc()),
//     dec: () => dispatch(dec()),
//     rnd: () => {
//       const value = Math.floor(Math.random() * 10);
//       dispatch(rnd(value));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default connect(mapStateToProps, { inc, dec, rnd })(Counter);
