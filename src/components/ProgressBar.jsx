function ProgressBar({ tasks }) {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div>
      <h3>Task Progress</h3>

      <div
        style={{
          width: "100%",
          background: "#ddd",
          borderRadius: "10px",
          overflow: "hidden",
          height: "20px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            background: "green",
            height: "100%",
            transition: "0.5s",
          }}
        ></div>
      </div>

      <p style={{ marginTop: "10px" }}>
        {completed} / {total} Completed ({percentage}%)
      </p>
    </div>
  );
}

export default ProgressBar;