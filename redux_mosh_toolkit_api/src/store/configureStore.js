import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import reducer from "./bugs"
import reducer from "./projects";
import logger from "./middleware/logger";
import error_m from "./middleware/error_middleware";
import api from "./middleware/api";

const configureAppStore = () => {
  return configureStore({
    reducer: reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: "console" }),
      error_m,
      api,
    ],
  });
};

export default configureAppStore;
//====================================================
// import { configureStore } from "@reduxjs/toolkit";
// // import reducer from "./bugs"
// import reducer from "./projects";
// import logger from "./middleware/logger";
// import func from "./middleware/func";

// const configureAppStore = () => {
//   return configureStore({
//     reducer: reducer,
//     middleware: [logger({ destination: "console" }), func],
//   });
// };

// export default configureAppStore;

//================================================
//  import {createStore} from "redux"
//  import {devToolsEnhancer} from "redux-devtools-extension"
//  import reducer from "./bugs"

//  const configureStore = () => {
//      const store = createStore(reducer , devToolsEnhancer({trace:true}))
//      return store
//  }
//  export default configureStore
