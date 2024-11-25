import GithubContext from "../context/Github/GithubContext";
import { searchUsers } from "../context/Github/GithubAction";
import AlertContext from "../context/Alerts/AlertContext";

import { useState, useContext } from "react";

function SearchBox() {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleClear = () => {
    dispatch({ type: "CLEAR_USERS" });
    setText("");
  };
  const handleChange = (e) => setText(e.target.value);
  const handleSubmission = async (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setAlert("Please Enter something !", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const temp = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: temp });
      if (users.length === 0) {
        setAlert("No Results Found", "error");
      }
    }
  };
  return (
    <div className="w-full max-w-screen-lg mx-auto  ">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto] xl:grid-cols-[1fr_auto] gap-8 mb-8 justify-center items-center ">
        <div>
          <form className="mx-8" onSubmit={handleSubmission}>
            <div className="form-control flex flex-row">
              <label className="input input-bordered flex items-center gap-2 input-lg input-ghost w-full rounded-r-none justify-between">
                <input
                  className=""
                  type="text"
                  value={text}
                  placeholder="Search"
                  onChange={handleChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70 "
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <button
                type="submit"
                className="btn btn-primary btn-lg rounded-l-none"
              >
                Go
              </button>
            </div>
          </form>
        </div>
        {users.length > 0 && (
          <div className="mx-8">
            <button
              onClick={handleClear}
              className="w-full btn btn-secondary btn-md
               shadow-md lg:btn-lg"
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default SearchBox;
