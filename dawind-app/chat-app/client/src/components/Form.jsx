import { useState, useContext } from "react";
import axios from "axios";

import { UserContext } from "../context/UserContext";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState("login");

  const { setId, setUsername: setUsernameAuth } = useContext(UserContext);

  async function handleSubmit(ev) {
    ev.preventDefault();

    const url = isLogin === "login" ? "login" : "register";
    const { data } = await axios.post(url, {
      username,
      password,
    });
    setId(data.id);
    setUsernameAuth(username);
  }

  return (
    <section className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          className="block w-full p-2 mb-2 rounded-sm"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          className="block w-full p-2 mb-2 rounded-sm"
        />

        <button
          type="submit"
          className="block w-full p-2 bg-blue-500 text-white rounded-sm"
        >
          {isLogin === "login" ? "Login" : "Register"}
        </button>

        <div className="text-center mt-2">
          {isLogin === "login" ? "Dont have an account?" : "Already member?"}
          <button
            type="button"
            onClick={() =>
              setIsLogin(isLogin === "login" ? "register" : "login")
            }
            className="ml-1"
          >
            {isLogin === "login" ? "Register" : "Login here"}
          </button>
        </div>
      </form>
    </section>
  );
}
