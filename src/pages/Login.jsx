import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      alert("Please enter your name");
      return;
    }

    onLogin(username);
  };

  return (
    <div className="center" style={{ height: "100vh" }}>
      <div className="card" style={{ width: "350px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Student Task Planner
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", marginBottom: "20px" }}
          />

          <button
            type="submit"
            className="primary-btn"
            style={{ width: "100%" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;