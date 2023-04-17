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

export default reducer;
