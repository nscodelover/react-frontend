import styled from 'styled-components';

import homeBackImg from 'assets/images/header-images/header-image.jpg';
import helpBackImg from 'assets/images/header-images/header-image-brakes.jpg';
import pricingBackImg from 'assets/images/header-images/header-image-pricing2.jpg';
import contactBackImg from 'assets/images/header-images/header-image-contact-v1.jpg';

function setBackground({ page }) {
  switch (page) {
    case 'help':
      return helpBackImg;
    case 'pricing':
      return pricingBackImg;
    case 'contact':
      return contactBackImg;
    case 'home':
    default:
      return homeBackImg;
  }
}

const Wrapper = styled.div`
  align-items: center;
  background-image: url(${props => setBackground(props)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 54rem;

  .page-icon {
    .icon-wrapper {
      display: flex;
      height: 12.8rem;
      margin: auto;
      width: 12.8rem;
      .icon {
        width: 100%;
        margin: auto;
        height: auto;
      }
    }
    .bottom-line {
      background: #8AEBF1;
      height: 0.5rem;
      margin: auto;
      width: 5.6rem;
    }
  }

  .title {
    color: #8aebf1;
    font-size: 4.5rem;
    text-align: center;
    margin: 2.3rem 0 0 0;
  }

  .subTitle {
    color: #fff;
    font-family: Helvetica;
    font-size: 2.8rem;
    font-weight: lighter;
    margin-bottom: 2.5rem;
    margin-top: ${props => (props.top ? '2.6rem' : '2rem')};
    line-height: 3.64rem;
    padding: 0 4rem;
    text-align: center;
    span {
      color: #8aebf1;
      font-family: UtopiaStd-Semibold;
    }
  }
`;

export default Wrapper;
