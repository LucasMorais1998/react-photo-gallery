import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--gray-color);
  border-radius: 0.625rem;
  padding: 0.625rem;
  max-height: 12rem;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 85%;
    max-width: 100%;
    border-radius: 0.625rem;
    object-fit: cover;
  }

  .photo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.3rem;

    span {
      text-align: center;
      font-size: 0.625rem;
    }

    .photo-item-delete-icon {
      font-size: 1.25rem;
      color: var(--purple-color);
      opacity: 0.6;
      cursor: pointer;
      transition: opacity ease 2ms;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
