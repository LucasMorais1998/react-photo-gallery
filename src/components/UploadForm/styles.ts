import styled from "styled-components";

export const Container = styled.form`
  background-color: var(--gray-color);
  padding: 0.938rem;
  border-radius: 0.625rem;
  margin-bottom: 1.875rem;

  input[type="submit"] {
    background-color: var(--purple-color);
    border: 0;
    color: var(--white-color);
    padding: 0.5rem 1rem;
    font-size: 0.938rem;
    border-radius: 0.625rem;
    margin: 0 1.25rem;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity ease 1s;

    &:hover {
      opacity: 1;
    }
  }
`;
