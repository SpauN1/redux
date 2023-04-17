// Action Creators - создатель наших экшенов.
export const inc = () => ({ type: 'INC' });
export const dec = () => ({ type: 'DEC' });
export const rnd = (value) => ({ type: 'RND', payload: value });
// const inc = () => {
//   return {
//     type: 'INC',
//   };
// };
