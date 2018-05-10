import styled from 'styled-components';

import BackImg from 'assets/images/header-images/header-image.jpg';

const Wrapper = styled.div`
  font-family: Poppins-Light;
  .content {
    margin: 0 16rem;
    margin-top: -4rem;
    margin-bottom: 8rem;
    .background1 {
      flex: 1;
      background: transaprent;
    }
    .background2 {
      flex:1;
      background: #F8F7F3;
    }
    .background3 {
      flex:1;
      background: #253065;
    }
    .overlayer {
      position: absolute;
      padding-top: 5.4rem;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
    }
    table {
      width: 100%;
      border-spacing: 0;
    }
    .section {
      display: flex;
      align-items: center;
    }
    .block {
      width: 33.33%;
      padding: 2rem 4rem 2rem 8.4rem;
    }
    .first {
      
    }
    .second {
      color: #35447d !important;
      background: #F8F7F3;
    }
    .third {
      color: #fff !important;
      background: #253065;
    }
    .title {
      font-size: 3.6rem;
      line-height: 3.6rem;
      padding: 0;
      margin: 0;
    }
    .unit {
      font-size: 1.8rem;
    }
    .shape {
      width: 18.6rem;
      height: 2rem;
      background: #e1e1e1;
      margin-top: -1.5rem;
      margin-left: -2.4rem;
      margin-bottom: 2rem;
    }
    .shape.second {
      background: #35447d;
    }
    .label {
      color: #35447d;
      font-size: 1.6rem;
    }
    .inline {
      display: flex;
      align-items: center;
    }
    .icon {
      margin-right: 1rem;
    }
    .icon1 {
      width: 3rem;
      height: 3rem;
    }
    .border {
      border-bottom: 1px solid #e1e1e1;
    }
    .price {
      font-size: 2.2rem;
    }
    .button-wrapper {
      margin-top: 5rem;
    }
    .result.block.first {
      width: 100%;
      background: none;
      display: block;
    }
    .result.second {
      background: none;
    }
    .result.block.second {
      background: #e1e1e1;
    }
    .result.block.third {
      background: #35447d;
      .label {
        color: white;
      }
    }
  }
  .included {
    margin: 0 3.8rem;
    background: #f8f7f3;
    padding: 10rem;
    display: flex;
    justify-content: space-between;
    color: #35447d;
    .title-wrapper {
      margin-right: 10rem;
    }
    .details {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 0 1rem;
      h1 {
        font-weight: normal;
      }
      .image-wrapper {
        width: 100%;
        text-align: left;
        img {
          height: 10rem;
        }
      }
    }
  }
  .extras {
    margin: 0 3.8rem;
    background: #e1e1e1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #35447d;
    height: 48rem;
    .title-wrapper {
      margin: -10rem 10rem 10rem 10rem;
    }
    .details {
      width: 25rem;
      margin-right: 10rem;
      h1 {
        font-weight: normal;
      }
      .image-wrapper {
        display: flex;
        p {
          margin-left: 1.5rem;
          margin-top: 1rem;
        }
        span {
          font-size: 3.6rem;
          font-weight: bold;
        }
      }
    }
    .start {
      flex: 1;
      background-image: url(${BackImg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: calc(100% + 6rem);
      .description {
        margin-top: 15rem;
        margin-left: 6.2rem;
        height: 17.8rem;
        background: #f8f7f3;
        display: flex;
        align-items: center;
        padding: 0 5rem 0 4rem;
      }
      .button-wrapper {
        margin-left: 10.4rem;
        margin-top: 8rem;
      }
    }
  }
  @media only screen and (max-width: 1400px) {
    .content {
      margin-left: 6rem;
      margin-right: 6rem;
      .block {
        padding: 2rem 2rem 2rem 3rem;
      }
    }
  }
  @media only screen and (max-width: 992px) {
    .content {
      margin-left: 0;
      margin-right: 0;
      .block {
        padding: 1rem 1rem 1rem 1rem
      }
    }
    .included {
      flex-direction: column;
      .title-wrapper {
        margin-bottom: 4rem;
      }
      .details {
        margin: 2rem;
      }
    }
    .extras {
      flex-direction: column;
      height: auto;
      .title-wrapper {
        width: 100%;
        margin-top: 10rem;
        margin-left: 30rem;
        margin-bottom: 4rem;
      }
      .details {
        margin-bottom: 10rem;
      }
    }
  }
`;

export default Wrapper;
