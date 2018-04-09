import styled from 'styled-components';

const Wrapper = styled.div`
  .section1 {
    background: #e1e1e1;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 11.6rem 20rem 0 20rem;
    .item {
      align-items: center;
      color: #35447d;
      display: flex;
      font-size: 1.8rem;
      flex-wrap: wrap;
      position: relative;
      text-align: center;
      .description {
        font-family: Helvetica;
        margin-top: 2.5rem;
      }
    }
  }

  .section2 {
    background: #f8f7f3;
    align-items: center;
    display: flex;
    height: 34.7rem;
    justify-content: space-between;
    padding: 0 25rem;
    .description {
      align-items: center;
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      h1 {
        color: #35447d;
        font-family: Helvetica;
        font-size: 2.8rem;
        font-weight: lighter;
        margin: 4rem;
        line-height: 4rem;
        span {
          font-weight: bold;
        }
      }
    }
  }

  .section3 {
    align-items: center;
    background: #35447d;
    display: flex;
    flex-wrap: wrap;
    height: 47.5rem;
    justify-content: space-between;
    padding: 0 16rem;
    .detail {
      .description {
        color: white;
        font-family: Poppins-Light;
        font-size: 3.4rem;
        span {
          font-weight: bold;
        }
      }
      .button-wrapper {
        display: flex;
        margin-top: 4rem;
      }
    }
    .image-wrapper {
      height: 26rem;
      margin-right: 4rem;
      width: 40rem;
      img {
        height: 100%;
        width: auto;
        margin: auto;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .section1 {
      justify-content: space-around;
      padding: 8.6rem 10rem 0 10rem;
    }
    .section2 {
      height: auto;
      justify-content: space-around;
      padding: 10rem 15rem;
      .description {
        justify-content: space-around;
      }
    }
    .section3 {
      height: auto;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 10rem 10rem;
      .detail {
        text-align: center;
        .button-wrapper {
          justify-content: space-between;
        }
      }
      .image-wrapper {
        margin: 5rem 0 0 0;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .section1 {
      padding: 5.6rem 5rem 0 5rem;
    }
    .section2 {
      height: auto;
      padding: 6rem 10rem;
      flex-direction: column;
      .description {
        text-align: center;
      }
    }
    .section3 {
      height: auto;
      flex-direction: column;
      padding: 10rem 10rem;
      .detail {
        text-align: center;
        .button-wrapper {
          justify-content: space-between;
        }
      }
      .image-wrapper {
        margin: 5rem 0 0 0;
      }
    }
  }
`;

export default Wrapper;
