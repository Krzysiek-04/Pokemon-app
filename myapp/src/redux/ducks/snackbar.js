const SET_SNACKBAR = "setSnackbar";

export const setSnackbar = (
  snackbarOpen,
  snackbarType = "success",
  severityType,
  snackbarMessage = ""
) => ({
  type: SET_SNACKBAR,
  snackbarOpen,
  snackbarType,
  severityType,
  snackbarMessage,
});

const initialState = {
  snackbarOpen: false,
  snackbarType: "success",
  severityType: "success",
  snackbarMessage: "",
};

const snackbarActions = (state = initialState, action) => {
  switch (action.type) {
    case SET_SNACKBAR:
      const { snackbarOpen, snackbarType, severityType, snackbarMessage } =
        action;
      return {
        ...state,
        snackbarOpen,
        snackbarType,
        severityType,
        snackbarMessage,
      };
    default:
      return state;
  }
};

export default snackbarActions;
