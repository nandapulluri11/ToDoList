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

      <br />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option>Pending</option>
          <option>Completed</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          style={{ marginLeft: "10px" }}
        />

        <button
          className="primary-btn"
          style={{ marginLeft: "10px" }}
        >
          {editingTask ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;