import styled from "styled-components";

export const Container = styled.form`
  background-color: var(--gray-color);
  padding: 0.938rem;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  margin-bottom: 1.875rem;

  label {
    input[type="file"],
    input[type="submit"] {
      background-color: var(--purple-color);
      border: 0;
      color: var(--white-color);
      border-radius: 0.625rem;
      margin: 0 1.25rem;
      opacity: 0.5;
    }
  }

  label[id="labelInputImage"] {
    display: flex;
    align-items: center;

    .add-image-icon {
      color: var(--purple-color);
      margin-left: 0.5rem;
      margin-bottom: 0.3rem;
      font-size: 2rem;
      opacity: 0.5;
      transition: opacity ease 1s;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }

    input[type="file"] {
      font-size: 0.625rem;
      width: 150px;
      overflow-x: hidden;
      padding: 0.6rem 1rem;

      &::file-selector-button {
        display: none;
      }
    }
  }

  label[id="labelInputSubmit"] {
    input[type="submit"] {
      font-size: 0.938rem;
      cursor: pointer;
      padding: 0.5rem 1rem;
      transition: opacity ease 1s;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-left: 2rem;

  .loading-icon {
    font-size: 1.5rem;
    color: var(--purple-color);
    animation: rotation 1.7s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  span {
    color: var(--white-color);
    background-color: var(--purple-color);
    width: max-content;
    padding: 0.3rem 1rem;
    border-radius: 0.625rem;
    opacity: 0.5;
    font-size: 0.75rem;
  }
`;
