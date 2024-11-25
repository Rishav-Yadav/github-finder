const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "SET_USER_DATA":
      return {
        ...state,
        userData: action.payload.userData,
        repos: action.payload.reposData,
        loading: false,
      };

    case "SET_LOADING":
      return { ...state, loading: true };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        loading: false,
      };
    default:
      return state;
  }
};
export default githubReducer;
