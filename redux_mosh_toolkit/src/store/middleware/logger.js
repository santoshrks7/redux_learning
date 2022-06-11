// const logger = (store, next, action) => {};

// using currying
//SNA
const logger = (param) => (store) => (next) => (action) => {
  console.log("logging", param);
  next(action); //here next(action) is passed to another middleware or reducer
};

export default logger;

// const logger = (store) => (next) => (action) => {
//     console.log("store", store);
//     console.log("naxt", next);
//     console.log("action", action);
//     next(action); //here next(action) is passed to another middleware or reducer
//   };

//   export default logger;
