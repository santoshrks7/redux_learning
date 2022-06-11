import axios from "axios";
import * as actions from "../api";

//sna
const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) {
      next(action);
      return;
    }

    next(action); //if omited we cant see apicallBegan action creator in redux devtool

    const { url, method, data, onSuccess, onError } = action.payload;

    try {
      const response = await axios.request({
        baseURL: "http://localhost:9000/api",
        url, //bugs -- //endpoints
        method,
        data,
      });
      //general
      dispatch(actions.apiCallSuccess(response.data));
      //specific
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      //general
      dispatch(actions.apiCallFailed(error));
      //specific
      if (onError) dispatch({ type: onError, payload: error });
    }

    //   axios
    //     .request({
    //       baseURL: "http://localhost:9000/api",
    //       url, //bugs -- //endpoints
    //       method,
    //       data,
    //     })
    //     .then()
    //     .catch();
  };

export default api;
