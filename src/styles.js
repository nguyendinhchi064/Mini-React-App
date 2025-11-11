import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background: #f6f8fa;
  border-radius: 10px;
  box-shadow: 0 0 10px #211111ff;
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
`;

/* InputRow supports a transient prop $pushed.
   When $pushed is true it animates up (use from App.jsx
   to toggle when a new task is added). */
export const InputRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  transform: translateY(1rem);
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1);

  ${(props) =>
    props.$pushed &&
    css`
      transform: translateY(0);
    `}
`;

/* Floating label input components */
export const FloatingInput = styled.div`
  position: relative;
  flex: 1;
  display: inline-block;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 10px 10px; /* extra top padding so label sits inside */
  border: 1px solid #272323ff;
  border-radius: 8px;
  background: white;
  font-size: 1rem;
  outline: none;
  transition: border-color 160ms ease;

  &:focus {
    border-color: #246ab0;
  }

  /* keep a placeholder so :placeholder-shown can be used; set it to a single space in JSX */
  &::placeholder {
    color: transparent;
  }
`;

/* label that floats up on focus or when input has content */
export const FloatingLabel = styled.label`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 180ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #9aa0a6;
  pointer-events: none;
  font-size: 1rem;
  background: transparent;
  padding: 0 6px;

  /* move up when input is focused or has content (not placeholder-shown) */
  ${Input}:focus + &,
  ${Input}:not(:placeholder-shown) + & {
    top: -8px;
    transform: translateY(0);
    font-size: 0.75rem;
    color: #246ab0;
    background: #f6f8fa; /* lightly cover the input border behind label */
  }
`;

/* Button and filter styles kept as before */
export const Button = styled.button`
  padding: 10px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
`;

export const FilterButton = styled.button`
  background: ${(props) => (props.$active ? "#007bff" : "#524b4bff")};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;
  &:hover {
    background: #007bff;
    color: white;
  }
`;

/* optional helpers for task list entry animation */
export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.div`
  animation: itemEnter 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
  @keyframes itemEnter {
    from {
      transform: translateY(8px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
