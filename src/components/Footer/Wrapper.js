import styled from 'styled-components';

const Footer = styled.div`
  align-items: center;
  background: #FFF;
  display: flex;
  height: 15rem;
  justify-content: space-between;
  padding: 0 7rem;
  .info-group {
    align-items: center;
    display: flex;
    .logo-wrapper {
      height: 6rem;
      width: 7.2rem;
      img {
        height: 100%;
        margin: auto;
        width: auto;
      }
    }
    .information {
      color: #35447D;
      padding-top: 2rem;
      margin-left: 4rem;
      h6 {
        font-family: Helvetica;
        font-size: 1.8rem;
        font-weight: 400;
        margin: 0;
        span {
          font-weight: bold;
        }
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
  .button-group {
    display: flex;
    margin-top: 4rem;
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
    justify-content: space-around;
    padding: 3rem 2rem;
    .info-group {
      padding: 0 5rem;
      .information {
        h6 {
          text-align: center;
        }
        p {
          padding-top: 1rem;
          text-align: center;
        }
      }
    }
    .button-group {
      margin-left: 10rem;
      margin-top: 1rem;
    }
  }
`;

export default Footer;
