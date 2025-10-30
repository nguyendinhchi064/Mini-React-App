import styled from "styled-components";

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

export const InputRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #272323ff;
  border-radius: 8px;
`;

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
  background: ${(props) => (props.active ? "#007bff" : "#524b4bff")};
  color: ${(props) => (props.active ? "white" : "white")};
  border: none;
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;
  &:hover {
    background: #007bff;
    color: white;
  }
`;
