function TaskCard({ task, onDelete, onEdit }) {
  return (
    <div className="card">
      <h3>{task.title}</h3>

      <p>
        <b>Status:</b> {task.status}
      </p>

      <p>
        <b>Due Date:</b> {task.dueDate || "Not Selected"}
      </p>

      <br />

      <button
        className="success-btn"
        onClick={() => onEdit(task)}
      >
        Edit
      </button>

      <button
        className="danger-btn"
        style={{ marginLeft: "10px" }}
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;