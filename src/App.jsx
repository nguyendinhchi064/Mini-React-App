import { useState, useEffect, useRef } from "react";
import TodoItem from "./components/TodoItems";
import {
  Container,
  Title,
  InputRow,
  Input,
  FloatingInput,
  FloatingLabel,
  Button,
  FilterBar,
  FilterButton,
} from "./styles";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  // transient flag for InputRow animation when a new task is added
  const [pushed, setPushed] = useState(false);
  const pushTimer = useRef(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    return () => {
      if (pushTimer.current) clearTimeout(pushTimer.current);
    };
  }, []);

  const addTask = () => {
    if (!newTask.trim()) return;
    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };
    setTasks((prev) => [...prev, task]);
    setNewTask("");

    // trigger InputRow slide-up briefly
    setPushed(true);
    if (pushTimer.current) clearTimeout(pushTimer.current);
    pushTimer.current = setTimeout(() => setPushed(false), 220); // duration matches styles.js transition/animation
  };

  const toggleTask = (id) => {
    setTasks((t) => t.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x)));
  };

  const deleteTask = (id) => {
    setTasks((t) => t.filter((x) => x.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <Container>
      <Title>React Todo Mini Test</Title>

      <InputRow $pushed={pushed}>
        <FloatingInput>
          {/* keep a single-space placeholder so :placeholder-shown works */}
          <Input
            placeholder=" "
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <FloatingLabel>Add a new task...</FloatingLabel>
        </FloatingInput>

        <Button onClick={addTask}>Add</Button>
      </InputRow>

      <FilterBar>
        {["all", "active", "completed"].map((f) => (
          <FilterButton
            key={f}
            $active={filter === f}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </FilterButton>
        ))}
      </FilterBar>

      {filteredTasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      ))}
    </Container>
  );
}
