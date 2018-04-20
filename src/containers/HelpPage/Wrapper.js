import styled from 'styled-components';

import BackImg from 'assets/images/header-images/header-image.jpg';

const Wrapper = styled.div`
  .section {
    background: #FFF;
    margin: 0 3rem;
    margin-top: -4rem;
    z-index: 100;
    color: #35447d;
    .stepName {
      left: 2.6rem;
      top: 2.1rem;
      font-size: 2.2rem;
      position: absolute;
    }
    .stepImage {
      margin-left: 11.4rem;
      margin-top: 11.3rem;
    }
    .title-wrapper {
      padding: 1.7rem 8.9rem 0 11.4rem;
    }
    .hint-wrapper {
      text-align: right;
      font-size: 1.4rem;
      color: #6c6c6c;
      margin: 1rem 25rem;
    }
    .hint-wrapper1 {
      font-size: 1.4rem;
      color: #6c6c6c;
      margin: 1rem 3rem;
    }
    .paragraph1 {
      background: #F8F7F3;
      height: 67.5rem;
      display: flex;
      .step1 {
        position: relative;
        flex: 1;
      }
      .step2 {
        position: relative;
        flex: 1;
      }
    }
    .paragraph2 {
      background: #e1e1e1;
      height: 33rem;
      padding: 0 12.2rem;
      margin-top: 7.6rem;
      position: relative;
      .content {
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        .stepImage {
          margin: 0;
          padding: 0;
        }
        .title-wrapper {
          margin: 0;
          padding: 0;
          width: 85rem;
        }
      }
    }
    .paragraph3 {
      height: 39rem;
      background: #8aebf1;
      padding-left: 2.1rem;
      padding-top: 2.6rem;
      margin-top: 7.4rem;
      display: flex;
      position: relative;
      .content {
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        padding: 0 8rem;
        margin: auto;
        .stepImage {
          margin: 0;
          padding: 0;
        }
        .title-wrapper {
          margin: 0;
          padding: 0;
          width: 36rem;
        }
        .detail {
          margin: 0;
          padding: 0;
          width: 45rem;
          font-size: 2.2rem;
        }
      }
    }
    .paragraph4 {
      height: 63rem;
      display: flex;
      margin-top: 12rem;
      .part1 {
        flex: 1;
        background: #F8F7F3;
        position: relative;
        padding-right: 10rem;
      }
      .part2 {
        flex: 1;
        background-image: url(${BackImg});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: calc(100% + 10rem);
        margin-top: -5rem;
        .description {
          margin-top: 8.5rem;
          margin-left: 6.2rem;
          height: 21rem;
          background: #253065;
          color: white;
          font-size: 2.2rem;
          display: flex;
          align-items: center;
          padding: 4.5rem 12.3rem 4.5rem 4rem;
          font-family: Poppins-Light;
        }
        .description1 {
          margin-left: 6.2rem;
          height: 17.8rem;
          background: #f8f7f3;
          display: flex;
          align-items: center;
          padding: 0 5rem 0 4rem;
        }
        .button-wrapper {
          margin-left: 10.4rem;
          margin-top: 4rem;
        }
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .section {
      .paragraph1 {
        height: auto;
        padding-bottom: 2rem;
      }
      .paragraph2 {
        .content {
          .stepImage {
            margin-right: 5rem;
          }
        }
      }
      .paragraph4 {
        .part1 {
          padding-right: 0;
        }
        .part2 {
          .description{
            padding: 1rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .stepImage {
      margin: auto;
    }
    .title-wrapper {
      margin: auto;
    }
    .section {
      .hint-wrapper {
        width: 100%;
        margin-left: 0;
        text-align: right;
      }
      .paragraph1 {
        flex-direction: column;
        height: auto;
        padding-bottom: 5rem;
        .step2 {
          margin-top: 3rem;
        }
      }
      .paragraph2 {
        padding: 3rem;
        height: auto;
        .content {
          padding: 5rem;
          flex-wrap: wrap;
          .stepImage {
            margin: auto;
          }
          .title-wrapper {
            width: auto;
            text-align: left;
          }
        }
      }
      .paragraph3 {
        height: auto;
        .content {
          padding: 3rem;
          flex-direction: column;
          .stepImage {
            height: 16rem;
            margin-bottom: 2rem;
            img {
              max-height: 100%;
            }
          }
          .title-wrapper {
            width: auto;
          }
          .detail {
            width: auto;
          }
        }
      }
      .paragraph4 {
        flex-direction: column;
        height: auto;
        .part1 {
          padding-bottom: 5rem;
          .stepImage {
            margin-left: 0;
            margin-top: 10rem;
            text-align: center;
          }
          .title-wrapper {
            width: 100%;
            padding: 3rem 5rem;;
          }
        }
        .part2 {
          padding: 3rem;
          .description {
            margin: auto;
          }
          .description1 {
            margin: auto;
          }
          .button-wrapper {
            margin: auto;
          }
        }
      }
    }
  }
`;

export default Wrapper;
