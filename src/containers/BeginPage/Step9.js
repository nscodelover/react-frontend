import React, { Component } from 'react';
import styled from 'styled-components';

import TitleWithShape from 'components/TitleWithShape';
import HelpText from 'components/HelpText';

import QLTickIcon from 'assets/images/QL-Tick.svg';
import LogoIcon from 'assets/images/logo/Logo-QL-Blue.svg';

const Wrapper = styled.div`
  color: #35447d;
  padding-left: 5.4rem;
  padding-right: 16rem;
  padding-top: 6.8rem;
  .page-title {
    display: flex;
    padding-left: 9rem;
    align-items: center;
    img {
      margin-top: -3rem;
      margin-right: 2rem;
      height: 12rem;
    }
  }
  .sub-title {
    padding-left: 10rem;
  }
  .form-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 9rem;
    .left-pane {
      background: #F8F7F3;
      width: 66rem;
      position: relative;
      padding: 10rem 10rem;
      .logo {
        display: flex;
        justify-content: space-between;
        img {
          height: 3rem;
        }
      }
      P {
        padding: 0;
        margin: 0;
      }
      .reference {
        margin-top: 4rem;
      }
      .date {
        margin-top: 2rem;
      }
      .bill {
        margin-top: 2rem;
      }
      .description {
        display: flex;
        justify-content: space-between;
        padding-bottom: 2px;
        border-bottom: 2px solid #8aebf1;
      }
      .label {
        flex: 1;
      }
      .quantity {
        width: 50px;
        text-align: center;
      }
      .price {
        width: 80px;
        text-align: right;
      }
      .second {
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 15px;
        border-bottom: 2px solid #8aebf1;
        margin-bottom: 5px;
      }
      .result {
        display: flex;
        justify-content: flex-end;
        margin-left: auto;
        padding: 2px;
        .label {
          text-align: right;
        }
        .value {
          width: 15rem;
          text-align: right;
        }
      }
      .result.sub {
        padding: 0;
      }
      .total {
        font-size: 2rem;
      }
    }
    .right-pane {
      margin-top: 6rem;
      width: 36rem;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding-left: 0;
    padding-right: 0;
    margin-top: auto;
    .form-wrapper {
      flex-direction: column-reverse;
      margin-left: auto;
      margin-right: auto;
      margin-top: 0;
      align-items: center;
      .left-pane {
        margin-top: 5rem;
      }
      .right-pane {
        justify-content: center;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .page-title {
      padding-left: 0;
    }
  }
`;

class Step8 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Wrapper>
        <div className="page-title">
          <img alt="ql-tick" src={QLTickIcon} />
          <TitleWithShape
            title="You're all done! You should receive an email shortly with all your information."
          />
        </div>
        <p className="sub-title">See below for a confirmation of your payment. We'll get in touch with you shortly.</p>
        <div className="form-wrapper">
          <div className="left-pane">
            <div className="logo">
              <img alt="logo" src={LogoIcon} />
              <p>Confirmation</p>
            </div>
            <p className="reference">Reference Number</p>
            <p>RN343324</p>
            <p className="date">Date</p>
            <p>26/08/2017</p>
            <p className="bill">Billing to</p>
            <p>Roger Lynch,</p>
            <p>r.lynch@gmail.com</p>
            <p>0422 349 234</p>
            <h2>ORDER SUMMARY</h2>
            <div className="description">
              <p className="label">Description</p>
              <p className="quantity">Qty</p>
              <p className="price">Price</p>
            </div>
            <div className="description second">
              <p className="label">Quick Legal Package</p>
              <p className="quantity">1</p>
              <p className="price">$880.00</p>
            </div>
            <div className="result">
              <p className="label">Subtotal</p>
              <p className="value">$880.00</p>
            </div>
            <div className="result">
              <p className="label">GST</p>
              <p className="value">$80.00</p>
            </div>
            <div className="result">
              <p className="label total">Total</p>
              <p className="value total">$880.00</p>
            </div>
            <div className="result sub">
              <p className="label" />
              <p className="value">incl</p>
            </div>
            <div className="result sub">
              <p className="label" />
              <p className="value">GST</p>
            </div>
          </div>
          <div className="right-pane">
            <HelpText>Keep this information for later as a reference</HelpText>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Step8;
