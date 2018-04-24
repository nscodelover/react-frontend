import styled from 'styled-components';

const Wrapper = styled.div`
  color: #35447d;
  .content {
    padding: 7rem 16rem;
    display: flex;
    justify-content: space-between;
    .left-pane {
      width: 55rem;
      .subTitle {
        margin-top: 1.2rem;
        margin-bottom: 3.2rem;
        font-size: 1.4rem;
        span {
          font-weight: bold;
        }
      }
      .detail {
        font-size: 1.6rem;
        margin-bottom: 6rem;
      }
      h2 {
        font-size: 2.8rem;
        font-weight: normal;
        margin-bottom: 2.7rem;
      }
    }
    .right-pane {
      .menu {
        width: 45.5rem;
        background: #f8f7f3;
        padding: 6rem 7rem;
        h1 {
          font-size: 2.8rem;
        }
        p {
          font-size: 1.4rem;
          text-decoration: underline;
        }
      }
    }
  }
  @media only screen and (max-width: 1400px) {
    .content {
      flex-direction: column-reverse;
      align-items: center;
      .right-pane {
        margin-bottom: 2rem;
      }
    }
  }
`;

export default Wrapper;
