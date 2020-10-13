import styled from "styled-components";

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Field = styled.input`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 3px 8px 3px 8px;
  cursor: pointer;

  :hover {
    border: 1px solid blue;
    color: blue;
  }
`;
