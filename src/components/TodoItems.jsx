import styled from "styled-components";

const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.completed ? "#d4edda" : "#fff")};
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
`;

const TaskText = styled.span`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#6c757d" : "#333")};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  background: ${(props) =>
    props.variant === "toggle"
      ? props.completed
        ? "#6c757d"
        : "#28a745"
      : "#dc3545"};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    opacity: 0.9;
  }
`;

export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <ItemRow completed={task.completed}>
      <TaskText completed={task.completed}>{task.text}</TaskText>
      <ButtonGroup>
        <ActionButton
          variant="toggle"
          completed={task.completed}
          onClick={() => onToggle(task.id)}
        >
          {task.completed ? "Undo" : "Complete"}
        </ActionButton>
        <ActionButton
          variant="delete"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </ActionButton>
      </ButtonGroup>
    </ItemRow>
  );
}
