//sna
const error_m = (store) => (next) => (action) => {
  if (action.type === "error") {
    console.log("Toastify error:", action.payload.message);
  } else {
    next(action);
  }
};

export default error_m;
