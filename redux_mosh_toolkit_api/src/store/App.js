import configureStore from "./configureStore";
// import * as actions from "../store/api";
import { loadBugs } from "./bugs";

const store = configureStore();

//calling an api using action creator,bcoz we cant call api in reducer

// const actionCreator = () => (dispatch) => {};
// ==== or =====
// const actionCreator = () => {
//   return (dispatch) => {
//     // call api
//     // resolved :dispatch(success)
//     // rejected :dispatch(error)
//   };
// };

// ============== with action creator
store.dispatch(loadBugs());
// store.dispatch(
//   actions.apiCallBegan({
//     url: "/bugs",
//     onSuccess: "bugs/bugsReceived",
//     // onError: actions.apiCallFailed,
//   })
// );

// ============== without action creator
// store.dispatch({
//   type: "apiCallBegan", //requesting api
//   payload: {
//     url: "/bugs",
//     onSuccess: "bugsReceived",
//     onError: "apiRequestFailed",
//   },
// });

// note => dispatch should be a plain object with a type property ,it cannot containe async functions
// store.dispatch({});
store.dispatch((dispatch, getState) => {
  //call an api
  //when the promise resolved => dispatch()
  // dispatch({ type: "bugReceived", bugs: [1, 2, 3] });
  console.log(getState());
  //if the promise is rejected => dispatch()
});

store.dispatch({
  type: "error",
  payload: { message: "an error occured" },
});

const App = () => {
  return <div>App</div>;
};
export default App;

// =============================================================

// import configureStore from "./configureStore";
// import * as actions from "../store/bugs";
// import * as actions1 from "../store/projects";

// const store = configureStore();

// store.subscribe(() => {
//   console.log("store changed");
// });

// store.dispatch(actions.bugAdded({description:"bug 1"}))
// store.dispatch(actions.bugAdded({description:"bug 2"}))
// store.dispatch(actions.bugAdded({description:"bug 3"}))
// store.dispatch(actions.bugResolved({id:1}))

// store.dispatch(actions1.projectAdded({ name: "project 1" }));

// console.log(store.getState());

// const App = () => {
//   return <div>App</div>;
// };
// export default App;
