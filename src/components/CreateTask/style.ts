import { styled } from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  width: 46rem;
  gap: 0.5rem;
  margin-top: -2rem;

  input {
    font-size: 1rem;
    color: ${(props) => props.theme.gray300};
    padding: 1rem;
    width: 39.875rem;
    height: 3.375rem;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.gray700};
    background-color: ${(props) => props.theme.gray500};

    &:focus {
      outline: 1px solid ${(props) => props.theme.purple};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.gray100};
    height: 3.375rem;
    background-color: ${(props) => props.theme.blueDark};
    width: 5.625rem;
    border-radius: 8px;
    border: 0;
    font-size: 0.875rem;
    font-weight: bold;
    transition: background-color 0.1;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.blue};
    }
    svg {
      margin-left: 0.2rem;
    }
  }
`;
