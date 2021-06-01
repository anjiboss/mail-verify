import { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const registerHandler = (e) => {
    e.preventDefault();
    fetch("/api/user/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    }).then((res) => {
      if (res.status === 200) {
        console.log(200);
        history.push("/");
      }
    });
  };
  return (
    <>
      <h3>Register</h3>
      <form onSubmit={registerHandler}>
        <div>Username: </div>
        <input
          type="text"
          name="username"
          value={username}
          id="username"
          autocomplete="no"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <div>Email: </div>
        <input
          type="text"
          name="email"
          value={email}
          id="email"
          autocomplete="no"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <div>Password: </div>
        <input
          type="password"
          name="password"
          value={password}
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Register;
