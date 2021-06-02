import { useState } from "react";
import { useHistory } from "react-router-dom";
const Verify = () => {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [status, setStatus] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [code, setCode] = useState("");

  const formHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/mail-verify/${username}`, {
      method: "get",
    });
    if (res.status !== 200) {
      const text = await res.text();
      setStatus(text);
      console.log(text);
    } else {
      const user = await res.json();
      setUser(user);
      setStatus("We sent verify code to your email, please check it?");
      setEmailSent(true);
    }
  };

  const submitCodeHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/mail-verify/verify", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        code: code,
      }),
    });
    if (res.status !== 200) {
      const text = await res.text();
      setStatus(text);
    } else {
      setStatus("Verified Successfully");
    }
  };

  return (
    <>
      <h4>Verify</h4>
      <p>{status}</p>
      <form onSubmit={formHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button type="submit">Get Verify Code</button>
      </form>

      <form onSubmit={submitCodeHandler}>
        <div>
          <label htmlFor="code">Code:</label>
          <br />
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Verify;
