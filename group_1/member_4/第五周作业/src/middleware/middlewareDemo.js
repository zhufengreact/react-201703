// const middlewareDemo = ({getState, dispatch}) => (next) => (action) => {
//     console.group(action.type);
//     console.log('dispatch:', action);
//     console.log('previous state:', getState());
//     let str = next(action);
//     console.log('next state:', getState());
//     console.groupEnd(action.type);
//     return str;
// };
//
// export default middlewareDemo;