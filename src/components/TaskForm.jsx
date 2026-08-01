import { useEffect, useState } from "react";

function TaskForm({ addTask, editingTask }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setStatus(editingTask.status);
      setDueDate(editingTask.dueDate);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      alert("Enter task title");
      return;
    }

    addTask({
      title,
      status,
      dueDate,
    });

    setTitle("");
    setStatus("Pending");
    setDueDate("");
  };

  return (
    <div className="card">
      <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="task-title">Task Name</label>
            <input
              type="text"
              id="task-title"
              placeholder="Task Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="task-status">Status</label>
            <select
              id="task-status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="due-date">Due Date</label>
            <input
              type="date"
              id="due-date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <button className="primary-btn">
            {editingTask ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;