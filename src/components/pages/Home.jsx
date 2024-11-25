import { useContext } from "react";
import UserResults from "../users/UserResults";
import SearchBox from "../SearchBox";
import Alert from "../layouts/Alert";
import AlertContext from "../../context/Alerts/AlertContext";

function Home() {
  const { alert } = useContext(AlertContext);
  return (
    <>
      <SearchBox />
      {alert !== null && <Alert />}

      <UserResults />
    </>
  );
}
export default Home;
