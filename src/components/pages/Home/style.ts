import { styled } from "styled-components";

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 46rem;
  height: 28.1875rem;
  margin-top: 4rem;
`;

export const ContentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  div {
    color: ${(props) => props.theme.blue};
    font-size: 0.875;
    font-weight: bold;

    span {
      width: 1.5rem;
      height: 1.1875rem;
      background-color: ${(props) => props.theme.gray400};
      color: ${(props) => props.theme.gray200};
      border-radius: 8px;
      font-size: 0.75rem;
      padding: 0.125rem 0.5rem;
    }
  }

  .finish {
    color: ${(props) => props.theme.purple};
    font-size: 0.875;
    font-weight: bold;
  }
`;

export const TaskContainer = styled.main`
  display: flex;
  flex-direction: column;

  label {
    cursor: pointer;
  }

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    border: 2px solid ${(props) => props.theme.blue};
    cursor: pointer;
    position: relative;
    transition: background-color 0.1s;

    &:hover {
      background-color: ${(props) => props.theme.blueDark};
    }
  }

  input[type="checkbox"]:checked {
    background-color: ${(props) => props.theme.purple};
    border: 2px solid ${(props) => props.theme.purple};

    &:hover {
      background-color: ${(props) => props.theme.purpleDark};
      border: 2px solid ${(props) => props.theme.purpleDark};
    }
  }

  input[type="checkbox"]:checked:after {
    content: "";
    display: block;
    width: 4px;
    height: 7px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 1px;
    left: 4px;
  }

  .task {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    background-color: ${(props) => props.theme.gray500};
    color: ${(props) => props.theme.gray100};
    margin-bottom: 0.75rem;
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.gray300};
    transition: color 0.1s;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.danger};
    }
  }
`;

export const NoTaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.gray300};
  color: ${(props) => props.theme.gray300};

  svg {
    margin-top: 4rem;
  }

  div {
    margin-top: 1rem;
    font-weight: bold;
    font-size: 1rem;
  }
`;
