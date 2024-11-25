import { createContext, useReducer, useRef } from "react";
import { ref, useInView } from "react-intersection-observer";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    userData: {},
    loading: false,
    repos: [],
    visibleRepos: [],
    startIndex: 0,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const { ref, inView } = useRef();

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
