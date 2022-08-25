import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #27282F;

    --white-color: #fff;
    --gray-color: #3D3F43;
    --purple-color: #756DF4;

    --red-color: #f94449;
    --green-color: #3aa363

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--bg-color);
    -webkit-font-smoothing: antialiaased;
  }

  body, input {
    font-family: Helvetica, sans-serif;
    font-weight: 400;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 300px;
    background: var(--bg-color);
    color: var(--white-color);
    padding: 1.8rem;
    position: relative;
    border-radius: 0.25rem;
    text-align: center;
    
    .react-modal-message {
      margin-top: 1rem;
      color: var(--white-color);
      line-height: 1.3rem;
      letter-spacing: .05rem;
      text-transform: uppercase;
      text-shadow: 2px 0px 6px rgba(0, 0, 0, 0.5);
    }

    .react-modal-close {
      position: absolute;
      top: 0.6rem;
      right: 0.6rem;
      border: 0;
      font-size: 1.2rem;
      background: transparent;
      
      cursor: pointer;
      opacity: .6;
      transition: opacity ease 0.2s;

      &:hover {
        opacity: 1;
        color: var(--purple-color);
      }
    }

    .react-modal-buttons {
      display: flex;
      justify-content:space-evenly;
      align-items: center;
      margin-top: 1rem;

      .react-modal-confirm-true,
      .react-modal-confirm-false {
        font-size: 1.8rem;
        cursor: pointer;
        opacity: .6;
        transition: opacity ease 0.2s;
        border: 1px solid var(--white-color);
        border-radius: 50%;
        width: 2.5rem;
        height: 2.5rem;
        padding: .5rem;

        &:hover {
          opacity: 1;
        }
      }

      .react-modal-confirm-true {
        &:hover {
          color: var(--green-color);
          border-color: var(--green-color);
        }
      }

      .react-modal-confirm-false {
        &:hover {
          color: var(--red-color);
          border-color: var(--red-color);
        }
      }
    }
  }

  

  
`;
