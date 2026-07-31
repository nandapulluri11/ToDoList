import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import ProgressBar from "../components/ProgressBar";
function Dashboard({ username, onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (editingTask) {
      setTasks(
        tasks.map((t) =>
          t.id === editingTask.id ? { ...task, id: editingTask.id } : t
        )
      );
      setEditingTask(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now() }]);
    }
  };

  const deleteTask = (id) => {
    if (window.confirm("Delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const matchSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "All" || task.status === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div className="container">

      <Navbar username={username} onLogout={onLogout} />

      <br />

      <TaskForm
        addTask={addTask}
        editingTask={editingTask}
      />

      <br />

      <div className="card">

        <ProgressBar tasks={tasks} />

        <br />

        <input
          type="text"
          placeholder="Search Task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          style={{ marginLeft: "10px" }}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>

      </div>

      {filteredTasks.length === 0 ? (
        <div className="card">
          <h3>No Tasks Found</h3>
        </div>
      ) : (
        filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onEdit={setEditingTask}
          />
        ))
      )}

    </div>
  );
}

export default Dashboard;