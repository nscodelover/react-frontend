import styled from 'styled-components';

const Wrapper = styled.div`
  .content {
    background: transparent;
    margin: 0 5rem;
    margin-top: -5rem;
    display: flex;
    justify-content: space-between;
    .left-pane {
      background: #e1e1e1;
      width: 66.6rem;
      padding: 11.1rem 7.6rem 6.4rem 10.6rem;
      .fields {
        margin-top: 5rem;
      }
      .description {
        width: 64.4rem;
        height: 35.8rem;
        background: #f8f7f3;
        margin-top: 3rem;
      }
      .button-wrapper {
        margin-top: 3rem;
        display: flex;
        justify-content: flex-end;
      }
    }
    .right-pane {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 11.1rem;
      color: #35447d;
      h1 {
        font-size: 2.8rem;
        font-weight: normal;
        letter-spacing: 1px;
      }
      p {
        padding: 0;
        margin: 0;
        font-size: 1.8rem;
      }
      .info {
        display: flex;
        margin-top: 3rem;
        img {
          margin-right: 1rem;
        }
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .content {
      flex-direction: column;
      align-items: center;
      .right-pane {
        padding-top: 5rem;
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .content .left-pane .description {
      width: auto;
    }
  }
`;

export default Wrapper;
