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

      <div className="card-actions">
        <button
          className="success-btn"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button
          className="danger-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;