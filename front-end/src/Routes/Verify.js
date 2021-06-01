import { useHistory } from "react-router-dom";
const Verify = () => {
  let history = useHistory();
  return (
    <>
      <h4>Verify</h4>
      <button onClick={() => history.push("/register")}>Check</button>
    </>
  );
};
export default Verify;
