import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--gray-color);
  border-radius: 0.625rem;
  padding: 0.625rem;

  max-height: 12rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  img {
    width: 100%;
    height: 85%;
    max-width: 100%;
    border-radius: 0.625rem;
    object-fit: cover;
  }

  span {
    text-align: center;
    font-size: 0.625rem;
  }
`;
