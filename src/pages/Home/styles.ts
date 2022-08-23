import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--bg-color);
  color: var(--white-color);
  min-height: 100vh;
`;

export const MainContent = styled.main`
  margin: 0 auto;
  max-width: 980px;
  padding: 30px 0;
`;

export const ScreenWarning = styled.div`
  text-align: center;

  .loading-icon {
    font-size: 3.125rem;
    margin-bottom: 1.25rem;
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

  .no-photos-icon {
    font-size: 3.125rem;
    margin-bottom: 1.25rem;
  }
`;

export const PhotoListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.625rem;
`;
