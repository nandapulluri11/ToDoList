function Navbar({ username, onLogout }) {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2>Student Task Planner</h2>
          <p>Welcome, {username}</p>
        </div>

        <button className="danger-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;