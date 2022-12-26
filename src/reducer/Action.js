export const Fetching_Start = "START";
export const Fetching_Success = "SUCCESS";
export const Fetching_Error = "ERROR";
export const Fetching_UserData = "USER_DATA"
export const Fetching_User = "USER"

export const initialState = {
  loading: false,
  error: false,
  selector: [],
};
export const selectorReducer = (state, action) => {
  // console.log(state,action);
  switch (action.type) {
    case Fetching_Start:
      return {
        ...state,
        loading: true
      };
    case Fetching_Success:
      // console.log(action);
      return {
        ...state,
        loading: false,
        selector: action.payload
      };
    case Fetching_UserData:
      // console.log(action);
      return {
        ...state,
        loading: false,
        user_data: action.payload
      };
    case Fetching_User:
      // console.log(action.payload.data);
      return {
        ...state,
        loading: false,
        user: action.payload.data
      };
    case Fetching_Error:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};
