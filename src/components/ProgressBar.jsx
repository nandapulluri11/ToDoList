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

      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>

      <p className="progress-label">
        {completed} / {total} Completed ({percentage}%)
      </p>
    </div>
  );
}

export default ProgressBar;